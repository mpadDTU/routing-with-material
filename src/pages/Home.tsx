import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import MyCard from "../components/MyCard";
import APIService from '../services/API';
const Home = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    APIService
      .getAll()
      .then(products => {
        setProducts(products)
      })
  }, [])

  return (
    <div style={{marginBottom: 60 }}>
      <Container>
     
      <div>Home</div>
    
      <Grid container spacing={2}>
      {
      products.map(card => {
        return <Grid item xs={6} md={4}>
          <MyCard></MyCard>
        </Grid>
      }) 
      
      }
        
      </Grid>
      </Container>
    </div>
  )
}

export default Home;