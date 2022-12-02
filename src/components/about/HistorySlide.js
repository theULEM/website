import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HistorySlide extends Component {
  render() {
    return (
      <div className={`carousel-item ${this.props.active}`}>

        {this.props.to &&
          <Link to={this.props.to}>
            <div
              className="top-slide-history"
              style={{
                background: `url(${this.props.img}) no-repeat ${this.props
                  .y} ${this.props.x}/contain`
              }}
            >
            </div>           
          </Link>}

      </div>
    );
  }
}