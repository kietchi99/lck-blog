// material
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
//import CardActions from '@mui/material/CardActions';
//import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
//import Collapse from '@mui/material/Collapse';
//import ReplyIcon from '@mui/icons-material/Reply';

// react
import { useState } from 'react';

// utils
//import timeAgoFormat from '../../../lib/utils/timeAgoFormat';

// components
//import CommentReplies from '../CommentReplies/CommentReplies';
//import CreateReplyForm from '../../commentReplies/CreateReplyFrom/CreateReplyForm';
import DeleteCommentButton from './DeleteCommentButton';

// hooks
import useCurrentUser from 'hooks/useCurrentUser';

const CurrentUserCommentItem = ({ comment }) => {
  const [repliesExpanded, setRepliesExpanded] =
    useState(false);

  const { currentUser } = useCurrentUser();

  const onRepliesClick = () => {
    setRepliesExpanded(!repliesExpanded);
  };

  const onRepliesClose = () => {
    setRepliesExpanded(false);
  };

  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: 'transparent',

        borderRadius: 'unset',
        borderTop: 1,

        borderColor: 'divider',
      }}
    >
      <CardHeader
        sx={{
          p: (theme) => theme.spacing(1, 2, 0.5, 1),

          '& .MuiCardHeader-avatar': {
            marginRight: 1,
          },
        }}
        title={comment?.user?.name}
        avatar={
          <Avatar
            src={comment?.user?.avatar}
            alt={comment?.user?.name}
          />
        }
        subheader={ comment?.createdAt || new Date().toString() }
        action={
          currentUser ? (
            currentUser._id === comment.user._id ? (
              <DeleteCommentButton
                blogId={comment.blog._ref}
                commentId={comment._id}
              />
            ) : undefined
          ) : undefined
        }
        titleTypographyProps={{
          fontSize: '0.875rem',
          fontWeight: 600,
        }}
        subheaderTypographyProps={{
          fontSize: '0.7rem',
        }}
      />

      <CardContent
        sx={{ p: (theme) => theme.spacing(0.5, 1, 0.5, 1) }}
      >
        <Typography
          variant="body1"
          sx={{
            whiteSpace: 'pre-wrap',

            fontSize: '0.875rem',
          }}
        >
          {comment?.content}
        </Typography>
      </CardContent>

      {/*<CardActions
        sx={{
          p: (theme) => theme.spacing(0.5, 1, 0.5, 1),
        }}
      >
        <Button
          startIcon={<ReplyIcon />}
          size="small"
          onClick={onRepliesClick}
          aria-expanded={repliesExpanded}
          aria-label="show replies"
        >
          View {comment.repliesQuantity} replies
        </Button>
      </CardActions>

      <Collapse
        in={repliesExpanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent
          sx={{ p: (theme) => theme.spacing(0, 1, 0, 1) }}
        >
          <CreateReplyForm
            commentId={comment._id}
            repliedToUser={comment.user}
            onClose={onRepliesClose}
            articleId={comment.article._ref}
          />
        </CardContent>
        <CommentReplies
          commentId={comment._id}
          commentUserId={comment.user.ref._ref}
          articleId={comment.article._ref}
        />
    </Collapse>*/}
    </Card>
  );
};

export default CurrentUserCommentItem;