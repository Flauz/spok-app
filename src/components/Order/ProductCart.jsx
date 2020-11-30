import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from "react-redux"
import { addToCart, reduceItem, removeItem } from '../../redux/actions/cartActions'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Product = ({ item }) => {
    const classes = useStyles();
    const { name, description, imageUrl, price, quantity } = item
    const dispatch = useDispatch()

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
                    <button onClick={() => dispatch(reduceItem(item))}>-</button>
                    {price}€
                    <button onClick={() => dispatch(addToCart(item))}>+</button>
                </Typography>
                <Typography variant="subtitle2" >
                    {quantity}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    commander
                </Button>
                <Button onClick={() => dispatch(removeItem(item))} size="small" color="primary">
                    X
                </Button>
            </CardActions>
        </Card>
    );
}

export default Product