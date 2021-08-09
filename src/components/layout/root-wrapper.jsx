import React from "react"
import Header from "./header"
import "../../styles/layout.scss"
import { AnimateSharedLayout } from "framer-motion"

const RootWrapper = ({ children }) => {
  return (
    <div className="global-wrapper">
      <AnimateSharedLayout>
        <Header />
        <main>{children}</main>
      </AnimateSharedLayout>
    </div>
  )
}

export default RootWrapper
