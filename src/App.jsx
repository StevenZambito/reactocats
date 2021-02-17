import React, { Component } from 'react'

import { Octocat } from './components/Octocat'

const arrayOfCats = [
  {
    name: 'OctobiWanCatnobi',
    number: '3',
    imageLink: 'https://octodex.github.com//octobiwan/',
    imageSource: 'https://octodex.github.com//images/octobiwan.jpg',
    imageAlt: 'OctobiWanCatnobi',
    artistLink: 'https://github.com/cameronmcefee',
    artistAlt: 'cameronmcefee',
    artistImageSource: 'https://github.com/cameronmcefee.png',
  },
  {
    name: 'Stormtroopocat',
    number: '85',
    imageLink: 'https://octodex.github.com//stormtroopocat/',
    imageSource: 'https://octodex.github.com//images/stormtroopocat.png',
    imageAlt: 'Stormtroopocat',
    artistLink: 'https://github.com/jeejkang',
    artistAlt: 'jeejkang',
    artistImageSource: 'https://github.com/jeejkang.png',
  },
  {
    name: 'Robotocat',
    number: '93',
    imageLink: 'https://octodex.github.com//Robotocat/',
    imageSource: 'https://octodex.github.com//images/Robotocat.png',
    imageAlt: 'Robotocat',
    artistLink: 'https://github.com/jeejkang',
    artistAlt: 'jeejkang',
    artistImageSource: 'https://github.com/jeejkang.png',
  },
  {
    name: 'Daftpunktocat-Thomas',
    number: '101',
    imageLink: 'https://octodex.github.com//daftpunktocat-thomas/',
    imageSource: 'https://octodex.github.com//images/daftpunktocat-thomas.gif',
    imageAlt: 'Daftpunktocat-Thomas',
    artistLink: 'https://github.com/jeejkang',
    artistAlt: 'jeejkang',
    artistImageSource: 'https://github.com/jeejkang.png',
  },
  {
    name: 'Chellocat',
    number: '34',
    imageLink: 'https://octodex.github.com//chellocat/',
    imageSource: 'https://octodex.github.com//images/chellocat.jpg',
    imageAlt: 'Chellocat',
    artistLink: 'https://github.com/cameronmcefee',
    artistAlt: 'cameronmcefee',
    artistImageSource: 'https://github.com/cameronmcefee.png',
  },
  {
    name: 'Spectrocat',
    number: '44',
    imageLink: 'https://octodex.github.com//spectrocat/',
    imageSource: 'https://octodex.github.com//images/spectrocat.png',
    imageAlt: 'Spectrocat',
    artistLink: 'https://github.com/cameronmcefee',
    artistAlt: 'cameronmcefee',
    artistImageSource: 'https://github.com/cameronmcefee.png',
  },
  {
    name: 'Murakamicat',
    number: '82',
    imageLink: 'https://octodex.github.com//murakamicat/',
    imageSource: 'https://octodex.github.com//images/murakamicat.png',
    imageAlt: 'Murakamicat',
    artistLink: 'https://github.com/billyroh',
    artistAlt: 'billyroh',
    artistImageSource: 'https://github.com/billyroh.png',
  },
  {
    name: 'Skitchtocat',
    number: '91',
    imageLink: 'https://octodex.github.com//skitchtocat/',
    imageSource: 'https://octodex.github.com//images/skitchtocat.png',
    imageAlt: 'Skitchtocat',
    artistLink: 'https://github.com/jonrohan',
    artistAlt: 'jonrohan',
    artistImageSource: 'https://github.com/jonrohan.png',
  },
  {
    name: 'Dunetocat',
    number: '104',
    imageLink: 'https://octodex.github.com//dunetocat/',
    imageSource: 'https://octodex.github.com//images/dunetocat.png',
    imageAlt: 'Dunetocat',
    artistLink: 'https://github.com/JohnCreek',
    artistAlt: 'JohnCreek',
    artistImageSource: 'https://github.com/JohnCreek.png',
  },
  {
    name: 'Vinyltocat',
    number: '137',
    imageLink: 'https://octodex.github.com//vinyltocat/',
    imageSource: 'https://octodex.github.com//images/vinyltocat.png',
    imageAlt: 'Vinyltocat',
    artistLink: 'https://github.com/suziejurado',
    artistAlt: 'suziejurado',
    artistImageSource: 'https://github.com/suziejurado.png',
  },
  {
    name: 'Hubot',
    number: '18',
    imageLink: 'https://octodex.github.com//hubot/',
    imageSource: 'https://octodex.github.com//images/hubot.jpg',
    imageAlt: 'Hubot',
    artistLink: 'https://github.com/cameronmcefee',
    artistAlt: 'cameronmcefee',
    artistImageSource: 'https://github.com/cameronmcefee.png',
  },
  {
    name: 'Blinktocat,Pinktocat,Inktocat,andClyde',
    number: '88',
    imageLink: 'https://octodex.github.com//pacman-ghosts/',
    imageSource: 'https://octodex.github.com//images/pacman-ghosts.jpg',
    imageAlt: 'Blinktocat,Pinktocat,Inktocat,andClyde',
    artistLink: 'https://github.com/cameronmcefee',
    artistAlt: 'cameronmcefee',
    artistImageSource: 'https://github.com/cameronmcefee.png',
  },
]

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
            {arrayOfCats.map(cat => {
              return (
                <Octocat
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
