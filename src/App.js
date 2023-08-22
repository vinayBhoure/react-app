import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  //Props, states ka tarika alaga hota hai isme
  n = "Vinay"
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
         progress : 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
                  color='#f11946'
                  progress={this.state.progress}
                  // onLoaderFinished={() => setProgress(0)}
      />

          {/* Main Container */}
          <div className='container'>
            <Routes>
              <Route exact path="/" element={
                <News setProgress={this.setProgress}
                  key="general"
                  pageSize={12} apiKey={this.apiKey}
                  country="in"
                  category="general"
                  headline="NewsMonkey - Top Headlines"
                />
              } />

              <Route exact path="/entertainment" element={<News setProgress={this.setProgress}
                key="entertainment"
                pageSize={12} apiKey={this.apiKey}
                country="in"
                category="entertainment"
                headline="Entertainment - Top Headlines"
              />} />

              <Route exact path="/business" element={<News setProgress={this.setProgress}
                key="business"
                pageSize={12} apiKey={this.apiKey}
                country="in"
                category="business"
                headline="Business - Top Headlines"
              />} />

              <Route exact path="/science" element={<News setProgress={this.setProgress}
                key="science"
                pageSize={12} apiKey={this.apiKey}
                country="in"
                category="science"
                headline="Science - Top Headlines"
              />} />

              <Route exact path="/sports" element={<News setProgress={this.setProgress}
                key="sports"
                pageSize={12} apiKey={this.apiKey}
                country="in"
                category="sports"
                headline="Sports - Top Headlines"
              />} />

              <Route exact path="/education" element={<News setProgress={this.setProgress}
                key="sports"
                pageSize={12} apiKey={this.apiKey}
                country="in"
                category="education"
                headline="Education - Top Headlines"
              />} />

              <Route exact path="/technology" element={<News setProgress={this.setProgress}
                key="technology"
                pageSize={12} apiKey={this.apiKey}
                country="in"
                category=""
                headline="Technology - Top Headlines"
              />} />

            </Routes>
          </div>
        </Router>
      </>
    )
  }
}

