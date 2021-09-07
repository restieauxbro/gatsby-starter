import React from "react"
import Header from "./header"
import "../../styles/layout.scss"

const RootWrapper = ({ children }) => {
  return (
    <div className="global-wrapper">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default RootWrapper
