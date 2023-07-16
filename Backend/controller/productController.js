const Product = require('../model/productSchema');
const Category = require('../model/categorySchema');


exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(201).json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createProduct = async (req, res) => {
  const { productName,category,price,manufacturerName,manufacturerContact,qty,productImage,descOne,descTwo,descThree} = req.body;
  console.log(req.body);
  const d1=descOne.toLowerCase();
  const d2=descTwo.toLowerCase();
  const d3=descThree.toLowerCase();
  let categoryObj=await Category.find({categoryName:category.toLowerCase()})
  console.log(categoryObj)
  try {
    if(categoryObj.length!==0){
  product = new Product({
        productName,categoryId:categoryObj[0].id,categoryName:categoryObj[0].categoryName.toLowerCase(),price,manufacturerName,manufacturerContact,qty,productImage,descOne:d1,descTwo:d2,descThree:d3
    })

    await product.save();
    res.status(201).json(product);}
    else{
        res.status(501).json('Server Error');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createCategory = async (req, res) => {
    const {categoryName,categoryImage} = req.body;
    category=categoryName.toLowerCase()
    try {
    category = new Category({
          categoryName:category,categoryImage
      });
      await category.save();
      res.status(201).json(category);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };


exports.filterProduct = async (req, res) => {
    const category = req.params.category.toLowerCase();
    const filteredProduct = await Product.find({categoryName:category});
    try {
    res.status(201).json(filteredProduct)
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

  exports.filterDesc = async (req, res) => {
    const desc = req.params.desc.toLowerCase();
    const filteredProduct = await Product.find({ $or: [
      { descOne: { $regex: desc, $options: 'i' } },
      { descTwo: { $regex: desc, $options: 'i' } },
      { descThree: { $regex: desc, $options: 'i' } }
    ]});
    console.log(filteredProduct)
    try {
    res.status(201).json(filteredProduct)
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

  exports.deleteProduct= async(req,res)=>{
    
      const deleteProduct=   await Product.deleteOne({ _id: req.params.id});
      console.log(deleteProduct);
      try{
        res.status(201).json("Product Deleted")
      }
      catch(e){
        console.error(e.message);
        res.status(500).send('Server Error');

      }
  }

  exports.updateProduct = async (req, res) => {
    
    const {qty,productName,price}=req.body;
    const updateProduct=await Product.findByIdAndUpdate(req.params.id,req.body,{
      new: true,
    });
      try{
        res.status(201).json(updateProduct)
      }
    catch(e){
      console.log(e.message);
      res.status(500).send('Server Error');

    }
   
  };



