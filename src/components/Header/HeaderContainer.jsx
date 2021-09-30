import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../redux/reducerAuth';
import Header from './Header';

class HeaderContainer extends React.Component{
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true}).then(response => {
      if(response.data.resultCode === 0) this.props.setUser(response.data.resultCode, response.data.data,)
      else this.props.setUser(response.data.resultCode)
    })
  }
  render() {
    return (
      <Header {...this.props.dataUser} isAuth={this.props.isAuth} /> 
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.Auth.dataUser,
    isAuth: state.Auth.isAuth,
  }
}

export default connect(mapStateToProps, {setUser} )(HeaderContainer)