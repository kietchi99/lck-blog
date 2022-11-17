//react
import * as React from 'react';

//material
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SearchBox from "components/search/SearchBox"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';

//react-instantsearch-dom
import { InstantSearch, Index } from 'react-instantsearch-dom';
import { algoliaSearchClient } from 'lib/algolia/index';

//component
import Hits from './Hits';


//material
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ SearchDialog, setSearchDialog }) {
  return (
    <div>
      <BootstrapDialog
        onClose={setSearchDialog}
        aria-labelledby="customized-dialog-title"
        open={SearchDialog}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={setSearchDialog}>
          hehe boy
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <InstantSearch
            indexName="blogs"
            searchClient={algoliaSearchClient}
          >
            <CardActions sx={{ p: (theme) => theme.spacing(1, 2) }}>
              <SearchBox />
            </CardActions>
            <CardContent sx={{ height: '85vh', overflowY: 'scroll', p: 0 }}>
              <Index indexName="blogs">
                <List
                  subheader={
                    <ListSubheader disableSticky>
                      Blogs
                    </ListSubheader>
                  }
                >
                  <Hits onSearchClose={setSearchDialog} />
                </List>
              </Index>
            </CardContent>
          </InstantSearch>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}