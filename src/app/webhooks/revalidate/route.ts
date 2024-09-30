import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const authorization = request.headers.get('Authorization');

  
  const { slug, model } = body;


  
  //TODO: verify secret
  // Check for secret to confirm this is a valid request
  if (authorization !== process.env.WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  if (model === 'article') {
    try {
      // Revalidate the article page
      revalidatePath(`/articles/${slug}`);
      return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (err) {
      // If there was an error, Next.js will continue to show the last successfully generated page
      return NextResponse.json({ revalidated: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ revalidated: false, message: 'Not an article model' });
  }
  
}