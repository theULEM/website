import React, { Component } from "react";
import Axios from "axios";

//import motley from "../../img/Motley.jpg";
import Dinner from "../../img/Dinner.png";

export default class CommunityEvent extends Component {
  state = {
    event: ""
  };

  getEvent = async id => {
    const res = await Axios.get(`/api/communityEvent/${id}`);
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
      <React.Fragment>
        <br></br>
        <a 
            href="https://www.ulem.org/communityevents" 
            class="btn btn-outline-danger ml-4" 
            role="button" 
            aria-pressed="true"
        >Back to All Events</a>
        <div className="container">
          <br></br>
          <h3 className="card-title text-center mt-4">
            <strong>{this.state.event.title}</strong>
          </h3>

          <br></br>
          <div>
            {this.state.event.title !== "NUL 65th Annual Equal Opportunity Dinner, Thursday, October 21st" ? (
              <div></div>
            ) : (
              <div className="text-center">
                <img
                  className=""
                  src={Dinner}
                  alt="Dinner"
                />
              </div>
            )}
          </div>

          <br></br>
          <br></br>
          <div>
            <label><h4>Description:</h4></label>
            <p>{this.state.event.description}</p>
          </div>
          <br></br>
          <br></br>
          <div className="text-center">
            <a 
              href={this.state.event.dropboxLink} 
              class="btn btn-primary btn-lg active" 
              role="button" 
              aria-pressed="true"
              target="_blank" 
              rel="noopener noreferrer"
            >Click here to view</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}