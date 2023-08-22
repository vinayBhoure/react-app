import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {
  // let pagenumber = 1
  // constructor automatically form when object of this class is nade
  constructor() {
    console.log("Hello, I'm constructor");
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    this.props.setProgress(10)
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=35f8130be4a94bebba9929cbfb16116d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let result = await data.json();

    this.setState({
      articles: result.articles,
      loading: false,
    });
    this.props.setProgress(100)
  }

  handlePrevious = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  handleNext = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  }; 

  fetchMoreData = async () => {
    this.setState({page : this.state.page +1})
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=35f8130be4a94bebba9929cbfb16116d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let result = await data.json();

    this.setState({
      articles: this.state.articles.concat(result.articles),
      loading: false,
    });

  }

  async componentDidMount() {
    this.updateNews();
  }

  render() {
    console.log("I'm main component");
    return (
      <>
     
        <h1 className="text-center">{this.props.headline}</h1>
        <InfiniteScroll
            dataLength={this.state.articles.length}
            hasMore={this.state.articles.length !== this.state.totalResults}
            next={this.fetchMoreData} 
            loader={<Spinner />} >

            <div className="container">
        <div className="row">
          {!this.state.true &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4">
                  <Newsitem
                    key={element.id}
                    title={
                      !element.title
                        ? "title not available"
                        : element.title.slice(0, 45)
                    }
                    description={
                      !element.description
                        ? "description not available"
                        : element.description.slice(0, 88)
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            </div>
            </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            class="btn btn-dark my-2"
            onClick={this.handlePrevious}
          >
            Previous
          </button>
           {this.state.loading && <Spinner />} 
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            class="btn btn-dark my-2"
            onClick={this.handleNext}
          >
            Next
          </button>
        </div> 
      */}
        
        
  </>  
    );
  }
}
