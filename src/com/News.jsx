import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        this.state={
               articles:[],
        }
    }
async componentDidMount(){
  let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7f1f8844c098447a864a119e07a27b25"
  let data=await fetch(url)
  let parsedData=await data.json()
  console.log(parsedData)
  this.setState({articles:parsedData.articles})
}

  render() {
    return (
      <div className='container my-3'>
        <h1>TOP-HEADLINES</h1>
             <div className="row">
            {this.state.articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title.slice(0,45):''} description={element.description?element.description.slice(0,80):''} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}
export default News
