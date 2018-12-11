// This is Link API
import Link from "next/link";
import Dashboard from "../components/Dashboard.js";
import React from "react";
import fetch from 'isomorphic-unfetch';
import ProjectsTable from "../components/ProjectsTable.js";

class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch("http://localhost:7900/api/all-project");
    const data = await res.json();
    console.log(res);

    return {
      projects: data
    };
  }

  

  render() {
    return (
      <div>
        <Dashboard title="Project Manage">
          <ProjectsTable projects={this.props.projects}/>
        </Dashboard>
      </div>
    );
  }
}

export default Index;
