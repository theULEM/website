import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import Axios from "axios";

export default class CommunityEventUpdate extends Component {
  state = {
    title: "",
    description: "",
    dropboxLink: ""
  };

  // delete event
  onDelete = id => {
    Axios.delete(`/api/communityEvent/${id}`).then(() => {
      this.props.showList();
    });
  };

  // Get info of event
  getEvent = id => {
    Axios.get(`/api/communityEvent/${id}`).then(res => {
      const { title, description, dropboxLink } = res.data;
      this.setState({ title, description, dropboxLink });
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
    const { title, description, dropboxLink } = this.state;
    const dateModified = new Date();
    const updatedBy = this.props.user._id;
    const event = {
      title,
      description,
      dropboxLink,
      dateModified,
      updatedBy
    };

    this.updateEvent(event);
    this.props.showList();
  };

  // cancel the update
  onCancel = () => {
    this.props.showList();
  };

  // Update event by id
  updateEvent = event => {
    Axios.post(`/api/communityEvent/${this.props.id}`, event);
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
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
            <InputGroup
              label="Event description"
              id="description"
              name="description"
              onChange={this.onChange}
              value={this.state.description}
            />
            <InputGroup
              label="Dropbox link / External link"
              id="dropboxLink"
              name="dropboxLink"
              value={this.state.dropboxLink}
              onChange={this.onChange}
            />
          </form>
          <button
            type="button"
            onClick={this.onCancel}
            className="btn btn-lg btn-outline-danger"
          >
            Cancel
          </button>{"  "}
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
