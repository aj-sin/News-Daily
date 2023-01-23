import React from 'react'
const NewsItem =(props)=> {

    
        let { title, discription, imageurl, newsurl, author, Time ,source} = props
        return (
            <div>
                <div className="card my-2" >
                    <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
                        {source}
                       
                    </span>
                    <img src={imageurl} className="card-img-top" alt="...Loading.." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <p className='my-0'>{author}</p>
                        <p >{new Date(Time).toGMTString()}</p>
                        <a href={newsurl} className="btn btn-success">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
