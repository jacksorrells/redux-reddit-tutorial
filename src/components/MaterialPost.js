//React
import React from "react";
import PropTypes from "prop-types";

//MaterialUI
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const MaterialPost = ({ post }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      <a href={post.url} target="_blank">
        {post.title}
      </a>
    </TableCell>
    <TableCell numeric>{post.ups}</TableCell>
    <TableCell numeric>{post.downs}</TableCell>
    <TableCell>{post.author}</TableCell>
  </TableRow>
);

MaterialPost.propTypes = {
  post: PropTypes.object.isRequired
};

export default MaterialPost;
