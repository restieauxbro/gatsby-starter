import React, { useState, useEffect, useContext } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import "../styles/landing-page.scss"
import { motion } from "framer-motion"
import { IntersectionObserver } from "../utils/intersection-observer"
import { IntersectionContext } from "../utils/intersection-observer"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <div style={{ height: "100vh" }}></div>
      <IntersectionObserver>Hello</IntersectionObserver>
      <div style={{ height: "100vh" }}></div>
      <GridParent />
    </Layout>
  </>
)
export default IndexPage

const GridParent = () => {
  const [gridLayout, changeGridLayout] = useState("2fr 1fr")
  return (
    <>
      <div
        className={`grid hero-grid-lines ${gridLayout}`}
        style={{
          position: "fixed",
          height: "100vh",
          width: "100%",
          top: 0,
          gridTemplateColumns: gridLayout,
          pointerEvents: "none",
          zIndex: "-1",
        }}
      >
        <motion.div layout className="line vertical" />
        <motion.div layout className="line vertical" />
      </div>
    </>
  )
}



