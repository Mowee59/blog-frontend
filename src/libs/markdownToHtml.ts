import { remark } from "remark";
import html from "remark-html";

/**
 * A helper function that parse a markdown string into HTML
 *
 * @param markdown The markdown to convert
 * @returns
 */
export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
