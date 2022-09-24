const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling the GET request to /products",
  });
});
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling the POST request to /products",
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "12") {
    res.status(200).json({
      message: "12 id found",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "not found 12",
    });
  }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message:"update product"
    })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message:"Delete product"
    })
})

module.exports = router;
