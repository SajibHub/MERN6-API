import createModel from "../model/model.js";

export const Create = async (req, res, next) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({
        message: "Please provide name and price.",
      });
    }
    if (name === "" || price === "") {
      return res.status(400).json({
        message: "Name and price cannot be empty.",
      });
    }

    const CreateProduct = await createModel.create({
      name: name,
      price: price,
    });

    if (!CreateProduct) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
    return res.status(201).json({
      message: "Product created successfully",
      data: CreateProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Internal Error",
    });
  }
};

export const Read = async (req, res, next) => {
    try {
        const getProduct = await createModel.find();
        if (!getProduct) {
            return res.status(400).json({
                message: "Something went wrong",
            });
        }
        return res.status(200).json({
            message: "Product fetched successfully",
            data: getProduct,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Internal Error",
        });
    }
}