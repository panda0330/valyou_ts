import React from 'react';
import { Avatar, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function SubCommentItem() {
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
      <div className="flex items-start justify-between gap-2 my-2">
        <Avatar
          src="/image/sampleAvatar.jpg"
          sx={{ width: '30px', height: '30px' }}
        />
        <div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">Abraham Lincoln</p>
              <div className="text-xs color-green">Business</div>
            </div>
          </div>
          <p className="text-sm font-extralight">
            The best way to predict your future is to create it.Success is not
            final, failure is not fatal: It is the courage to continue that
            counts.
          </p>
          <a href="#" className="color-primary underline">
            reply
          </a>
        </div>
      </div>
    </>
  );
}
