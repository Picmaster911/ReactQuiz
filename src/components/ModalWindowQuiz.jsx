import React from "react";
import {Box, Button, IconButton, Modal, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function ModalWindowQuiz ({ handler,handleClose,img,info,quiz }){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={handler}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={ style }>
                <IconButton
                    sx={{
                        position: 'absolute',
                        right:10,
                        marginRight: '20px',
                        flexDirection: 'row',
                        boxShadow: 1,
                        borderRadius: 2,
                        minWidth: 10,
                        backgroundColor: 'silver'
                    }}
                    size='small'
                    edge='start'
                    color='inherit'
                    aria-label='logo'
                    onClick={ handleClose }>
                    <CloseIcon/>
                </IconButton>
                <img width='300px' src={img}/>
                <Typography  variant="h6" component="h2">
                    {quiz}
                </Typography>
                <Typography  sx={{ mt: 2 }}>
                    {info}
                </Typography>
            </Box>
        </Modal>
    )
}