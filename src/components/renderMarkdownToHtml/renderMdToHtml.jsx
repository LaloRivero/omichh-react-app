import React from "react";
import ReactMarkdown from "react-markdown";

export const RenderMdToHtml = ({doc}) => {
  return (
    <ReactMarkdown>{doc}</ReactMarkdown>
  )
}