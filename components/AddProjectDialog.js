import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class AddProjectDialog extends React.Component {
  state = {
    name: "",
    description: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    };
    
  addProject = () => {
    const axios = require("axios");
    axios
      .post("http://localhost:7900/api/create-project", {
        project_name: this.state.name,
        project_desc: this.state.description
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.props.handleClose();
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name"
            type="text"
            fullWidth
            value={this.state.name}
            onChange= {this.handleChange('name')}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            value={this.state.description}
            onChange={this.handleChange('description')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.addProject} color="primary">
            Add Project
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
