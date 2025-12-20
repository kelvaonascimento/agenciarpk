"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div className={cn("markdown-content", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
        h2: ({ children }) => {
          const text = children?.toString() || "";
          const id = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");
          return (
            <h2
              id={id}
              className="font-heading text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground scroll-mt-24 group"
            >
              <a href={`#${id}`} className="no-underline hover:underline">
                {children}
              </a>
            </h2>
          );
        },
        h3: ({ children }) => {
          const text = children?.toString() || "";
          const id = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");
          return (
            <h3
              id={id}
              className="font-heading text-xl md:text-2xl font-semibold mt-8 mb-4 text-foreground scroll-mt-24"
            >
              <a href={`#${id}`} className="no-underline hover:underline">
                {children}
              </a>
            </h3>
          );
        },
        p: ({ children }) => (
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic text-muted-foreground">{children}</em>
        ),
        ul: ({ children }) => (
          <ul className="my-6 ml-6 space-y-3 list-none">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="my-6 ml-6 space-y-3 list-decimal list-outside marker:text-primary marker:font-semibold">
            {children}
          </ol>
        ),
        li: ({ children, ...props }) => {
          // Check if it's part of an unordered list by looking at the parent context
          const isOrdered = (props as { ordered?: boolean }).ordered;
          return (
            <li className="text-lg text-muted-foreground leading-relaxed">
              {!isOrdered && (
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3 align-middle" />
              )}
              {children}
            </li>
          );
        },
        blockquote: ({ children }) => (
          <blockquote className="my-8 border-l-4 border-primary pl-6 py-2 bg-muted/30 rounded-r-lg italic">
            {children}
          </blockquote>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        ),
        hr: () => <hr className="my-12 border-border" />,
        code: ({ children, className }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono text-foreground">
                {children}
              </code>
            );
          }
          return (
            <code className="block p-4 rounded-lg bg-[#1a1a1a] text-sm font-mono overflow-x-auto">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="my-6 rounded-lg bg-[#1a1a1a] overflow-x-auto">
            {children}
          </pre>
        ),
      }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
