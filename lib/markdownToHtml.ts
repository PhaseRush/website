import remark, { stringify } from "remark";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import prism from "remark-prism";
import remarkGfm from "remark-gfm";
import { unified } from "unified";
import rehypePrism from "rehype-prism-plus";
// import rehypePrism from "@mapbox/rehype-prism";

import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";

// import {compile} from '@mdx-js/mdx'
import rehypeHighlight from 'rehype-highlight'

export default async function markdownToHtml(markdown: string) {
  // https://unifiedjs.com/learn/recipe/remark-table/
  // const result = await unified()
  //   .use(remarkParse)
  //   .use(remarkGfm)
  //   .use(remarkRehype)
  //   .use(rehypeStringify)
  //   .process(markdown);

  // code blocks work but no table.
  // const result = await remark()
  // .use(remarkHtml)
  // .use(prism)
  // .process(markdown);

  // const result = await unified()
  // .use(remarkParse)
  // .use(remarkHtml)
  // .use(remarkGfm)
  // .use(rehypePrism)
  // .use(rehypeStringify)
  // .process(markdown);


  // return result.toString();
  return markdown;
}
