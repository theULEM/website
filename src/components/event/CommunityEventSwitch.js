import React, { Component } from "react";
import CommunityEvents from "./CommunityEvents";
import CommunityEvent from "./CommunityEvent";

export default class CommunityEventSwitch extends Component {
  state = {
    showList: true,
    showDetail: false,
    id: ""
  };

  showList = () => {
    this.setState({
      showList: true,
      showDetail: false
    });
  };

  showDetail = id => {
    this.setState({
      showList: false,
      showDetail: true,
      id
    });
  };

  render() {
    return (
      <div>
        {this.state.showList && (
          <CommunityEvents
            showDetail={this.showDetail}
          />
        )}
        {this.state.showDetail && (
          <CommunityEvent
            showList={this.showList}
            id={this.state.id}
          />
        )}
      </div>
    );
  }
}