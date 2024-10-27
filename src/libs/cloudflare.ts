import axios from "axios";

// Retrieve Cloudflare Zone ID and API Token from environment variables
const CLOUDFLARE_ZONE_ID = process.env.CLOUDFLARE_ZONE_ID;
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

// Check if the necessary Cloudflare environment variables are set
if (!CLOUDFLARE_ZONE_ID || !CLOUDFLARE_API_TOKEN) {
  console.error("Cloudflare environment variables are not set");
}

// Create an axios instance configured for Cloudflare API
const cloudflareApi = axios.create({
  baseURL: `https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}`,
  headers: {
    Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
    "Content-Type": "application/json",
  },
});

/**
 * Purges the Cloudflare cache for the specified URLs.
 * 
 * @param {string[]} urls - The list of URLs to purge from the Cloudflare cache.
 * @returns {Promise<void>} A promise that resolves when the cache has been purged.
 */
export async function purgeCloudflareCache(urls: string[]): Promise<void> {
  try {
    // Send a POST request to the Cloudflare API to purge the cache for the specified URLs
    const response = await cloudflareApi.post("/purge_cache", {
      files: urls,
    });

    // Check if the cache purge was successful
    if (response.data.success) {
      console.log("Cloudflare cache purged successfully");
    } else {
      console.error("Failed to purge Cloudflare cache:", response.data.errors);
    }
  } catch (error) {
    // Log any errors that occur during the cache purge
    console.error("Error purging Cloudflare cache:", error);
  }
}
