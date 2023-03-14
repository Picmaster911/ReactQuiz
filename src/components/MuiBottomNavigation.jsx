import {useState} from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import {BottomNavigationAction} from "@mui/material";
import CompIconFacebook from "./CompIconFacebook";
import CompIconTelegram from "./CompIconTelegram";
import CompIconInsta from "./CompIconInsta";


export  default function MuiBottomNavigation () {
    let [value,setValue] = useState(0);
    return (
        <BottomNavigation
            sx={{
                width: '100%',
                position: 'absolute',
                bottom:0,
                backgroundColor: 'inherit'
            }}
                          showLabels
                          value={value}
                          onChange={(event, newValue) => {
                              setValue(newValue);
                          }}
        >
            <BottomNavigationAction label="Facebook" icon={<CompIconFacebook/>} />
            <BottomNavigationAction label="Favorites" icon={<CompIconTelegram/>} />
            <BottomNavigationAction label="Nearby" icon={<CompIconInsta/>} />
        </BottomNavigation>
    )
}