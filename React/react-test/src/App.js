import React, { Component, createRef } from "react";
import BaseTextArea from "./components/BaseTextArea";
import Markdown from "./components/Markdown";

class App extends Component {
    constructor(props) {
        super(props); //
        this.textAreaRef = createRef();
        this.state = {
            text: "",
            cnt:0
        }
    }

    handleClear = () => {
        if (this.textAreaRef.current) {
            this.textAreaRef.current.value = ""
            this.setState({ text: "",cnt:0 })
        }
    }

    handleRenderMarkdown = () => {
        // 마크다운 상태 업데이트
        if (this.textAreaRef.current) {
            this.setState({ text: this.textAreaRef.current.value })
        }
    }

    render() {
        return (
            <div style={{ padding: 20 }}>
                <BaseTextArea
                    ref={this.textAreaRef}
                    placeholder="입력하시오."
                    style={{ width: "100%" }}
                />
                <div>{`애너그램 갯수: ${this.state.cnt}`}</div>
                {/* 애너그램 구현을 못하여 0으로 남겨두겠습니다 */}
                <div>
                    <button onClick={this.handleClear}>삭제</button>
                    <button onClick={this.handleRenderMarkdown}>Markdown</button>
                </div>
                <Markdown markdown={this.state.text} />
            </div>
        )
    }
}

export default App
