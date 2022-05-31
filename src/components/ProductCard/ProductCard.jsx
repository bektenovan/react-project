import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const ProductCard = ({ item }) => {
    return (
        <Card sx={{ maxWidth: 300, margin: "20px" }}>
            <CardMedia
                component="img"
                height="140"
                image="https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804__340.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;