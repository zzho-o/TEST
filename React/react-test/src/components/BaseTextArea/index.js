import React, { forwardRef } from "react";

const BaseTextArea = forwardRef((props, ref) => { 
    const {className, ...restProps} = props // className 필터링 나머지 매개변수를 이용해 그 외의 props들을 받는다.

    return <textarea ref={ref} {...restProps}></textarea>
})

export default BaseTextArea