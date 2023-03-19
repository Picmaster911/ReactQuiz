import { Typography } from "@mui/material";
import React, { useState } from "react";

export default function Footer() {
    let [value, setValue] = useState(0);
    return (
        <Typography variant="h1" component="h2">
            QUiZ
        </Typography>
    )
}