import React, { Component } from 'react'

import { Octocat } from './components/Octocat'

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
            <Octocat
              name="OctobiWanCatnobi"
              number="3"
              imageLink="https://octodex.github.com//octobiwan/"
              imageSource="https://octodex.github.com//images/octobiwan.jpg"
              imageAlt="OctobiWanCatnobi"
              artistLink="https://github.com/cameronmcefee"
              artistAlt="cameronmcefee"
              artistImageSource="https://github.com/cameronmcefee.png"
            />

            <Octocat
              name="Stormtroopocat"
              number="85"
              imageLink="https://octodex.github.com//stormtroopocat/"
              imageSource="https://octodex.github.com//images/stormtroopocat.png"
              imageAlt="Stormtroopocat"
              artistLink="https://github.com/jeejkang"
              artistAlt="jeejkang"
              artistImageSource="https://github.com/jeejkang.png"
            />

            <Octocat
              name="Robotocat"
              number="93"
              imageLink="https://octodex.github.com//Robotocat/"
              imageSource="https://octodex.github.com//images/Robotocat.png"
              imageAlt="Robotocat"
              artistLink="https://github.com/jeejkang"
              artistAlt="jeejkang"
              artistImageSource="https://github.com/jeejkang.png"
            />

            <Octocat
              name="Daftpunktocat-Thomas"
              number="101"
              imageLink="https://octodex.github.com//daftpunktocat-thomas/"
              imageSource="https://octodex.github.com//images/daftpunktocat-thomas.gif"
              imageAlt="Daftpunktocat-Thomas"
              artistLink="https://github.com/jeejkang"
              artistAlt="jeejkang"
              artistImageSource="https://github.com/jeejkang.png"
            />

            <Octocat
              name="Chellocat"
              number="34"
              imageLink="https://octodex.github.com//chellocat/"
              imageSource="https://octodex.github.com//images/chellocat.jpg"
              imageAlt="Chellocat"
              artistLink="https://github.com/cameronmcefee"
              artistAlt="cameronmcefee"
              artistImageSource="https://github.com/cameronmcefee.png"
            />

            <Octocat
              name="Spectrocat"
              number="44"
              imageLink="https://octodex.github.com//spectrocat/"
              imageSource="https://octodex.github.com//images/spectrocat.png"
              imageAlt="Spectrocat"
              artistLink="https://github.com/cameronmcefee"
              artistAlt="cameronmcefee"
              artistImageSource="https://github.com/cameronmcefee.png"
            />

            <Octocat
              name="Murakamicat"
              number="82"
              imageLink="https://octodex.github.com//murakamicat/"
              imageSource="https://octodex.github.com//images/murakamicat.png"
              imageAlt="Murakamicat"
              artistLink="https://github.com/billyroh"
              artistAlt="billyroh"
              artistImageSource="https://github.com/billyroh.png"
            />

            <Octocat
              name="Skitchtocat"
              number="91"
              imageLink="https://octodex.github.com//skitchtocat/"
              imageSource="https://octodex.github.com//images/skitchtocat.png"
              imageAlt="Skitchtocat"
              artistLink="https://github.com/jonrohan"
              artistAlt="jonrohan"
              artistImageSource="https://github.com/jonrohan.png"
            />

            <Octocat
              name="Dunetocat"
              number="104"
              imageLink="https://octodex.github.com//dunetocat/"
              imageSource="https://octodex.github.com//images/dunetocat.png"
              imageAlt="Dunetocat"
              artistLink="https://github.com/JohnCreek"
              artistAlt="JohnCreek"
              artistImageSource="https://github.com/JohnCreek.png"
            />

            <Octocat
              name="Vinyltocat"
              number="137"
              imageLink="https://octodex.github.com//vinyltocat/"
              imageSource="https://octodex.github.com//images/vinyltocat.png"
              imageAlt="Vinyltocat"
              artistLink="https://github.com/suziejurado"
              artistAlt="suziejurado"
              artistImageSource="https://github.com/suziejurado.png"
            />

            <Octocat
              name="Hubot"
              number="18"
              imageLink="https://octodex.github.com//hubot/"
              imageSource="https://octodex.github.com//images/hubot.jpg"
              imageAlt="Hubot"
              artistLink="https://github.com/cameronmcefee"
              artistAlt="cameronmcefee"
              artistImageSource="https://github.com/cameronmcefee.png"
            />

            <Octocat
              name="Blinktocat,Pinktocat,Inktocat,andClyde"
              number="88"
              imageLink="https://octodex.github.com//pacman-ghosts/"
              imageSource="https://octodex.github.com//images/pacman-ghosts.jpg"
              imageAlt="Blinktocat,Pinktocat,Inktocat,andClyde"
              artistLink="https://github.com/cameronmcefee"
              artistAlt="cameronmcefee"
              artistImageSource="https://github.com/cameronmcefee.png"
            />
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
