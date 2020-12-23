import { Box, Typography } from '@material-ui/core'
import { Link } from "react-router-dom"
import React from 'react'

const Footer = () => {
    return (
        <Box>
            <Box>
                <Typography component={Link} to="#" variant="button"> Footer</Typography>
                <Typography component={Link} to="#" variant="button"> Footer</Typography>
                <Typography component={Link} to="#" variant="button"> Footer</Typography>
                <Typography component={Link} to="#" variant="button"> Footer</Typography>
            </Box>
            <Box>
                <Typography component={Link} to="#" variant="button"> Footer</Typography>
                <Typography component={Link} to="#" variant="button"> Footer</Typography>
            </Box>
        </Box>
    )
}

export default Footer
