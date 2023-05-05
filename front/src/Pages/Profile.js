import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Navbar from "../Components/NavBar";






const CardData = ({card}) => {
  return (
    <div> 
      <Navbar/>
    <div >

      

        <Card sx={{ maxWidth: 345 }}>
          
           <CardActionArea  >
       
             <CardMedia   component="img" height="140" image={card.Image.imgUrl} alt={card.imageAlt} />
             <CardContent>
               <Typography  gutterBottom variant="h5" component="div">
                 {card.carburant}
               </Typography>
               <Typography  variant="body2" color="text.secondary">
                 {card.carName}
               </Typography>
               <Typography  variant="body2" color="text.secondary">
                 {card.couleur}
               </Typography>
               <Typography  variant="body2" color="text.secondary">
                 {card.model}
               </Typography>
               <Typography  variant="body2" color="text.secondary">
                 {card.etat}
               </Typography>
               <Typography  variant="body2" color="text.secondary">
                 {card.kilomotrage}
               </Typography>
               <Typography  variant="body2" color="text.secondary">
                 {card.phone}
               </Typography>
               <Typography  variant="body2" color="text.secondary">
                 {card.cylindre}
               </Typography>
             </CardContent>
           </CardActionArea>
         </Card>
         
      </div>
      </div>
    
  );
};

export default CardData;