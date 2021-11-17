const express = require('express');
const Post = require('../models/post');


const router = express.Router();

const {createPost, getAllPosts} = require('../controllers/postController');
const multer = require('multer');

const storage = multer.diskStorage({
		destination: function (req, file, callback) {
			callback(null, '../client/public/images');
		},
		filename: function (req, file, callback) {
			callback(null, file.originalname);
		},
	});
	
	const upload = multer({ storage });

router.post('/add', upload.single('photo'), (req, res) => {
    try {
		const newPost = new Post ({
			title: req.body.title,
			description: req.body.description,
			photo: req.file.originalname
		})
		newPost.save();
		res.status(200).json((newPost))
		
	} catch (error) {
		res.status(500).json({
			error : "Post cannot be saved"
		})
	}
})


router.get('/all', getAllPosts)
module.exports = router;
