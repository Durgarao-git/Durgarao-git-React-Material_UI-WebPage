import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react';
import {Add as AddIcon} from "@mui/icons-material";
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import n2 from "../images/n2.jpeg";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal=styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
});

const UserBox=styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px",
    
});

const Add = () => {

    const [open,setOpen]=useState(false);

  return (
    <>
    <Tooltip title="delete" onClick={(e)=>setOpen(true)} sx={{position:"fixed",bottom:20 ,left:{xs:"calc(50%-25px)",md:30} }}>
        <Fab color="primary" aria-label="add">
            <AddIcon/>

        </Fab>
    </Tooltip>

    <StyledModal
  open={open}
  onClose={(e)=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280}  bgcolor={"background.default"}  color={"text.primary"} borderRadius={5} p={3}>
    <Typography variant="h6" color="grey" textAlign="center" >Create Post</Typography>
    <UserBox>
        <Avatar src={n2} sx={{width:30,height:30}} />
        <Typography  fontWeight={500} variant="span">Durga Rao</Typography>
    </UserBox>

    <TextField
          id="standard-multiline-static"
          sx={{width:"100%"}}        
          multiline
          rows={3}
          placeholder="What's on your mind!!!"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon  color="primary"/>
            <ImageIcon color="secondary" />
            <VideoCallIcon color="success" />
            <PersonAddIcon color="error" />

        </Stack>
        <ButtonGroup variant="contained" aria-label="outlined primary button group"  fullWidth>
            <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
            
        </ButtonGroup>
    
  </Box>
</StyledModal>
    </>
  )
}

export default Add
