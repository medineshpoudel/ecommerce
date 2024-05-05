const Product = require("../../model/Product");

const getProductsOfVedor = async (req, res, next) => {
  try {
    const product = await Product.aggregate([
      {
        $match: { createdBy: req.user._id.toString() },
      },
    ]);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const getProductController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const postProductController = async (req, res, next) => {
  const { title, actualPrice, discountedPrice, productType } = req.body;
  const user = req.user;
  if (!title || !actualPrice || !discountedPrice || !productType) {
    return res
      .status(400)
      .json({ error: "Please fill up all the required fields." });
  }
  try {
    const newProduct = await Product.create({
      title,
      actualPrice,
      discountedPrice,
      productType,
      createdBy: user?._id,
    });
    res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateProductController = async (req, res, next) => {
  const { title, actualPrice, discountedPrice, productType, _id } = req.body;
  if (!title || !actualPrice || !discountedPrice || !productType) {
    return res
      .status(400)
      .json({ error: "Please fill up all the required fields." });
  }
  const dataToBeUpdated = req.body;

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id },
      { $set: dataToBeUpdated },
      { new: true } // This option returns the updated document
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProductController = async (req, res) => {
  const { _id } = req.body;
  console.log(req.body);

  try {
    const deleteProduct = await Product.deleteOne({ _id });
    res.status(200).json({ _id });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  postProductController,
  updateProductController,
  deleteProductController,
  getProductsOfVedor,
  getAllProducts,
  getProductController,
};
