import React from "react";
import { Link } from "react-router-dom";
import { useButtonStyles } from "../Styles/Onboarding/useButtonStyles";
import {
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    FacebookShareButton,
    FacebookIcon,
} from "react-share";

import { Container, Typography, Grid, Box, Divider } from "@mui/material";

const CalcSharebtn = ({ button }) => {
    const classes = useButtonStyles();
   
    return (
        <Container className={classes.boxShadow}>
<Box className={classes.shareContent}>
    <Typography className={classes.headingStyle} variant="h4">
        Your voice is a powerful tool. Share our fundraiser.
    </Typography>
    <Typography className={classes.subheadingStyle} variant="body1">
        Help Clearviction expand its reach by sharing your donation activity with friends,
        family, and more.
    </Typography>
</Box>
<Box id="social" className={classes.socialIcons}>
    <TwitterShareButton
        title="This #GivingTuesday, join the global movement and please support Clearviction today."
        url="http://www.clearviction.org/"
        source="http://www.clearviction.org/"
    >
        <TwitterIcon size={50} round bgStyle={{ fill: "#FFD200" }} />
    </TwitterShareButton>
    <FacebookShareButton
        url="http://www.clearviction.org/"
        hashtag="#clearviction"
    >
        <FacebookIcon size={50} round bgStyle={{ fill: "#FFD200" }} />
    </FacebookShareButton>
    <LinkedinShareButton url="http://www.clearviction.org/">
        <LinkedinIcon size={50} round bgStyle={{ fill: "#FFD200" }} />
    </LinkedinShareButton>
</Box>
</Container>
    );
};

export default CalcSharebtn;


