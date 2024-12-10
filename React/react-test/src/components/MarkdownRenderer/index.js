import React from "react";
import { marked } from "marked";

const MarkdownRenderer = ({ markdown }) => {
    //marked를 사용해 마크다운을 HTML로 변환
    const html = marked(markdown);
    console.log(html)
    return (
        <div
            dangerouslySetInnerHTML={{ __html: html }}
            style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}
        ></div>
    )
};

export default MarkdownRenderer;