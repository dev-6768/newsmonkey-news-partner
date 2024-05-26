import React, { Component } from 'react'

export class News extends Component {
  render() {
    let {title, content, image, newsUrl, style} = this.props
    return (
      <div>
        <div class="card" style={{width: "18rem", color:style.color, backgroundColor: style.backgroundColor}}>
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{content}</p>
            <a href={newsUrl} class="btn btn-primary">Find Out !</a>
          </div>
        </div>
      </div>
    )
  }
}

export default News