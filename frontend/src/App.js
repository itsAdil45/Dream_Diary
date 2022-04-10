import React,{useEffect, useState} from 'react'
import { Grid, Container, AppBar, Typography, Grow } from "@mui/material"
import memories from "./images/memories.png"
import Posts from "./component/Posts/Posts"
import Form from './component/Form/Form'
import useStyles from "./Style"
import {getPosts} from "./actions/posts"
import {useDispatch} from "react-redux"
export default function App() {
  const classes =useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(getPosts())},[dispatch]);
  const [currentId , setCurrentId]= useState(null);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading}  variant='h2' align='center'>Memories</Typography>
        <img className={classes.image}  src={memories} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
      <Container>
          <Grid  container justifyContent="space-between" alignItems="stretch" spacing={3}  >
          
                    
          <Grid item xs={12} sm={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>

          <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId}/>
          </Grid>
          </Grid>
      </Container>
      </Grow>
    </Container>
  )}
