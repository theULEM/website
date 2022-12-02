import React, { Component } from 'react';
import Axios from 'axios';
import Pages from '../layout/Pages';
import moment from 'moment';

export default class CommunityEventList extends Component {
  state = {
    length: 0,
    events: [],
    page: 1
  };

  countEvents = () => {
    Axios.get('/api/communityEvent/length').then(res => {
      this.setState({
        length: parseInt(res.data)
      });
    });
  };

  checkEvent = id => {
    this.props.showEditing(id);
  };

  getEvents = page => {
    Axios.get(`/api/communityEvents/${page}`).then(res => {
      this.setState({
        events: res.data
      });
    });
  };

  changePage = page => {
    this.setState({
      page
    });
    this.getEvents(page);
  };

  componentDidMount() {
    this.countEvents();
    this.getEvents(this.state.page);
  }

  render() {
    return (
      <React.Fragment>
        <h4>
          Community Events
          <button
            onClick={this.props.showAdding}
            className='btn btn-outline-danger ml-4'
          >
            New Event
          </button>
        </h4>
        <div className='container'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Last Update</th>
              </tr>
            </thead>
            <tbody>
              {this.state.events.map(event => (
                <tr key={event._id}>
                  <td
                    className='cursor'
                    onClick={this.checkEvent.bind(this, event._id)}
                  >
                    {event.title}
                  </td>
                  <td>
                    Last updated by {event.updatedBy.username} @{' '}
                    {moment(event.dateModified).format("M/D/YYYY h:mm A")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pages
          length={this.state.length}
          page={this.state.page}
          changePage={this.changePage}
        />
      </React.Fragment>
    );
  }
}
