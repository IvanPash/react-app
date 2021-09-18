import React from "react";
import { connect } from "react-redux";
import { AddPostAC, UpdateValueTextareaAC } from "../../../redux/reducerProfile";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
  return {
    state: state.ProfilePage
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ChangeTextareaUI: (value) => {
        dispatch(UpdateValueTextareaAC(value));
    },
    AddPostLocalUI: () => {
        dispatch(AddPostAC());
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
