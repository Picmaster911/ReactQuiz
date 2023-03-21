import { Component } from "react";
import { Button, Stack } from "@mui/material";

export default class NavBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Stack direction="column" spacing={2} 
            sx={{ 
                display: {
                     xs: 'none',
                      md: 'inherit'
                       }, 
                       width: "50%" 
                        }}
                        >
                <Button variant="contained">Action 1</Button>
                <Button variant="contained">Action 2</Button>
                <Button variant="contained"> Action 3</Button>
            </Stack>
        )
    }
}
