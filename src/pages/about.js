import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About Us</h1>
    <p style={{color:'red'}}>Ovo je About Us stranica.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage