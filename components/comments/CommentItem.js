//react
import { useState } from 'react';

// material
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import ReplyIcon from '@mui/icons-material/Reply';

// src/lib/utils
//import timeAgoFormat from '../../../lib/utils/timeAgoFormat';

// components
//import CommentReplies from '../CommentReplies/CommentReplies';
//import CreateReplyForm from '../../commentReplies/CreateReplyFrom/CreateReplyForm';

const CommentItem = ({ comment }) => {
  
  const [repliesExpanded, setRepliesExpanded] = useState(false);

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
          p: (theme) => theme.spacing(1, 1, 0.5, 1),
          ['& .MuiCardHeader-avatar']: {
            mr: 1,
          },
        }}
        title={comment?.user?.name}
        avatar={
          <Avatar
            src={comment?.user?.avatar}
            alt={comment?.user?.name}
          />
        }
        subheader={comment?.createdAt || new Date().toString()}
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
            letterSpacing: 0,
            fontSize: '0.875rem',
          }}
        >
          {comment?.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentItem;