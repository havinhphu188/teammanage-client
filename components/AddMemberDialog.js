import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class AddMemberDialog extends React.Component {
  state = {
    name: "",
    email: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    };
  addMember = () => {
    const axios = require("axios");
    axios
      .post("http://localhost:7900/api/create-member", {
        member_name: this.state.name,
        member_email: this.state.email
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
        <DialogTitle id="form-dialog-title">Add New Member</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Member Name"
            type="text"
            fullWidth
            value={this.state.name}
            onChange= {this.handleChange('name')}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={this.state.email}
            onChange={this.handleChange('email')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.addMember} color="primary">
            Add Member
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
