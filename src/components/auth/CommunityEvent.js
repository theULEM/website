import React, { Component } from "react";
import CommunityEventNew from "./CommunityEventNew";
import CommunityEventList from "./CommunityEventList";
import CommunityEventUpdate from "./CommunityEventUpdate";

export default class CommunityEvent extends Component {
  state = {
    showAdding: false,
    showList: true,
    showEditing: false,
    id: ""
  };

  showAdding = () => {
    this.setState({
      showAdding: true,
      showList: false,
      showEditing: false
    });
  };

  showList = () => {
    this.setState({
      showAdding: false,
      showList: true,
      showEditing: false
    });
  };

  showEditing = id => {
    this.setState({
      showAdding: false,
      showList: false,
      showEditing: true,
      id
    });
  };

  render() {
    return (
      <div>
        {this.state.showList && (
          <CommunityEventList
            showAdding={this.showAdding}
            showEditing={this.showEditing}
            user={this.props.user}
          />
        )}
        {this.state.showAdding && (
          <CommunityEventNew showList={this.showList} user={this.props.user} />
        )}
        {this.state.showEditing && (
          <CommunityEventUpdate
            showList={this.showList}
            id={this.state.id}
            user={this.props.user}
          />
        )}
      </div>
    );
  }
}
