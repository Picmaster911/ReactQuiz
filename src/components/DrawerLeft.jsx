import React from "react";
import { Drawer,Box,Typography } from '@mui/material';

export  default function  DrawerLeft ({watchOpenDrawel,closeDrawer}) {

    return (
        <>
            <Drawer
                anchor='left'
                open={ watchOpenDrawel }
                onClose={ closeDrawer }
            >
                <Box
                    p={2} width='250px'
                    textAlign='center'
                    role='presentation'
                >
                    <Typography
                        variant='h6'
                        component='div'
                    >
                        Site Panel
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}