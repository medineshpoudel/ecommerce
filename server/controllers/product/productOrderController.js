const ProductOrder = require("../../model/ProductOrder");

const postProductOrderController = async (req, res, next) => {
  const user = req.user;
  const { title, _id: productId, createdBy } = req.body;
  console.log(user);
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

const getProductOrdersController = async (req, res, next) => {
  try {
    const product = await ProductOrder.find({ productCreatedBy: req.user.id });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = { postProductOrderController, getProductOrdersController };
