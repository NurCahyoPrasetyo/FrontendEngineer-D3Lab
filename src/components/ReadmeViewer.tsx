"use client";

import "@/styles/readme.css";
import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";
import { useEffect, useState } from "react";

export default function ReadmeViewer({ markdown }: { markdown: string }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const parseAndSanitize = async () => {
      const rawHtml = await marked.parse(markdown); // handle Promise
      const cleanHtml = DOMPurify.sanitize(rawHtml);
      setHtml(cleanHtml);
    };

    parseAndSanitize();
  }, [markdown]);

  return <div className="readme" dangerouslySetInnerHTML={{ __html: html }} />;
}
