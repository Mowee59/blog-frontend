import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

/**
 * Handles POST requests for revalidating pages.
 * This function is triggered by a webhook to update cached pages when content changes.
 * @param {NextRequest} request - The incoming request object
 * @returns {Promise<NextResponse>} A JSON response indicating the result of the revalidation
 */
export async function POST(request: NextRequest) {
  // Parse the request body to get the slug and model
  const body = await request.json();
  const authorization = request.headers.get('Authorization');
  const { model } = body;
  // TODO: Implement a more secure method to verify the secret
  // Check for secret to confirm this is a valid request
  if (authorization !== process.env.WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    if (model === 'article') {
      const slug = body.entry.slug;
      

      // Revalidate the article page
      revalidatePath(`/articles/${slug}`);
      return NextResponse.json({ revalidated: true, now: Date.now() });
    } else if (model === 'tag') {
      const name = body.entry.name;
      // Revalidate the tag page and the tags index page
      revalidatePath(`/tags/${name}`);
      revalidatePath('/tags');
      return NextResponse.json({ revalidated: true, now: Date.now() });
    } else {
      // Return an error for unsupported models
      return NextResponse.json({ revalidated: false, message: 'Unsupported model' });
    }
  } catch (err) {
    // If there was an error, Next.js will continue to show the last successfully generated page
    // Return a 500 status code to indicate a server error
    return NextResponse.json({ revalidated: false }, { status: 500 });
  }
}