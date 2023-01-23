import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import logo1 from "./newdaily.png"
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {


    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    

    


    const updatenews = async () => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=049e0196f4584429ae9a41b7da6574d5&page=${ page}&pagesize=${props.pagesize}`
        setLoading(true )
        props.setProgress(30)
        let data = await fetch(url)
        let parsedata = await data.json()
        setLoading(false )
        props.setProgress(90)
        setArticle(parsedata.articles)
        setTotalResults(parsedata.totalResults)
        
        props.setProgress(100)
    }

    //this is important because it load the initial page of the website

    useEffect(() => {
      updatenews();
      setPage(page+1)
    }, [])
    
    

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=049e0196f4584429ae9a41b7da6574d5&page=${ page}&pagesize=${props.pagesize}`
        setLoading(true )

        let data = await fetch(url)
        let parsedata = await data.json()
        setArticle(article.concat(parsedata.articles))
        setLoading(false )
        setPage(page+1)

        

    }




    

        return (
            <>
                <h1 className="text-center my-60" style={{marginTop: "65px"}} >News Daily- Top Headlines</h1>

                <InfiniteScroll
                    dataLength={ article.length}
                    next={fetchMoreData}
                    hasMore={ article.length !==  totalResults}
                    loader={ loading ? <Spinner /> : true}
                >
                    <div className="container">

                        {<div className="row">
                            { loading && <Spinner />}
                            { article.map((element) => {

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

News.defaultProps = {
    country: 'in',
    pagesize: 9,
    category: 'general'
}
export default News
