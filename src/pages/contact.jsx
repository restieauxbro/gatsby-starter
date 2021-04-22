import React from "react"
import {motion, AnimatePresence} from 'framer-motion'
import Layout from "../components/layout/layout"

const Contact = () => {
  return (
    <Layout>
      <h1>Hello Contact</h1>
      
      <motion.div
        style={{ width: 560, height: 300 }}
        className="box"
        layoutId="box"
        animate={{backgroundColor: "#fafafa"}}
      />
      
    </Layout>
  )
}

export default Contact
