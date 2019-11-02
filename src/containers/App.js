//React
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//MaterialUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

//Actions
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from "../actions";

//Components
import Picker from "../components/Picker";
import Posts from "../components/Posts";
import Header from "../components/Header";
import MaterialPicker from "../components/MaterialPicker";
import MaterialPosts from "../components/MaterialPosts";

class App extends Component {
  static propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }

  handleChange = nextSubreddit => {
    this.props.dispatch(selectSubreddit(nextSubreddit));
  };

  handleRefreshClick = e => {
    e.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  };

  render() {
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
    const isEmpty = posts.length === 0;
    console.log(selectedSubreddit);
    console.log(posts);
    return (
      <div>
        <Header
          value={selectedSubreddit}
          handleRefreshClick={this.handleRefreshClick}
        />
        <main>
          <Grid container>
            <Grid item xs={12}>
              <h1>This is the some filler stuff</h1>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={8}>
              <Typography variant="caption" style={{ textAlign: "center" }}>
                {lastUpdated && (
                  <span>
                    Last updated at {new Date(lastUpdated).toLocaleTimeString()}
                    .{" "}
                  </span>
                )}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <MaterialPicker
                value={selectedSubreddit}
                onChange={this.handleChange}
                options={["reactjs", "frontend", "webdev"]}
              />
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 20 }}>
              {isEmpty ? (
                isFetching ? (
                  <h2>Loading...</h2>
                ) : (
                  <h2>Empty.</h2>
                )
              ) : (
                <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                  <MaterialPosts posts={posts} />
                </div>
              )}
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state;
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
    selectedSubreddit
  ] || {
    isFetching: true,
    items: []
  };

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(App);
