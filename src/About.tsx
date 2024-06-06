import type { Component } from "solid-js"
import PageWrapper from "./PageWrapper"

const About: Component = () => (
  <PageWrapper>
    <section>
      <h1>About</h1>
      <p>This site is built in the intention to practice <a href="https://www.solidjs.com/">Solid.js</a>, also using it in my personal life when needed, but at same time giving others the access to these tools</p>
      <h2>Why not use others alternatives</h2>
      <ul>
        <li>
          Ads
          <ul>
            <li>Vision pollution</li>
            <li>Bother me</li>
            <li>Need to be careful to not click the ads</li>
          </ul>
        </li>
        <li>
          UI
          <ul>
            <li>Not responsive(Mobile/Desktop's ui compatibility)</li>
            <li>Too complicated for easy thing</li>
            <li>Ugly</li>
          </ul>
        </li>
      </ul>
      <h2>Why this tool</h2>
      <ul>
        <li>
          No Ads
          <ul>
            <li>Lighten your burden to pay attention to things that matter</li>
            <li>Fit my use case</li>
            <li>Don't need to be careful to not click the ads</li>
          </ul>
        </li>
        <li>
          UI
          <ul>
            <li>Responsive(Mobile/Desktop's ui compatibility)</li>
            <li>Simple UI, not much styling, but easy to understand</li>
          </ul>
        </li>
      </ul>
    </section>
  </PageWrapper>
)

export default About 
