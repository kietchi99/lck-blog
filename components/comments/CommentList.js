// material
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/lab/LoadingButton';

// react
import { useCallback } from 'react';
import useArticleComments from 'hooks/useBlogComments';

// components
import CommentItem from './CommentItem';

const CommentList = ({ blogId }) => {
  const {
    commentsPages,
    isLoadingMore,
    isReachingEnd,
    size,
    setSize,
  } = useArticleComments(blogId);

  const renderCommentItem = useCallback(() => {
    if (commentsPages.length < 0) return null;
    return commentsPages.map((page) =>
      page?.map((comment) => (
        <CommentItem comment={comment} key={comment._id} />
      ))
    );
  }, [commentsPages]);

  return (
    <Card sx={{ bgcolor: 'transparent' }} elevation={0}>
      <CardContent sx={{ p: 0 }}>
        {renderCommentItem()}
      </CardContent>

      <CardActions>
        <Button
          disableElevation
          size="large"
          loading={isLoadingMore}
          variant="contained"
          onClick={(_) => setSize(size + 1)}
          disabled={isLoadingMore || isReachingEnd}
          fullWidth
        >
          Load more
        </Button>
      </CardActions>
    </Card>
  );
};

export default CommentList;