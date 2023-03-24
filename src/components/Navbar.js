
import { styled } from '@mui/material/styles'

import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar,Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import pic from "./passprt.png";



import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Mail, Notifications } from '@mui/icons-material';


const StyledToolbar=styled(Toolbar)({
    display:"flex",   
    justifyContent:"space-between"

});

const Search=styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0px 10px",
    borderRadius:"5px", 
    width:"40%",

}));

const Icons=styled(Box)(({theme})=>({
    display:"none",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex",
    }
    

}));

const UserBox=styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none",
    }
    

}));

const Navbar = () => {

    const [open,setOpen]=useState(false);
    
  return (
    <AppBar position='sticky' width="100%" mt="0px" padding="0" margin="0">
        <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>Flex Chat</Typography>
        <WhatsAppIcon sx={{display:{xs:"block",sm:"none"}}} />
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
        <Badge badgeContent={4} color="error"> 
            <Mail />
        </Badge>
        <Badge badgeContent={4} color="error"> 
            <Notifications />
        </Badge>
        <Avatar onClick={()=>setOpen(true)} src={pic} sx={{width:30,height:30}}/>
        </Icons>
        <UserBox onClick={()=>setOpen(true)}>
        <Avatar src={pic} sx={{width:30,height:30}}/>
        <Typography variant="span">Durga Rao</Typography>
        </UserBox>
        
        </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={(e)=>setOpen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
   
  )
}

export default Navbar;

