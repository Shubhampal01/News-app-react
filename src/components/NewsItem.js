import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";
import {Link} from "react-router-dom"
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <span className="position-absolute badge rounded-pill bg-danger" style={{right:"-2%",top:"-2%",zIndex:"1"}}>
            {source}
          </span>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toLocaleString()}
              </small>
            </p>
            <Link to={newsUrl} target="_blank" className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
