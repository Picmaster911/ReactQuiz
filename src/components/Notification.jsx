import React from 'react';
import {
    Stack,
    Snackbar
}
from "@mui/material";

export default function Notification ({ open,handleClose }) {
    return (
        <div>
            <Stack spacing={2} sx={{ maxWidth: 600 }}>
                <Snackbar
                    ContentProps={{
                        sx: {
                            background: "red"
                        }
                    }}
                    sx={{ height: "100%" }}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={ open }
                    onClose={ handleClose }
                    message="Start Quiz"
                />
            </Stack>
        </div>
    );
}