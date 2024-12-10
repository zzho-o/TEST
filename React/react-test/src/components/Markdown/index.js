import React from "react";
import { marked } from "marked";

const Markdown = ({ markdown }) => {
    const renderer = new marked.Renderer();

    // Heading에 앵커추가
    renderer.heading = (text, num) => {
        const id = text.toLowerCase().replace(/\s+/g, "-") //id의 공백제거
        return `
            <h${num} id="${id}">
                <a href="#${id}">${text}</a>
            </h${num}>
        `;
    };

    // Blockquote 클릭 시 복사 기능 추가
    renderer.blockquote = (quote) => {
        return `
            <blockquote style="cursor: pointer;" onclick="navigator.clipboard.writeText('${quote}')">
                ${quote}
            </blockquote>
        `
    };

    // marked를 사용해 마크다운을 HTML로 변환
    const html = marked(markdown, { renderer })

    return (
        <div
            dangerouslySetInnerHTML={{ __html: html }}
            style={{ border: "1px solid", padding: 10}}
        ></div>
    )
}

export default Markdown
