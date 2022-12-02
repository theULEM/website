import React, { Component } from 'react';
import InputGroup from '../layout/InputGroup';
import Axios from 'axios';

export default class CommunityEventNew extends Component {
  state = {
    title: '',
    description: '',
    dropboxLink: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onUpload = e => {
    this.setState({
      img: e.target.files[0]
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { title, description, dropboxLink } = this.state;
    const updatedBy = this.props.user._id;
    const event = {
      title,
      description,
      dropboxLink,
      updatedBy
    };

    await this.createEvent(event);
    await this.setState({
      title: '',
      description: '',
      dropboxLink: ''
    });
    this.props.showList();
  };

  onCancel = () => {
    this.setState({
      title: '',
      description: '',
      dropboxLink: ''
    });
    this.props.showList();
  };

  // Create new event
  createEvent = async event => {
    const res = await Axios.post('/api/communityEvent', event);
    return res;
  };

  render() {
    return (
      <React.Fragment>
        <h4>Adding New Event</h4>
        <div className='container mt-4'>
          <form onSubmit={this.onSubmit}>
            <InputGroup
              label='Title'
              placeholder='Enter title here'
              required
              id='title'
              name='title'
              value={this.state.title}
              onChange={this.onChange}
            />
            <InputGroup
              label='Event description'
              id='description'
              name='description'
              required
              onChange={this.onChange}
              value={this.state.description}
            />
            <InputGroup
              label='Dropbox link / External link'
              id='dropboxLink'
              name='dropboxLink'
              required
              value={this.state.dropboxLink}
              onChange={this.onChange}
            />
            <button
              type='button'
              onClick={this.onCancel}
              className='btn btn-lg btn-outline-danger'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='btn btn-lg btn-outline-success float-right'
            >
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
