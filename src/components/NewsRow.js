import PropTypes from 'prop-types'
import React, { Component } from 'react'
import News from './News'

export class NewsRow extends Component {
  constructor() {
    super();
    this.state = {
        articles: [],
        page: 1,
        loading: false
    }
  }

  async componentDidMount() {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=bf70f617568442948b81cb60d181df19&page=1"
    const data = await fetch(url)
    const dataJson = await data.json()
    this.setState({articles: dataJson.articles})
  }

  handleNextClick = async () => {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=bf70f617568442948b81cb60d181df19&page="+String(this.state.page + 1)
    const data = await fetch(url)
    const dataJson = await data.json()
    this.setState({articles: dataJson.articles, page: this.state.page + 1})
  }

  handlePreviousClick = async () => {
    if(this.state.page > 1) {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=bf70f617568442948b81cb60d181df19&page="+String(this.state.page - 1)
        const data = await fetch(url)
        const dataJson = await data.json()
        this.setState({articles: dataJson.articles, page: this.state.page - 1})
    }
  } 


  render() {
    let {style} = this.props
    if(this.state.articles.length != 0) {
        return (
            <div>
                <div className='row'> 
                    {this.state.articles.map((element)=>{
                        if(element.title == null) {
                            element.title = "No title"
                        }
    
                        if(element.description == null) {
                            element.description = "No Description"
                        }
                        return <div class="col-lg-4 d-flex align-items-stretch">
                            <div className='col-md-4'>
                                <News key={element.url} title={element.title} content={element.description} image={element.urlToImage} newsUrl={element.url} style={style}/>
                                <div className='pt-3'></div>
                            </div>
                        </div>
                    })}
                </div>
    
                <div class="d-flex justify-content-between">
                    <button type="button" disabled={this.state.page == 1} onClick={this.handlePreviousClick} class="btn btn-primary">Previous</button>
                    <h5>Copyright c. Sanidhya Mishra. All Rights Reserved.</h5>
                    <button type="button" onClick={this.handleNextClick} class="btn btn-primary">Next</button>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className='container'>

                <h3><center>Read all of the news !</center></h3>
                <div className="pt-3"></div>
                <div class="d-flex justify-content-between">
                    <button type="button" disabled={this.state.page == 1} onClick={this.handlePreviousClick} class="btn btn-primary">Previous</button>
                    <h5>Copyright c. Sanidhya Mishra. All Rights Reserved.</h5>
                    <button type="button" onClick={this.handleNextClick} class="btn btn-primary">Next</button>
                </div>
            </div>
        )
    }
    
  }
}

export default NewsRow