import React, { useState } from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {
    BottomNavigationAction,
    Box,
    BottomNavigation
} from "@mui/material";

export  default function Footer () {
    let [ value,setValue ] = useState(0);
    return (
        <Box
            sx={{
                width: '100%',
                height:"auto",
                paddingTop: "1rem",
                paddingBottom:"1rem",
                backgroundColor: 'inherit'
            }}
        >
            <BottomNavigation
                showLabels
                value={ value }
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Facebook" icon={<AddAPhotoIcon/>} />
                <BottomNavigationAction label="Favorites" icon={<AddAPhotoIcon/>} />
                <BottomNavigationAction label="Nearby" icon={<AddAPhotoIcon/>} />
            </BottomNavigation>
        </Box>
    )
}