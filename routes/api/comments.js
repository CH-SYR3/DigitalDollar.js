const express = require('express');
const router = express.Router();

//Comment Model
const Comment = require('../../models/comment');

//@route  GET api/comments
//@desc   Get all comments
//@acess  Public
router.get('/', (req, res) => {
    //so what we wanna do is get all our items from our database
    Comment.find()
        .sort({ date: -1})
        .then(comments => res.json(comments));
});



//@route  POST api/comments
//@desc   Create all comments
//@acess  Public
router.post('/', (req, res) => {
    //so we want to construct a new objext to insert into the database
    const newComment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    });
    //saves comment 
    newComment.save().then(comment => res.json(comment));
});




//@route  DELETE api/comments
//@desc   Delete all comments
//@acess  Public
router.delete('/:id', (req, res) => {
    Comment.findById(req.params.id)
    .then(comment => comment.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({sucess: false })
    );
});


module.exports = router;
