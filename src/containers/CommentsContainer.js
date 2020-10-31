import { connect } from 'react-redux';

import { getComments } from "../actions/commentsAction";

import Comments from '../components/Comments';

const mapStateToProps = (state) => {
  return {
    comments: state.comments.data,
    loading: state.comments.loading,
    error: state.comments.error
  }
}

export default connect(
  mapStateToProps,
  { getComments }
)(Comments);
