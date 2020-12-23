import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from "@material-ui/core/styles"

const Buttn = ({ children, ...otherProps }) => {
    return (
        <Button {...otherProps}>
            {children}
        </Button>
    )
}

export default Buttn
