import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "../actions";
import UserListGenerator from "./UserListGenerator";

export class DashboardBody extends Component {
  // componentDidMount() {
  //   this.props.fetchUserDetails();
  // }
  render() {
    console.log(this.props);
    const {
      userDetails: { activeUsers, inactiveUsers, userLogs = [] },
    } = this.props;
    return (
      <div className="dashboard-body-cont">
        <div className="user-info-wrapper">
          <div className="active-user-info-box">
            <p className="active-user-title">Active Users</p>
            <p className="user-count">{activeUsers}</p>
          </div>
          <div className="active-user-info-box">
            <p className="active-user-title">In Active Users</p>
            <p className="user-count">{inactiveUsers}</p>
          </div>
        </div>
        <div>
          <UserListGenerator userLogs={userLogs} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userDetails: state.userDetails,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchUserDetails: () =>
//     dispatch(
//       userLogin({
//         username: "developer@uitest.com",
//         password: "react2020",
//       })
//     ),
// });

export default connect(mapStateToProps, null)(DashboardBody);
