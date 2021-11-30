import axios from "axios";
import React, { Component } from "react";

export default class Home extends Component {
  state = {
    movies: [],
    tv: [],
  };
  getTrending = async (mediaType) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=52bbcddeda849047525b51d6f8a12361`
    );
    this.setState({
      [mediaType]: data.results,
    });
  };
  componentDidMount() {
    this.getTrending("movies");
    this.getTrending("tv");
  }
  render() {
    console.log("movie", this.state.movies);
    return (
      <>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4 ">
              <div className="items">
                <div className="brdr w-25"></div>
                <h4>
                  Trending
                  <br />
                  Movies
                  <br />
                  To Watch Now
                </h4>
                <div className="brdr w-100"></div>
              </div>
            </div>

            {this.state.movies.slice(0, 10).map((value, index) => {
              return (
                <div className="col-md-2 my-3" key={index}>
                  <div className="items">
                    <img
                      src={`//image.tmdb.org/t/p/original${value.poster_path}`}
                      alt="not found"
                      className="w-100"
                    />
                    <p className="secondFontColor">
                      {value.name} {value.title}
                    </p>
                    <span className="vote">{value.vote_average}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row">
            <div className="col-md-4 ">
              <div className="items">
                <div className="brdr w-25"></div>
                <h4>
                  Trending
                  <br />
                  tv
                  <br />
                  To Watch Now
                </h4>
                <div className="brdr w-100"></div>
              </div>
            </div>

            {this.state.tv.slice(0, 10).map((value, index) => {
              return (
                <div className="col-md-2 my-3" key={index}>
                  <div className="items">
                    <img
                      src={`//image.tmdb.org/t/p/original${value.poster_path}`}
                      alt="not found"
                      className="w-100"
                    />
                    <p className="secondFontColor">
                      {value.name} {value.title}
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
