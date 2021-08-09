import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout/layout"
import { useEffect } from "react"

const Projects = ({ data }) => {
  const postEdges = data.allGhostPost.edges
  useEffect(() => {
    console.log(postEdges)
  })
  return (
    <Layout>
      <h1>Hello projects</h1>
      {postEdges.map(({ node }) => (
        <Link to={`/projects/${node.slug}`}>
          <div className="card">
            <h3>{node.title}</h3>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default Projects

export const projectPosts = graphql`
  query MyQuery {
    allGhostPost(
      filter: { tags: { elemMatch: { name: { eq: "Getting Started" } } } }
    ) {
      edges {
        node {
          slug
          title
          excerpt
          reading_time
          tags {
            slug
            name
          }
        }
      }
    }
  }
`
