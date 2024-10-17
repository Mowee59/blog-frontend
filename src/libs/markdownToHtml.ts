/*
 * This file is part of the Blog Frontend project.
 * 
 * Copyright (C) 2024 Aniss.dev
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


/*
 * This file is part of the Blog Frontend project.
 * 
 * Copyright (C) 2024 Aniss.dev
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */



// Import necessary packages for markdown processing
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';


// TODO: Move this file out of static assets

/**
 * A helper function that parses a markdown string into HTML
 *
 * @param markdown The markdown string to convert
 * @returns A promise that resolves to the HTML string
 */
export default async function markdownToHtml(markdown: string) {
  // Use the unified processor to transform markdown to HTML
  const result = await unified()
    // Parse markdown to an AST (Abstract Syntax Tree)
    .use(remarkParse)
    // Support GitHub Flavored Markdown
    .use(remarkGfm)
    // Convert markdown AST to HTML AST, allowing dangerous HTML
    .use(remarkRehype, { allowDangerousHtml: true })
    // Parse HTML inside markdown (e.g., for custom components)
    .use(rehypeRaw)
    // Sanitize HTML output to prevent XSS attacks
    .use(rehypeSanitize)
    // Add syntax highlighting to code blocks
    .use(rehypePrism)
    // Convert HTML AST to string
    .use(rehypeStringify)
    // Process the markdown input
    .process(markdown);

  // Convert the result to a string and return it
  return result.toString();
}
