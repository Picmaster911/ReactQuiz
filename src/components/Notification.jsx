import { Component } from "react";
import {
    Stack,
    Snackbar,
}
    from "@mui/material";

export default class Notification extends Component {
    constructor() {
        super();
    }

    render() {
        const { open, handleClose } = this.props
    return (
        <>
            <Stack spacing={2} sx={{ maxWidth: 600 }}>
                <Snackbar
                    ContentProps={{
                        sx: {
                            background: "red",
                            height: "100%"
                        }
                    }}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={open}
                    onClose={handleClose}
                    message="Start Quiz"
                />
            </Stack>
        </>
    );
}
}