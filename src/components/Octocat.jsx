import React from 'react'

export class Octocat extends React.Component {
  render() {
    return (
      <div className="octocat">
        <a href={this.props.imageLink}>
          <img src={this.props.imageSource} alt={this.props.imageAlt} />
        </a>
        <ul>
          <li>
            #{this.props.number}:
            <a href={this.props.imageLink}>
              <strong>{this.props.name}</strong>
            </a>
          </li>
          <li>
            <a href={this.props.artistLink}>
              <img
                src={this.props.artistImageSource}
                width="24px"
                height="24px"
                alt={this.props.artistAlt}
              />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
