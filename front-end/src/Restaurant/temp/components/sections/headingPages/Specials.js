
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function Specials() {

    const [res, setRes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/Restaurant").then((response) => {
            var data = response.data.Restaurant;
            setRes(data);
        });
    }, [])

    return (
        <>

            <h1 style={{ margin: "70px 0px 0px 90px" }}>Restaurants</h1>
            <div style={{ display: "flex", margin: "0px 60px 60px 60px" }}>

                {res.map((e) => (
                    <Card sx={{ width: 345, margin: "20px   " }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={e.restaurant_photo}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {e.restaurant_name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {e.restaurant_address}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {e.restaurant_contact}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {e.restaurant_email}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="">
                            <Button size="small">Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </div>

        </>
    );
}