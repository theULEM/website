import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/userActions';

function AdminMenu(props) {
  const logout = () => {
    props.logout();
  };

  const onEvents = () => {
    props.changeBol('showEvents', true);
    props.changeBol('showCommunityEvents', false);
  };

  const onEvents1 = () => {
    props.changeBol('showEvents', false);
    props.changeBol('showCommunityEvents', true);
  };

  return (
    <div className='sticky-side'>
      <ul className='list-group list-group-flush mb-4'>
        <li className='list-group-item'>
          <span onClick={onEvents} className='nav-link-red cursor'>
            ULEM Events
          </span>
        </li>
        <li className='list-group-item'>
          <span onClick={onEvents1} className='nav-link-red cursor'>
            Community Events Board
          </span>
        </li>
        <li>
          <br></br>
          <button onClick={logout} className='btn btn-lg btn-outline-danger'>
            Logout
          </button>          
        </li>
      </ul>
    </div>
  );
}

export default connect(
  null,
  { logout }
)(AdminMenu);
