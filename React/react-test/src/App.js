import React, { Component, createRef } from "react";
import BaseTextArea from "./components/BaseTextArea";
import MarkdownRenderer from "./components/MarkdownRenderer";

class App extends Component {
    constructor(props) {
        super(props); //
        this.textAreaRef = createRef();
        this.state = {
            markdown: "",
        };
    }

    handleClear = () => {
        if (this.textAreaRef.current) {
            this.textAreaRef.current.value = "";
            this.setState({ markdown: "" });
        }
    }

    handleRenderMarkdown = () => {
        // 마크다운 상태 업데이트
        if (this.textAreaRef.current) {
            this.setState({ markdown: this.textAreaRef.current.value });
        }
    };

    render() {
        return (
            <div style={{ padding: 20 }}>
                <BaseTextArea
                    ref={this.textAreaRef}
                    placeholder="입력하시오."
                    style={{ width: "100%" }}
                />
                <div>
                    <button onClick={this.handleClear}>삭제</button>
                    <button onClick={this.handleRenderMarkdown}>Markdown</button>
                </div>
                <MarkdownRenderer markdown={this.state.markdown} />
            </div>
        );
    }
}

export default App;
