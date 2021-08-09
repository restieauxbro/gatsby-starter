import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"

const Post = ({ data }) => {
  const post = data.ghostPost
  return (
    <>
      <SEO description={post.excerpt} title={post.title} />
      <Layout>
        <article className="post">
          {post.feature_image ? (
            <img src={post.feature_image} alt={post.title} />
          ) : null}
          <h1>{post.title}</h1>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </Layout>
    </>
  )
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      feature_image
      excerpt
      html
      slug
      title
      tags {
        id
        slug
        
      }
      primary_tag {
        id
        slug
        
      }
    }
  }
`
