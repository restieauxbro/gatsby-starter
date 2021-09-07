import React from "react"
import { motion } from "framer-motion"
import Layout from "../components/layout/layout"
import { shapeTransition } from "../utils/animations"

const Blog = () => {
  return (
    <Layout>
      <h1>Hello Blog</h1>
      <p>
        <br />
        <br />
        <br />
        <br />
        br
        <br />
      </p>
      <motion.div
        style={{ width: 500, height: 500, backgroundColor: "#0099ff" }}
        className="box"
        layoutId="box"
        transition={shapeTransition}
        animate={{ backgroundColor: "#0099ff", transition: { duration: 1 } }}
      />
    </Layout>
  )
}



export default Blog
