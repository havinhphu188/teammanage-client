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
            {this.props.assignedMember.map(n => {
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
                      onClick={() => this.props.onClick(n.id)}
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
