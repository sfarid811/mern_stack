const Post = require('../models/post');
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

const createPost = async (req, res) => {
	try {
		const newPost = new Post ({
			title: req.body.title,
			description: req.body.description,
			image: req.file.originalname
		})
		newPost.save();
		res.status(200).json((newPost))
		
	} catch (error) {
		res.status(500).json({
			error : "Post cannot be saved"
		})
	}
}

const getAllPosts = async (req, res) => {
	try {
		const posts = await Post.find({})
	

		res.json({ posts });
	} catch (err) {
		console.log(err, 'productController.readAll error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
}

module.exports = {
	getAllPosts,
  createPost
  };
  