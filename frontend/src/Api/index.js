import axios from "axios"

const url = 'https://my-dream-diary.herokuapp.com/posts';

export const fetchposts =()=>axios.get(url);
export const createPost = (newPost)=>axios.post(url, newPost);
export const updatePost = (id, updatedPost)=>axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id)=>axios.delete(`${url}/${id}`)
export const likePost = (id)=>axios.patch(`${url}/${id}/likePost`)