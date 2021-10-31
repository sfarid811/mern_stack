const Product = require("../models/product");
const formidable = require("formidable");
const fs = require("fs");



const createProduct = (req, res) => {
    let form = new formidable.IncomingForm({ keepExtensions: true });
    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(400).send({ error: "Image upload failed" });
      try {
        let product = new Product(fields);
        if (files.photo) {
          if (files.photo.size > 1000000)
            return res
              .status(400)
              .send({ error: "Upload failed, Max Size <= 1MB" });
  
          product.photo.data = fs.readFileSync(files.photo.path);
          product.photo.contentType = files.photo.type;
        }
        await product.save();
        // product.photo = undefined;
        return res.status(200).send(product);
      } catch (error) {
       
      }
    });
  };


  const getAllProducts = async (req, res) => {

    try {
      const Products = await Product.find();
      res.status(200).json(Products);
    }
    catch (error) {
      res.status(400).json({ 
        message : 'Something went wrong !'
      });
    }
  
  }

  const productById =  (req, res, next, id) => {

    Product.findById(id).exec((err, product) => {

      if(err || !product) {
          return res.status(404).json({
              error: 'Product not found !'
          })
      }

      req.product = product;
      next()

  })

   
  }

  const showProduct =  async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      const { id } = req.params;
      res.status(404).json({
        message: `${id} don't exist`,
      });
    }
  }



  const photoProduct =  (req, res) => {

    const { data, contentType } = req.product.photo;

         

    if(data) {

        res.set('Content-Type', contentType)
      
        return res.send(data)

    }

  }



  module.exports = {
    createProduct,
    getAllProducts,
    photoProduct,
    productById,
    showProduct
  };
  