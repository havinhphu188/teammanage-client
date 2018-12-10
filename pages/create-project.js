// This is Link API
import Link from "next/link";
import React from "react";
import Dashboard from "../components/Dashboard.js";
import Button from "@material-ui/core/Button";
import AddProjectDialog from "../components/AddProjectDialog.js";

class Project extends React.Component {
  state = {
    open: false
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
        <Dashboard title="Project">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickOpen}
          >
            Add Project
          </Button>
          <AddProjectDialog
            handleClose={this.handleClose}
            open={this.state.open}
          />
        </Dashboard>
      </div>
    );
  }
}

export default Project;
