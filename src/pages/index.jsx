import React, { useState, useContext } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import "../styles/landing-page.scss"
import { motion } from "framer-motion"
import { IntersectionObserver } from "../utils/intersection-observer"
import { IntersectionContext } from "../utils/intersection-observer"
import {spring} from '../utils/animations'

const IndexPage = () => {
  const [gridLayout, changeGridLayout] = useState("0 0 1fr 0")
  return (
    <>
      <Layout>
        <SEO title="Home" />

        <IntersectionObserver>
          <SectionWithChangingGrid
            changeGridLayout={changeGridLayout}
            newLayout="0 0 1fr 0"
          >
            <h1>Looking for me?</h1>
          </SectionWithChangingGrid>
        </IntersectionObserver>
        <div style={{ height: "100vh" }} />
        <IntersectionObserver>
          <SectionWithChangingGrid
            changeGridLayout={changeGridLayout}
            newLayout="0 1fr 1fr 1fr"
          >
            <h1>Looking for me?</h1>
          </SectionWithChangingGrid>
        </IntersectionObserver>
        <div style={{ height: "100vh" }} />
        <IntersectionObserver>
          <SectionWithChangingGrid
            changeGridLayout={changeGridLayout}
            newLayout="2fr 0 1fr 0"
          >
            <h1>Hey</h1>
          </SectionWithChangingGrid>
        </IntersectionObserver>
        <div style={{ height: "100vh" }} />
        <GridParent gridLayout={gridLayout} />
      </Layout>
    </>
  )
}
export default IndexPage

const GridParent = ({ gridLayout }) => {
  return (
    <>
      <div className="hero-grid-cnt">
        <div
          className={`grid hero-grid-lines ${gridLayout}`}
          style={{
            gridTemplateColumns: gridLayout,
          }}
        >
          <div/>
          <motion.div transition={spring} layout className="line vertical" />
          <motion.div transition={spring} layout className="line vertical" />
          <motion.div transition={spring} layout className="line vertical" />
          
        </div>
      </div>
    </>
  )
}

export const SectionWithChangingGrid = ({
  changeGridLayout,
  newLayout,
  children,
}) => {
  const { inView } = useContext(IntersectionContext)
  return (
    <>
      {children}
      {inView && changeGridLayout(newLayout)}
    </>
  )
}
