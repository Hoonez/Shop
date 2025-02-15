const router = require("express").Router();
const ProductsControllers = require("../app/Controllers/ProductsCotrollers");
const upload = require("../middleware/uploadImage");
router.post(
  "/uploadProducts",
  upload.single("Image"),
  ProductsControllers.updataProducts
);
router.get("/allproducts", ProductsControllers.allProducts);
router.delete("/delete/:id", ProductsControllers.delete);
router.put("/update/:id", upload.single("Image"), ProductsControllers.update);
router.post("/dataupdate/:id", ProductsControllers.dataupdate);
router.post("/search/:name", ProductsControllers.findProducts);
router.post("/products/category/:name", ProductsControllers.findCategory);

module.exports = router;
