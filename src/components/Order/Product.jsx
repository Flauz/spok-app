import React from 'react';
import { createMuiTheme } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from "react-redux"
import { addToCart } from '../../redux/actions/cartActions'

const theme = createMuiTheme()

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: theme.spacing(6),
        margin: "auto"
    },
    media: {
        height: 140,
    },
});

const Product = ({ item }) => {
    const classes = useStyles();
    const { name, description, imageUrl, price } = item
    const dispatch = useDispatch()

    const handleCart = item => {
        dispatch(addToCart(item))
    }

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={imageUrl}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Typography variant="subtitle2" >
                    {price}€
                    </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => handleCart(item)} size="small" color="primary">
                    commander
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default Product