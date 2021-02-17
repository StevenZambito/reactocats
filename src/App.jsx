import React, { Component } from 'react'

import { Octocat } from './components/Octocat'

import ArrayOfCats from './octocats.json'

export class App extends Component {
  render() {
    return (
      <div className="the-main-section">
        <header>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    width="45rem"
                    height="45rem"
                    alt="GithubLogo"
                  />
                </a>
              </li>
              <li>
                <a href="#">Octodex</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://octodex.github.com/faq/">FAQ</a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li>
                <a href="https://twitter.com/githubdesign">
                  Follow us on Twitter
                </a>
              </li>
              <li id="github">
                <a href="https://github.com/">Back to GitHub.com</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section>
            {ArrayOfCats.map((cat, index) => {
              return (
                <Octocat
                  key={index}
                  name={cat.name}
                  number={cat.number}
                  imageLink={cat.imageLink}
                  imageSource={cat.imageSource}
                  imageAlt={cat.imageAlt}
                  artistLink={cat.artistLink}
                  artistAlt={cat.artistAlt}
                  artistImageSource={cat.artistImageSource}
                />
              )
            })}
          </section>
        </main>

        <footer>
          <div className="footer-text">
            <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
}
