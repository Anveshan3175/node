const express = require('express')
const router = express.Router();
const Post = require('../models/Post')

// Default GET route of posts. 
// Gets all posts
router.get('/',
    async (req, res) => {
        //res.send('We are on posts')
        try {
            const posts = await Post.find();
            res.json(posts);
        }
        catch (err) {
            res.json({ message: err })
        }
    }
);

//Submits a post
router.post('/',
    async (req, res) => {
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        });
        try {
            const savedPost = await post.save();
            res.json(savedPost);
        } catch (err) {
            res.json({ message: err });
        }
    }


)

// GETs a specific post
router.get('/:postId',
    async (req, res) => {
        try {
            console.log(req.params.postId)
            const post = await Post.findById(req.params.postId)
            res.json(post)
        }
        catch (err) {
            res.json({ message: err })
        }
    }
);


// DELETE  a specific post
// we are using aysn since it is returing promise
router.delete('/:postId',
    async (req, res) => {
        try {
            const removedPost = await Post.remove({ _id: req.params.postId })
            res.json(removedPost)
        }
        catch (err) {
            res.json({ message: err })
        }
    }
)

// UPDATE a specific post
router.patch('/:postId',
    async (req, res) => {
        try {
            const updatedPost = await Post.updateOne({ _id: req.params.postId }
                , { $set: { title: req.body.title } });
            res.json(updatedPost);
        } catch (err) {
            res.json({ essage: err })
        }
    }


)



router.get('/specific', (req, res) => {
    res.send('Specific posts')
})

/*
router.post('/',(req,res) => {
  const post = new Post({
      title: req.body.title,
      description: req.body.description
  });

  // save to DB
  post.save() 
  .then(data => {
      res.json(data)
  })
  .catch(err => {
      res.json({
          message: err
      })
  })
});

*/
module.exports = router;