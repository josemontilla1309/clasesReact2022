import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({id, name, thumbnail, brand, size, price }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={thumbnail}
        alt="alt"
      />
      <CardContent key={id}>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {size}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}