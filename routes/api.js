const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');

//Routes
router.get('/', (req, res) => {
    // const data = {
    //     username: 'lerik',
    //     age:29
    // };

    BlogPost.find({ })
    .then((data) => {
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error: ', daerrorta);
    })
    // res.json(data);
});

router.get('/name', (req, res) => {
    const data = {
        username: 'lerik21',
        age:30
    };
    res.json(data);
});

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newBlogPost = new BlogPost(data);

    // .save

    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({msg: 'Sorry internal server errors'});
        } else {
            //BlogPost
            res.json({
                msg: 'Your data has been saved!!!'
            });
        }
    });
    
});



module.exports = router;