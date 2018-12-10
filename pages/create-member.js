// This is Link API
import Link from "next/link";
import React from "react";
import Dashboard from "../components/Dashboard.js";
import Button from '@material-ui/core/Button';
import AddMemberDialog from './../components/AddMemberDialog';


class Member extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
  <div>
    <Dashboard title="Members">
      <Button variant="contained" color="primary" onClick={this.handleClickOpen} >
        Add Member
      </Button>
      <AddMemberDialog handleClose={this.handleClose} open={this.state.open}/>
    </Dashboard>
  </div>);
  }
}

export default Member;
