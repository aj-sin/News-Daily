import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>News Daily- Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="mytitle" discription="this is some fucking sick news" imageurl="https://ichef.bbci.co.uk/news/1024/branded_news/5C39/production/_127990632_rafiq.jpg"/>

                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle" discription="this is some fucking sick news" imageurl="https://ichef.bbci.co.uk/news/1024/branded_news/5C39/production/_127990632_rafiq.jpg"/>

                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle" discription="this is some fucking sick news" imageurl="https://ichef.bbci.co.uk/news/1024/branded_news/5C39/production/_127990632_rafiq.jpg"/>

                    </div>
                </div>

            </div>
        )
    }
}

export default News
