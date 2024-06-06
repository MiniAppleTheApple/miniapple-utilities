import type { Component } from "solid-js"
import PageWrapper from "./PageWrapper"

const Home: Component = () => (
  <PageWrapper>
    <section>
      <hgroup class="mt-12">
        <h1 class="title text-wrap">MiniApple's Utilities</h1>
        <p>Utilities tools made by MiniApple</p>
      </hgroup>
      <section class="grid mt-12">
        <div>
          <h3>Random tools</h3>
          <ul>
            <li><a href="/tools/random-number">Random Number</a></li>
          </ul>
        </div>
      </section>
    </section>
  </PageWrapper>
)

export default Home
