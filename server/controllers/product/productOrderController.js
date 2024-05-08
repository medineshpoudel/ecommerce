const ProductOrder = require("../../model/ProductOrder");

const postProductOrderController = async (req, res, next) => {
  const user = req.user;
  const { title, _id: productId, createdBy } = req.body;
  try {
    const resposne = await ProductOrder.create({
      title,
      productId,
      orderedById: user._id,
      orderedByName: user.email,
      productCreatedBy: createdBy,
    });
    res.status(204);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateProductOrderController = async (req, res, next) => {
  const { _id } = req.body;
  try {
    const updatedProductOrder = await ProductOrder.findOneAndUpdate(
      { _id },
      { $set: req.body },
      { new: true } // This option returns the updated document
    );
    res.status(200).json(updatedProductOrder);
  } catch (error) {
    next(error);
  }
};

const deleteProductOrderController = async (req, res) => {
  const { _id } = req.body;

  try {
    const deleteProductOrder = await ProductOrder.deleteOne({ _id });
    res.status(200).json({ _id });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getProductOrdersController = async (req, res, next) => {
  try {
    const product = await ProductOrder.find({ productCreatedBy: req.user.id });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postProductOrderController,
  getProductOrdersController,
  updateProductOrderController,
  deleteProductOrderController,
};
