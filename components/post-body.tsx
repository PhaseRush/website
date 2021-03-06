import markdownStyles from "./markdown-styles.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import rehypePrism from "rehype-prism-plus";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import clsx from "clsx";
import rehypeKatex from "rehype-katex";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      /> */}
      <ReactMarkdown
        className={clsx(markdownStyles["markdown"], "max-w-4xl", "mx-auto")}
        remarkPlugins={[remarkParse, remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex, rehypePrism]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default PostBody;
