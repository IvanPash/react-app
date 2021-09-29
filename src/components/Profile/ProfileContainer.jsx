import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProfile } from "../../redux/reducerProfile";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId ? this.props.match.params.userId : "2";
    axios("https://social-network.samuraijs.com/api/1.0/profile/" + userId).then((response) => {
      this.props.setProfile(response.data);
    });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.ProfilePage.profile,
  };
};

const testComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setProfile })(testComponent);
