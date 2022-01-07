import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsUrl } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageurl ? "https://imagez.tmz.com/image/14/16by9/2021/12/21/14446fdcf6a0473a92c6a48bae7ba26e_xl.jpg" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
