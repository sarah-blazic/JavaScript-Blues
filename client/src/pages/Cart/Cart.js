import * as React from 'react';
import "./Cart.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ListItemSecondaryAction } from '@mui/material';

export default function Cart(props) {
  const {cartItems, onAdd, onRemove} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  console.log(cartItems);
    return (
      <Box sx={{ my: 10, }}>
        
        <Container>{cartItems.length === 0 && <h2 className='empty'>Cart is empty</h2>}</Container>
        
      <Container maxWidth="lg">
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
        }}
      >
        {cartItems.map((item)=>(
          <ListItem>
          <ListItemAvatar>
            <Avatar src={"../../images/" + item.image}>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.name} secondary={item.description} />
          <Box sx={{ px: 2, }}>
          <Button variant="contained" onClick={() => onAdd(item)}>+</Button>
          </Box>
          {item.qty}
          <Box sx={{ px: 2, }}>
          <Button variant="contained" onClick={() => onRemove(item)}>-</Button>
          </Box>
          ${item.price * item.qty}
        </ListItem>
        ))}
        <ListItem>
          <ListItemText>Total</ListItemText>
          <Box sx={{ my: 2, }}>
         <ListItemSecondaryAction>${itemsPrice}</ListItemSecondaryAction>
         </Box>
        
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
      </Container>
      </Box>
    );
  }



