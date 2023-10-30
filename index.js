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
 * title: 'post title'
 * comments: [
 *    { id: commentId, content: 'comment!'}
 *  ]
 * }
 */
const posts = {
  'jfdie344test': {
    id: 'jfdie344test',
    title: 'This is a test of the query service response',
    comments: [
      {
        id: 'commentIdtest123',
        content: 'This is a test comment for query'
      },
      {
        id: 'commentIdtest456',
        content: 'Another test comment for query'
      }
    ]
  }
}

app.get('/posts', (req, res)=>{
  res.send(posts);
})

app.post('/events', (req, res)=>{
  console.log("Event Type Recieved in Query:", req.body.type);
  res.send({Status: "OK"});
});

app.listen(4002, ()=>{
  console.log('Query Service on 4002')
});