//React
import React from "react";
import PropTypes from "prop-types";

//MaterialUI
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

//Local
import MaterialPost from "./MaterialPost";
import MaterialPagination from "./MaterialPagination";

const MaterialPosts = ({ posts }) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Posts</TableCell>
          <TableCell>Upvotes</TableCell>
          <TableCell>Downvotes</TableCell>
          <TableCell>Author</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {posts.map(post => {
          return <MaterialPost key={post.title} post={post} />;
        })}
      </TableBody>
    </Table>
  </Paper>
);

MaterialPosts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default MaterialPosts;
