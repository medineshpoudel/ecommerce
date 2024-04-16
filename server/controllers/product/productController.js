const Product = require("../../model/Product");
const postProductController = async (req, res) => {
  // const {
  //   title,
  //   actualPrice,
  //   discountedPrice,
  //   productType,
  //   image_1,
  //   image_2,
  //   image_3,
  // } = req.body;
  // if (
  //   !title ||
  //   !actualPrice ||
  //   !discountedPrice ||
  //   !productType ||
  //   !image_1 ||
  //   !image_2 ||
  //   !image_3
  // ) {
  //   res.status(400).json({ error: "Please fill up all the required fields." });
  // }
  // try {
  //   const newProduct = await Product.create(req.body);
  //   res.status(200).json(newProduct);
  // } catch (err) {
  //   res.status(500).json({ error: error });
  // }
  console.log(req);
};

module.exports = { postProductController };
