import { Component } from "react";
import {
    Typography,
    Button,
    Grid,
    Stack,
} from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default class Header extends Component {
    constructor() {
        super();
    }

    render() {
        const StyleCentr = {
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
        }
        return (
            <>
                <Grid container style={{ alignItems: "baseline" }}>
                    <Grid item xs={6} style={StyleCentr} >
                        <Typography variant="h1" component="h2" sx={{ fontSize: { xs: 35, md: 65 } }}>
                            Site  QUIZ
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ display: { xs: 'block', md: 'none', lg: 'none' } }}>
                        <Typography style={StyleCentr}>
                            <FormatListBulletedIcon />
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Stack direction="row" spacing={2} style={StyleCentr}>
                            <Button variant="contained">Primary</Button>
                            <Button variant="contained">Secondary</Button>
                            <Button variant="contained" href="#outlined-buttons">
                                Link
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </>
        )
    }
}



