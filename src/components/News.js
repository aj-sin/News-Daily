import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import logo1 from "./newdaily.png"

export class News extends Component {

    constructor() {
        super();
        this.state = {
            article: [],
            loading: false,
            page: 1
        }
    }

    static defaultProps = {
        country: 'in',
        pagesize: 9,
        category: ''
      }

    //this is important because it load the initial page of the website
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=049e0196f4584429ae9a41b7da6574d5&page=1&pagesize=${this.props.pagesize}`
        let data = await fetch(url)
        let parsedata = await data.json()
        // console.log(parsedata)
        this.setState({ article: parsedata.articles, totalResults: parsedata.totalResults })
    }




    handleprev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=049e0196f4584429ae9a41b7da6574d5&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({loading:false})

        this.setState({
            page: this.state.page - 1,
            article: parsedata.articles
        })
    }
    handlenext = async () => {
        console.log("next")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=049e0196f4584429ae9a41b7da6574d5&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({loading:false})
        // console.log(parsedata)
        this.setState({
            page: this.state.page + 1,
            article: parsedata.articles
        })
    }
    render() {

        return (
            <div className='container my-3'>
                <h1 className="text-center">News Daily- Top Headlines</h1>
                {/* imageurl={element.urlToImage ? element.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsKGtSjQQNx4zXiWfu2s0XArD89T622hg1DFq2ZR8V3EOmrMIVPgIpQN-ZBgvpgtc7Tw&usqp=CAU'} */}
                
                {this.state.loading && <Spinner/>}
                {!this.state.loading && <div className="row">
                    {this.state.article.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} discription={element.description}
                             imageurl={element.urlToImage ? element.urlToImage :logo1} newsurl={element.url} author={element.author?element.author:"Unkown"} Time={element.publishedAt} source={element.source.name}/>

                        </div>
                    })}

                </div>}
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-success" onClick={this.handleprev}>&larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-outline-success" onClick={this.handlenext}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
