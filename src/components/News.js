import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        this.state={
            article:[],
            loading:false,
            page:1
        }
    }

    async componentDidMount(){
        let  url="https://newsapi.org/v2/top-headlines?country=us&apiKey=049e0196f4584429ae9a41b7da6574d5&page=1&pagesize=20"
        let data=await fetch(url)
        let parsedata=await data.json()
        console.log(parsedata)
        this.setState({article:parsedata.articles,totalResults:parsedata.totalResults})
    }
    
    
    
    
     handleprev=async()=>{
        let  url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=049e0196f4584429ae9a41b7da6574d5&page=${this.state.page-1}&pagesize=20`
        console.log(url)
        let data=await fetch(url)
        let parsedata=await data.json()
        this.setState({
            page:this.state.page-1,
            article:parsedata.articles
        })
    }
    handlenext=async()=>{
        console.log("next")
        let  url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=049e0196f4584429ae9a41b7da6574d5&page=${this.state.page+1}&pagesize=20`
        console.log(url)
        let data=await fetch(url)
        let parsedata=await data.json()
        // console.log(parsedata)
        this.setState({
            page:this.state.page+1,
            article:parsedata.articles
        })
    }
    render() {
        
        return (
            <div className='container my-3'>
                <h2>News Daily- Top Headlines</h2>
                <div className="row">
                {this.state.article.map((element)=>{

                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} discription={element.description} imageurl={element.urlToImage?element.urlToImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsKGtSjQQNx4zXiWfu2s0XArD89T622hg1DFq2ZR8V3EOmrMIVPgIpQN-ZBgvpgtc7Tw&usqp=CAU'} newsurl={element.url}/>

                    </div>
                })}
                    
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-outline-success" onClick={this.handleprev}>&larr; Prev</button>
                <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-outline-success" onClick={this.handlenext}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
