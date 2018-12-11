// This is Link API
import Link from "next/link";
import Dashboard from "../components/Dashboard.js";
import React from "react";
import fetch from "isomorphic-unfetch";
import AssignedMemberTable from "../components/AssignedMemberTable.js";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Button from '@material-ui/core/Button';
import AssignMemberDialog from './../components/AssignMemberDialog';

class Projectboard extends React.Component {
  state = {
    id: this.props.id,
    members: this.props.members,
    projectInfo: this.props.projectInfo,
    open: false
  };

  static async getInitialProps(context) {
    const { id } = context.query;
    const resMembers = await fetch(
      `http://localhost:7900/api/get-assigned-member?id=${id}`
    );
    const members = await resMembers.json();

    const resProject = await fetch(
      `http://localhost:7900/api/get-project-info?id=${id}`
    );
    const projectInfo = await resProject.json();

    return {
      id: id,
      members: members,
      projectInfo: projectInfo
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Dashboard title={this.props.projectInfo.project_name}>
          <Typography variant="h5" gutterBottom>
            Description:
          </Typography>
          <Typography variant="body1" gutterBottom>
            {this.props.projectInfo.project_desc}
          </Typography>
          <AssignedMemberTable
            assignedMember={this.props.members}
            projectId={this.state.id}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickOpen}
          >
            Assign New Member
          </Button>
          <AssignMemberDialog
            projectId = {this.props.id}
            handleClose={this.handleClose}
            open={this.state.open}
          />
        </Dashboard>
      </div>
    );
  }
}

export default Projectboard;
