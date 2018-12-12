// This is Link API
import Link from "next/link";
import Dashboard from "../components/Dashboard.js";
import React from "react";
import fetch from 'isomorphic-unfetch';
import ProjectsTable from "../components/ProjectsTable.js";
import AddProjectDialog from './../components/AddProjectDialog';
import Button from '@material-ui/core/Button';

class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch("http://localhost:7900/api/all-project");
    const data = await res.json();
    console.log(res);

    return {
      projects: data
    };
  }

  state = {
    open: false,
    projects: this.props.projects
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAddProject = async function  (project_name, project_desc){
    const axios = require("axios");
    await axios.post("http://localhost:7900/api/create-project", {
        project_name: project_name,
        project_desc: project_desc
      });
    let res = await axios.get("http://localhost:7900/api/all-project");
    this.setState({
      projects: res.data
    });  
      
    this.handleClose();
  };
  



  render() {
    return (
      <div>
        <Dashboard title="Project Manage">
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
            handleAddProject={(project_name, project_desc)=>this.handleAddProject(project_name, project_desc)}
          />
          <ProjectsTable projects={this.state.projects}/>
        </Dashboard>
      </div>
    );
  }
}

export default Index;
