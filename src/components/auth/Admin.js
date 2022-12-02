import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import Event from './Event';
import CommunityEvent from './CommunityEvent';
import { connect } from 'react-redux';
import { loggedIn } from '../../actions/userActions';

class Admin extends Component {
  state = {
    user: '',
    showEvents: true,
    showCommunityEvents: false
  };

  changeBol = (state, bol) => {
    this.setState({
      [state]: bol
    });
  };

  componentDidMount() {
    this.props.loggedIn();
  }

  render() {
    return (
      <>
        {(this.props.currentUser === 0 ||
          this.props.currentUser.admin === false) && <Redirect to='/login' />}
        {this.props.currentUser.admin === true && (
          <div className='container-fluid'>
            <h1 className='font-red mt-4 text-center'>Admin Panel</h1>
            <div className='row'>
              <div className='col-md-2'>
                <AdminMenu changeBol={this.changeBol} />
              </div>
              <div className='col-md-10'>
                {this.state.showEvents && (
                  <Event user={this.props.currentUser} />
                )}
                {this.state.showCommunityEvents && (
                  <CommunityEvent user={this.props.currentUser} />
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps,
  { loggedIn }
)(Admin);
