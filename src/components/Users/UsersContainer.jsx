import * as axios from "axios";
import { connect } from "react-redux";
import React from "react";
import {
  setUsers,
  followUser,
  unfollowUser,
  setPage,
  setTotalCount,
  setStatusPreloader,
} from "../../redux/reducerUsers";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setStatusPreloaderUI(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`
      )
      .then((response) => {
        this.props.setUsersUI(response.data.items);
        this.props.setTotalCountUI(response.data.totalCount);
        this.props.setStatusPreloaderUI(false);
      });
  }
  onPageChange = (page) => {
    this.props.setPageUI(page);
    this.props.setStatusPreloaderUI(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${page}`)
      .then((response) => {
        this.props.setUsersUI(response.data.items);
        this.props.setTotalCountUI(response.data.totalCount);
        this.props.setStatusPreloaderUI(false);
      });
  };

  render() {
    return (
      <Users
        users={this.props.users}
        page={this.props.page}
        count={this.props.count}
        totalCount={this.props.totalCount}
        preloader={this.props.preloader}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
        setUsers={this.props.setUsers}
        setTotalCount={this.props.setTotalCount}
        onPageChange={this.onPageChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.UsersPage.users,
    count: state.UsersPage.count,
    page: state.UsersPage.page,
    totalCount: state.UsersPage.totalCount,
    preloader: state.UsersPage.preloader,
  };
};

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setTotalCount,
  setPage,
  setStatusPreloader,
})(UsersContainer);
