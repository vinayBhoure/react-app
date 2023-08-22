import React, { Component } from "react";

export default function Newsitem(props) {
  
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;

    const dates = new Date(date);
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={imageUrl} alt="Card image cap" />
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-muted">
                By {author} at {dates.toLocaleString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }