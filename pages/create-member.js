// This is Link API
import Link from "next/link";
import React from "react";
import Dashboard from "../components/Dashboard.js";
import Button from '@material-ui/core/Button';
import AddMemberDialog from './../components/AddMemberDialog';
import axios from "axios";
import MemberTable from "../components/MemberTable.js";


class Member extends React.Component {
  state = {
    open: false,
    members: this.props.members
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  static async getInitialProps() {
    const res = await fetch("http://localhost:7900/api/all-member");
    const data = await res.json();
    return {
      members: data
    };
  }

  addMember = async function (member_name,member_email){
    await axios.post("http://localhost:7900/api/create-member", {
        member_name: member_name,
        member_email: member_email
      });
    let res = await axios.get("http://localhost:7900/api/all-member");  
    this.setState({
      members: res.data
    }); 
    this.handleClose();
  };

  render() {
    return (
  <div>
    <Dashboard title="Members">
      <Button variant="contained" color="primary" onClick={this.handleClickOpen} >
        Add Member
      </Button>
      <AddMemberDialog 
        handleClose={this.handleClose} 
        open={this.state.open} 
        addMember={(name,email)=>this.addMember(name, email)}/>
      <MemberTable members={this.state.members}/>
    </Dashboard>
  </div>);
  }
}

export default Member;
