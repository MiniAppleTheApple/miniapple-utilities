import type { Component } from 'solid-js';

const PageWrapper: Component = ({children}) => {
  return (
    <div>
      <main class="container">
        <nav>
          <ul>
            <li><strong><a href="/">Utilities</a></strong></li>
          </ul>
          <ul>
            <li><a href="/about">About</a></li>
            <li>
              <details class="dropdown">
                <summary role="button">
                  Tools 
                </summary>
                <ul>
                  <li><a href="/tools/random-number">Random Number</a></li> 
                </ul>
              </details>
            </li>
          </ul>
        </nav>
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
