import { connect } from 'react-redux';

import { getPosts } from '../actions/postsActions'; 

import Posts from '../components/Posts';

const mapStateToProps = (state) => {
  return {
    posts: state.posts.data,
    loading: state.posts.loading,
    error: state.posts.error
  }
};

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
