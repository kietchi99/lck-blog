//component
import CreateCommentForm from './CreateCommentForm';
import CurrentUserCommentList from './CurrentUserCommentList';

const CurrentUserComments = ({ blogId }) => {
  return (
    <>
      <CreateCommentForm blogId={blogId} />
      <CurrentUserCommentList blogId={blogId} />
    </>
  );
};

export default CurrentUserComments;