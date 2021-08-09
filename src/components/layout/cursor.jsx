import React from "react"
import styled, { css } from "styled-components"

const StyledCursor = styled.div`
  background-color: red;
  width: 300px;
  height: 300px;

  ${props =>
    props.bg &&
    css`
      background: blue;
    `}
`

const Cursor = () => {
  return (
    <>
      <StyledCursor bg />
    </>
  )
}

export default Cursor
