import { Avatar, AvatarGroup, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react';

import n1 from "../images/n1.jpeg";
import n2 from "../images/n2.jpeg";
import n3 from "../images/n3.jpeg";
import n4 from "../images/n4.jpeg";
import n5 from "../images/n5.jpeg";

const Rightbar = () => {
  return (
    <Box  flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}} ><Box position="fixed" width={280} >

        <Typography variant="h6" fontWeight={300} >Online Friends</Typography>
        <AvatarGroup total={24} marginRight={3} paddingRight="10px">
            <Avatar alt="Remy Sharp" src={n5} />
            <Avatar alt="Travis Howard" src={n2}/>
            <Avatar alt="Agnes Walker" src={n3} />
            <Avatar alt="Trevor Henderson" src={n4}/>
            
        </AvatarGroup>
        <Typography variant="h6" fontWeight={300}  >Latest Photos</Typography>
        <ImageList col={3} rowHeight={85} gap={6} mt={2}>
            <ImageListItem>
                <img src={n1} alt="" />
            </ImageListItem>
            <ImageListItem>
                <img src={n2} alt="" />
            </ImageListItem>
            <ImageListItem>
                <img src={n3} alt="" />
            </ImageListItem>
            <ImageListItem>
                <img src={n4} alt="" />
            </ImageListItem>
            
        </ImageList>
        <Typography variant="h6" fontWeight={300}   >Latest Conversations</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

        
        </Box></Box>
  )
}

export default Rightbar
