import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Box, List, ListItem, ListItemText } from '@material-ui/core'

const useStyles = makeStyles({
    list: {
        display: "flex"
    },
    listItem: {
        textAlign: "center"
    }
})

const menuItems = [
    {
        listText: "Le Concept",
        listPath: "/concept"
    },
    {
        listText: "Le Fondateur",
        listPath: "/founder"
    },
    {
        listText: "Nos Engagements",
        listPath: "/engagements"
    },
    {
        listText: "Adresses",
        listPath: "/adresses"
    },
    {
        listText: "Menu",
        listPath: "/menu"
    },
    {
        listText: "Contact",
        listPath: "/contact"
    },
]

const Navbar = () => {

    const classes = useStyles()


    return (
        <Box>
            <List className={classes.list}>
                {menuItems.map((item, i) => (
                    <ListItem
                        className={classes.listItem}
                        button
                        key={i}
                        component={Link}
                        to={item.listPath}
                    >
                        <ListItemText className={classes.listItemText} primary={item.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default Navbar
