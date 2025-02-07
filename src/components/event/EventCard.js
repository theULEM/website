import React, { Component } from "react";
import moment from "moment";
import Axios from "axios";
import loading from "../../img/loading.gif";

export default class EventCard extends Component {
  state = {
    event: ""
  };

  getEvent = async id => {
    const res = await Axios.get(`/api/event/${id}`);
    this.setState({
      event: res.data
    });
  };

  componentDidMount() {
    if (this.props.id) {
      this.getEvent(this.props.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getEvent(this.props.id);
    }
  }

  render() {
    return (
      <div>
        {this.state.event ? (
          <div className="card mb-2 border">
            <h3 className="card-title text-center font-red mt-4">
              <strong>{this.state.event.title}</strong>
            </h3>
            <div className="card-body">
              <div className="row">
                <div className="col-7">
                  <p>
                    Start Time:{" "}
                    {/* {moment(this.state.event.start)
                      .format("YYYY-MM-DDTkk:mm")
                      .replace("T", "@")} */}
                    {moment(this.state.event.start)
                      .format("M/D/YYYY h:mm A")
                    }
                  </p>
                  {this.state.event.end && (
                    <p>
                      End Time:{" "}
                      {/* {moment(this.state.event.end)
                        .format("YYYY-MM-DDTkk:mm")
                        .replace("T", "@")} */}
                      {moment(this.state.event.end)
                        .format("M/D/YYYY h:mm A")
                      }
                    </p>
                  )}
                  {/* {this.state.event.description && (
                    <p>Description: {this.state.event.description}</p>
                  )} */}
                </div>
                <div className="col-5">
                  {this.state.event.venue && (
                    <p>Venue: {this.state.event.venue}</p>
                  )}
                  <p>Address: {this.state.event.address}</p>
                </div>
              </div>
              {this.state.event.description && (
                <p>Description: {this.state.event.description}</p>
              )}
            </div>
            {this.state.event.img && (
              <a
              href={this.state.event.urlImg}
              target="_blank"
              rel="noopener noreferrer"
              >
                <img
                  className="card-img-bottom"
                  src={`data:${this.state.event.img?.mimeType};base64,${new Buffer(
                    this.state.event.img.data
                  ).toString("base64")}`}
                  alt="event"
                />
              </a>
            )}
          </div>
        ) : (
          <img className="center" src={loading} alt="loading" />
        )}
      </div>
    );
  }
}
