import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';


export default class AssignMemberDialog extends React.Component {

  state = {
    members:[],
    chosenMembers:[]
  }

  componentDidUpdate(prevProps){
    if ((this.props.open === true) && (prevProps.open === false) ){
      axios.get('http://localhost:7900/api/get-unassigned-members',{
        params: {
          id: this.props.projectId
        }
      })
      .then(
        (response) =>{
          this.setState(
            { 
              members: response.data , 
              chosenMembers: Array(response.data.length).fill(false) 
            });
        } 
       )
       .catch(err=> console.log(err));
    }
   
  }

  handleToggle = function(id){
    let newChosenList = this.state.chosenMembers;
    newChosenList[id] = !newChosenList[id];
    this.setState({
      chosenMembers: newChosenList
    });
  }

  assignMember = function(){
    let assignMemberId = [];
    for (var i=0; i < this.state.chosenMembers.length; i++){
      if (this.state.chosenMembers[i]){
        assignMemberId.push(this.state.members[i].id);
      }        
    }
    axios.post("http://localhost:7900/api//assigned-member-to-project",{
      projectId: this.props.projectId,
      memberIds: assignMemberId
    })
    .then(()=> this.props.handleClose())
    .catch();
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Assign New Member</DialogTitle>
        {/* <DialogContent> */}
        {/* {this.state.members.map(n => {
              return (
                n.member_name
              );
            })} */}
        {
          <List dense >
          {this.state.members.map((member,index) => (
            <ListItem key={member.id}>
              <ListItemText primary={member.member_name} />
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={() => this.handleToggle(index)}
                  checked={this.state.chosenMembers[index]}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        }      
        {/* </DialogContent> */}
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>this.assignMember()} color="primary">
            Add Member
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
