import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    let {title, style, darkMode} = this.props
    let darkModeString = "navbar navbar-expand-lg navbar-" + darkMode + " bg-" + darkMode
    return (
      <div style={style}>
        <nav class={darkModeString}>
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{title}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default NavBar