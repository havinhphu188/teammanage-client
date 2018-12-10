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
import Link from 'next/link';

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
};

function ProjectsTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell numeric>Project Id</TableCell>
            <TableCell>Project name</TableCell>
            <TableCell>Project Description</TableCell>
            <TableCell>Show detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.projects.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell numeric component="th" scope="row">
                  {n.id}
                </TableCell>
                <TableCell>{n.project_name}</TableCell>
                <TableCell>{n.project_desc}</TableCell>
                <TableCell>
                  <Link href={"/project-board?id=" + n.id}>
                    <Button variant="contained" color="primary" >Show detail</Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

ProjectsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectsTable);
