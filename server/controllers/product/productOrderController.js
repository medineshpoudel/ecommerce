const ProductOrder = require("../../model/ProductOrder");
const { sendEmail } = require("../../utilities/sendEmail");
const User = require("../../model/User");
const Product = require("../../model/Product");

const postProductOrderController = async (req, res, next) => {
  const user = req.user;
  const { title, _id: productId, createdBy } = req.body;
  try {
    await ProductOrder.create({
      title,
      productId,
      orderedById: user._id,
      orderedByName: user.email,
      productCreatedBy: createdBy,
      quantity: req.body.quantity,
      totalAmount: req.body.totalAmount,
    });
    const product = await Product.findById(productId);
    await ProductOrder.findOneAndUpdate(
      { _id },
      { $set: { stock: product.stock - req.body.quantity } },
      { new: true }
    );
    res.status(204);
  } catch (error) {
    next(error);
  }
};

const updateProductOrderController = async (req, res, next) => {
  const { _id, orderedById } = req.body;

  try {
    const updatedProductOrder = await ProductOrder.findOneAndUpdate(
      { _id },
      { $set: req.body },
      { new: true }
    );

    if (req.body.status === "Proceed To Delivery") {
      const { email, username } = await User.findById(orderedById);
      await sendEmail({
        from_name: "Godam",
        to_name: username,
        to_email: email,
        message: `Your Product Request Has Been Accepted And Forwared To Delivery. <br>
          Product Name: ${updatedProductOrder.title}`,
      });
    }

    if (req.body.status === "Reject") {
      const { email, username } = await User.findById(orderedById);
      await sendEmail({
        from_name: "Godam",
        to_name: username,
        to_email: email,
        message: `Your Product Request Has Been Rejected`,
      });
    }

    res.status(200).json(updatedProductOrder);
  } catch (error) {
    console.log(error);
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

const getProductVendor = async (req, res, next) => {
  const { id } = req.params;
  try {
    const vendor = await User.findById(
      id,
      "-_id -createdAt -updatedAt -status -__v"
    );
    res.status(200).json({
      name: vendor.username,
      phone: vendor.phone_no,
      location: "New Road",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postProductOrderController,
  getProductOrdersController,
  updateProductOrderController,
  deleteProductOrderController,
  getProductVendor,
};
