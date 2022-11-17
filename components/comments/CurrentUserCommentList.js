// material
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// react
import { useCallback } from 'react';

// components
import useCurrentUserComments from 'hooks/useCurrentUserComments';
import CurrentUserCommentItem from './CurrentUserCommentItem';

const CurrentUserCommentList = ({ blogId }) => {
  const { comments } = useCurrentUserComments({ blogId });

  console.log('DEBUG comments comments', comments);

  const renderCommentItem = useCallback(() => {
    if (comments.length < 0) return null;

    return comments.map((comment) => (
      <CurrentUserCommentItem
        comment={comment}
        key={comment._id}
      />
    ));
  }, [comments]);
  return (
    <Card sx={{ bgcolor: 'transparent' }} elevation={0}>
      <CardContent sx={{ p: 0 }}>
        {renderCommentItem()}
      </CardContent>
    </Card>
  );
};

export default CurrentUserCommentList;