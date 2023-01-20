import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import logo1 from "./newdaily.png"
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    constructor() {
        super();
        this.state = {
            article: [],
            loading: false,
            page: 1,
            totalResults:0,
        }
    }

    static defaultProps = {
        country: 'in',
        pagesize: 9,
        category: 'general'
    }


    updatenews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=049e0196f4584429ae9a41b7da6574d5&page=${this.state.page}&pagesize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({ loading: false })

        this.setState({

            article: parsedata.articles,
            totalResults: parsedata.totalResults
        })
    }

    //this is important because it load the initial page of the website
    async componentDidMount() {
        this.updatenews()

    }

     fetchMoreData=async()=>{
      this.setState({
        page: this.state.page+1
      })
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=049e0196f4584429ae9a41b7da6574d5&page=${this.state.page}&pagesize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedata = await data.json()

        this.setState({

            article: this.state.article.concat(parsedata.articles),
            loading:false
        })
    }



    
    render() {

        return (
            <>
                <h1 className="text-center">News Daily- Top Headlines</h1>

                <InfiniteScroll
                    dataLength={this.state.article.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.article.length!==this.state.totalResults}
                    loader={this.state.loading?<Spinner/>:true}
                >
                    <div className="container">
                        
                    {<div className="row">
                    {this.state.loading && <Spinner/>}
                        {this.state.article.map((element) => {
                            
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} discription={element.description}
                                    imageurl={element.urlToImage ? element.urlToImage : logo1} newsurl={element.url} author={element.author ? element.author : "Unkown"} Time={element.publishedAt} source={element.source.name} />

                            </div>
                        })}

                    </div>}
                        </div>
                </InfiniteScroll>


            </>
        )
    }
}

export default News
