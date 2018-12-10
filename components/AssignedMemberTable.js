import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import axios from "axios";

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
};

class AssignedMemberTable extends React.Component {
  removeMember = function(memberId) {
    const projectId = this.props.projectId;
    axios
      .post(`http://localhost:7900/api/remove-assigned-member`, {
        projectId: this.props.projectId,
        memberId: memberId
      })
      .then(function(response) {
        return axios.get(`http://localhost:7900/api/get-assigned-member`, {
          params: {
            id: projectId
          }
        });
      })
      .then(members => {
        this.setState({
          members: members.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  state = {
    members: this.props.assignedMember
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell numeric>Member Id</TableCell>
              <TableCell>Member name</TableCell>
              <TableCell>Member email</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.members.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell numeric component="th" scope="row">
                    {n.id}
                  </TableCell>
                  <TableCell>{n.member_name}</TableCell>
                  <TableCell>{n.member_email}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.removeMember(n.id)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

AssignedMemberTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AssignedMemberTable);
