import axios from "axios";
import React, { Component } from "react";

export default class Movies extends Component {
  state = {
    movies: [],
  };
  getTrending = async () => {
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361"
    );
    this.setState({
      movies: data.results,
    });
  };
  componentDidMount() {
    this.getTrending();
  }
  render() {
    return (
      <>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4 my-4">
              <div className="item">
                <div className="brdr w-25"></div>
                <h4>
                  Trending
                  <br />
                  movies
                  <br />
                  To Watch Now
                </h4>
                <div className="brdr w-75"></div>
              </div>
            </div>
            {this.state.movies.map((value, index) => {
              return (
                <div className="col-md-2" key={index}>
                  <div className="items">
                    <img
                      src={`//image.tmdb.org/t/p/original${value.poster_path}`}
                      alt="not found"
                      className="w-100"
                    />
                    <p className="secondFontColor">
                      {value.title} {value.name}
                    </p>
                    <span className="vote">{value.vote_average}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
