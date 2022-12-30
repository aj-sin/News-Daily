import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor(){
        super();
        console.log("this is newsitem")
    }
    render() {
        let {title,discription,imageurl}=this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{discription}</p>
                            <a href="/" className="btn btn-success">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
