import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Instagram extends Component {
  render() {
    return (
      <Fragment>
        <Link
          className="link"
          to="https://www.instagram.com/theulem2/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h3 className="btn-outline-danger rounded p-2 cursor">
            ULEM Instagram
            <i className="fab fa-instagram fa-lg float-right" />
          </h3>
        </Link>
        <iframe
          src="//lightwidget.com/widgets/08d33eb8e3c9513d8c155d472a517b13.html"
          scrolling="no"
          allowtransparency="true"
          className="lightwidget-widget "
          title="instagram"
          style={{ width: "100%", border: 0, overflow: "hidden" }}
        />
      </Fragment>
    );
  }
}
