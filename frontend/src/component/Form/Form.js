import React, { useState , useEffect} from 'react'
import useStyles from "./Style"
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from 'react-redux';

import { createPost } from '../../actions/posts';
import {updatePost} from '../../actions/posts'
import { TextField, Button, Typography, Paper } from '@mui/material';

export default function Form({currentId, setCurrentId}) {

  const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
  const classes = useStyles();
  const [ postData, setpostData ] = useState({creator: "", title: "", message: "", tags: "", selectedFile: ""});

  const dispatch =useDispatch();

  useEffect(() => {
    if (post) setpostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId,postData))
      clear()
    }
    else{
      dispatch(createPost(postData))

      clear()
    }
   }
  const clear = () => {
    setCurrentId(null);
    setpostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };
  return (
    <Paper className={classes.paper}>
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
      <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setpostData({ ...postData, creator: e.target.value })} />
      <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setpostData({ ...postData, title: e.target.value })} />
      <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setpostData({ ...postData, message: e.target.value })} />
      <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setpostData({ ...postData, tags: e.target.value.split(',') })} />
      <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setpostData({ ...postData, selectedFile: base64 })} /></div>
      <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
    </form>
  </Paper>
  )
}
