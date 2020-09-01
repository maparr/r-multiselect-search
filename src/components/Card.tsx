import React, { FC } from 'react'
import {
    Card as UICard,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    makeStyles
} from "@material-ui/core";
import {Product} from "../store";

interface CardProps extends Product{

}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: theme.spacing(2,2,0,0),

    },
}));


export const Card: FC<CardProps> = ({ title, image, price }) => {
    const classes = useStyles();

    return (
        <UICard className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={title}
                    height="140"
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    {title}
                </Button>
            </CardActions>
        </UICard>
    );
}
