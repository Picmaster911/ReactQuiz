import { Drawer,Box,Typography,IconButton } from '@mui/material';
import {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";

export  default function  CompMuiDrawer () {
    const [isDrawerOpen,setDrawerOpen] = useState(false);
    return (
        <>
            <IconButton
                sx={{
                    flexDirection: 'row',
                    padding:10,
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 300,
                }}
                size='large'
                edge='start'
                color='inherit'
                aria-label='logo'
                onClick={() => setDrawerOpen(true)}>
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor='left'
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}>
                <Box
                    p={2} width='250px'
                    textAlign='center'
                    role='presentation'>
                    <Typography
                        variant='h6'
                        component='div'>
                        Site Panel
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}