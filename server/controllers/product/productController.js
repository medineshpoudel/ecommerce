const Product = require("../../model/Product");
const { uploadToCloudinary } = require("../../configs/cloudinary");
const postProductController = async (req, res, next) => {
  const {
    title,
    actualPrice,
    discountedPrice,
    productType,
    image_1,
    image_2,
    image_3,
    image_4,
  } = req.body;
  if (
    !title ||
    !actualPrice ||
    !discountedPrice ||
    !productType ||
    !image_1 ||
    !image_2 ||
    !image_3 ||
    !image_4
  ) {
    return res
      .status(400)
      .json({ error: "Please fill up all the required fields." });
  }
  try {
    let imageData = {};
    const results = await Promise.all([
      uploadToCloudinary(image_1, "products"),
      uploadToCloudinary(image_2, "products"),
      uploadToCloudinary(image_3, "products"),
    ]);
    imageData.image_1 = results[0];
    imageData.image_2 = results[1];
    imageData.image_3 = results[2];
    imageData = results;
    const newProduct = await Product.create({
      title,
      actualPrice,
      discountedPrice,
      productType,
      ...imageData,
    });
    res.status(200).json(newProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = { postProductController };
