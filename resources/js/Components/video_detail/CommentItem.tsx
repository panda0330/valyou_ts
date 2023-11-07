import React from 'react';
import { Avatar, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SubCommentItem from './SubCommentItem';

export default function CommentItem() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="flex items-start justify-between gap-2">
        <Avatar src="/image/sampleAvatar.jpg" />
        <div>
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="font-bold">Abraham Lincoln</p>
              <div className="text-xs color-green">Business</div>
            </div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              size="small"
            >
              <MoreHorizIcon fontSize="small" />
            </IconButton>
          </div>
          <p className="text-sm font-extralight">
            The best way to predict your future is to create it.Success is not
            final, failure is not fatal: It is the courage to continue that
            counts.
          </p>
          <a href="#" className="color-primary underline">
            reply
          </a>
          <SubCommentItem />
        </div>
        <IconButton size="small">
          <FavoriteIcon fontSize="small" />
        </IconButton>
      </div>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteOutlineIcon />
          </ListItemIcon>
          <ListItemText>Delete Comment</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText>Edit Comment</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
