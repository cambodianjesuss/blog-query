const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

/**
 * Object that recieves an event, then stores it data to send only one request
 */

/**
 * Data Shape
 * postId: {
 *  id: postId,
 *  title: 'post title'
 *  comments: [
 *    { id: commentId, content: 'comment!'}
 *  ]
 * }
 */
const posts = {}

app.get('/posts', (req, res)=>{
  res.send(posts);
})

app.post('/events', (req, res)=>{
  const { type, data } = req.body;

  if(type === "PostCreated"){
    const { id, title } = data;
    posts[id] = {id, title, comments: []};
  }

  if(type === "CommentCreated"){
    const {id, content, postId} = data;

    const post = posts[postId];
    post.comments.push({id, content});
  }
  console.log(posts);
  res.send({})
});

app.listen(4002, ()=>{
  console.log('Query Service on 4002')
});