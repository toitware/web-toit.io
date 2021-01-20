import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet} from 'react-helmet'
export default function Layout({children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log("got the data", data.site.siteMetadata)
  return (<>
    <h1>{data.site.siteMetadata?.title || `Title`}</h1>
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  </>)
}
