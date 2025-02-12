import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import Axios from "axios";
import moment from "moment";
export default class EventUpdate extends Component {
  state = {
    noEndTime: false,
    title: "",
    start: "",
    end: "",
    venue: "",
    description: "",
    urlImg: "",
    address: ""
  };

  // delete event
  onDelete = id => {
    Axios.delete(`/api/event/${id}`).then(() => {
      this.props.showList();
    });
  };

  // Get info of event
  getEvent = id => {
    Axios.get(`/api/event/${id}`).then(res => {
      const { noEndTime, title, start, end, venue, description, urlImg, address } = res.data;
      this.setState({ noEndTime, title, start, end, venue, description, address });
    });
  };

  componentDidMount() {
    // Init data
    this.getEvent(this.props.id);
  }

  // handle input change event
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // handle form submit event
  onSubmit = e => {
    e.preventDefault();
    const { title, start, end, venue, description, urlImg, address } = this.state;
    const dateModified = new Date();
    const updatedBy = this.props.user._id;
    const event = {
      title,
      start: new Date(start),
      end: end ? new Date(end) : "",
      venue,
      address,
      description,
      urlImg,
      dateModified,
      updatedBy
    };
    if (event.noEndTime) {
      event.end = "";
    }
    this.updateEvent(event);
    this.props.showList();
  };

  // cancel the update
  onCancel = () => {
    this.props.showList();
  };

  // handle checkbox change event
  onCheckBox = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  // Update event by id
  updateEvent = event => {
    Axios.post(`/api/event/${this.props.id}`, event);
  };

  render() {
    return (
      <React.Fragment>
        <h4>Updating Event</h4>
        <div className="container mt-4">
          <form onSubmit={this.onSubmit} id="primary">
            <InputGroup
              label="Title"
              placeholder="Enter title here"
              required
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
            <div className="input-group">
              <input
                id="noEndTime"
                name="noEndTime"
                type="checkbox"
                onChange={this.onCheckBox}
                checked={this.state.noEndTime}
              />
              <label htmlFor="noEndTime">No End Time</label>
            </div>
            <InputGroup
              label="Start date / time"
              required
              id="start"
              name="start"
              onChange={this.onChange}
              type="datetime-local"
              value={moment(this.state.start).format("YYYY-MM-DDTkk:mm")}
            />
            {!this.state.noEndTime && (
              <InputGroup
                label="End date / time"
                required
                id="end"
                onChange={this.onChange}
                name="end"
                type="datetime-local"
                value={moment(this.state.end).format("YYYY-MM-DDTkk:mm")}
              />
            )}
            <InputGroup
              label="
                Venue name"
              id="venue"
              name="venue"
              onChange={this.onChange}
              value={this.state.venue}
            />
            <InputGroup
              label="
                Event description"
              id="description"
              name="description"
              onChange={this.onChange}
              value={this.state.description}
            />
            <InputGroup
              label="
                Event urlImg"
              id="urlImg"
              name="urlImg"
              onChange={this.onChange}
              value={this.state.urlImg}
            />
            <InputGroup
              label="
                Address"
              id="address"
              required
              name="address"
              value={this.state.address}
              onChange={this.onChange}
            />
          </form>
          <button
            type="button"
            onClick={this.onCancel}
            className="btn btn-lg btn-outline-danger"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={this.onDelete.bind(this, this.props.id)}
            className="btn btn-lg btn-outline-danger"
          >
            Delete
          </button>
          <button
            type="submit"
            form="primary"
            className="btn btn-lg btn-outline-success float-right"
          >
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }
}
