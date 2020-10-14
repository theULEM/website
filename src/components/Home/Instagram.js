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
          src="https://cdn.lightwidget.com/widgets/b5fa1f3fa9ca5bfbb0000608b4fa4962.html"
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
