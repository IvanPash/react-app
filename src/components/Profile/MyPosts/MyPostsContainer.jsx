import React from "react";
import MyContext from "../../../context";
import { AddPostAC, UpdateValueTextareaAC } from "../../../redux/reducerProfile";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <MyContext.Consumer>
      { store => {
        debugger
        let ChangeTextareaUI = (value) => {
          store.dispatch(UpdateValueTextareaAC(value));
        };
        let AddPostLocalUI = () => {
          store.dispatch(AddPostAC());
        };

        return (
          <MyPosts
            ChangeTextareaUI={ChangeTextareaUI}
            AddPostLocalUI={AddPostLocalUI}
            state={store.getState().ProfilePage}
          />
        );
      }}
    </MyContext.Consumer>
  );
};

export default MyPostsContainer;
