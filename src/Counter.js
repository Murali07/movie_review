import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(dislike + 1);
  
  return (
    <div>     

      <IconButton onClick={incrementLike} aria-label="Like" color="primary">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>  
      
      <IconButton onClick={incrementDisLike} aria-label="Dislike" color="error">
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>         
      </IconButton>     
      
    </div>
  );
}
