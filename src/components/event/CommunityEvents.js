import React, { Component } from 'react';
import Axios from 'axios';
import Pages from '../layout/Pages';
import moment from 'moment';

export default class CommunityEvents extends Component {
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
    this.props.showDetail(id);
  };

  getEvents = page => {
    Axios.get(`/api/communityEvents/${page}`).then(res => {
      this.setState({
        events: res.data.reverse()
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
        <div className="container-fluid">
          <section className="container">
            <h1 className="ulem-text-primary mt-4">Community Events Board</h1>
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
                        <h6>{event.title}</h6>
                      </td>
                      <td>
                        {moment(event.dateModified).format("M/D/YYYY")}
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
          </section>
        </div>
      </React.Fragment>
    );
  }
}
