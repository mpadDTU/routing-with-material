import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface MyCardProps {
  title?: string,
  description?: string
}

const MyCard = ({ title, description }: MyCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title || 'Lizard'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description || 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MyCard