import React from "react";
import StarRating from "./StarRating";

// Array of products with details such as id, name, price, image URL, rating, and sale status
const products = [
  {
    id: 1,
    name: "Elegant White Blouse",
    price: "25.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230705/Ir8R/64a49c5ca9b42d15c935d8bf/-473Wx593H-466331155-white-MODEL.jpg",
    rating: 4,
    isSale: false,
  },
  {
    id: 2,
    name: "Summer Floral Top",
    originalPrice: "35.00",
    price: "28.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230705/cUEM/64a5114ceebac147fc4e16a1/-473Wx593H-442294536-blue-MODEL.jpg",
    rating: 4,
    isSale: true,
  },
  {
    id: 3,
    name: "Trendy Denim Jacket",
    originalPrice: "50.00",
    price: "35.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240319/R6Hz/65f980db05ac7d77bbc7ed1b/-473Wx593H-442031500-denimblue-MODEL.jpg",
    rating: 5,
    isSale: true,
  },
  {
    id: 4,
    name: "Classic Button-Down Shirt",
    price: "35.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230915/vW0k/65046b78ddf7791519dc38e3/-473Wx593H-469556867-brown-MODEL.jpg",
    rating: 5,
    isSale: false,
  },
  {
    id: 5,
    name: "Stylish Plaid Shirt",
    originalPrice: "30.00",
    price: "20.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230912/HugY/64ff9689ddf7791519ce3ddf/-473Wx593H-466562763-blue-MODEL.jpg",
    rating: 3,
    isSale: true,
  },
  {
    id: 6,
    name: "Linen Casual Blouse",
    originalPrice: "39.00",
    price: "32.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20231006/8JGM/651f117fafa4cf41f52aecaa/-473Wx593H-466676175-fuchsia-MODEL.jpg",
    rating: 5,
    isSale: true,
  },
  {
    id: 7,
    name: "Chambray Tunic",
    originalPrice: "35.00",
    price: "27.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220730/giJe/62e4a830aeb26921afaf20b8/-473Wx593H-462982391-blue-MODEL.jpg",
    rating: 4,
    isSale: true,
  },
  {
    id: 8,
    name: "Striped Formal Shirt",
    price: "40.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230419/9rjx/643f8608711cf97ba733671e/-473Wx593H-466055092-blue-MODEL.jpg",
    rating: 5,
    isSale: false,
  },
  {
    id: 9,
    name: "Slim Fit Top",
    price: "22.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240207/iPhN/65c337f416fd2c6e6ae3d081/-473Wx593H-463984451-yellow-MODEL.jpg",
    rating: 4,
    isSale: false,
  },
  {
    id: 10,
    name: "Casual Checkered Blouse",
    originalPrice: "30.00",
    price: "25.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240303/6OqY/65e4a76f16fd2c6e6a381419/-473Wx593H-467131183-maroon-MODEL3.jpg",
    rating: 5,
    isSale: true,
  },
  {
    id: 11,
    name: "Elegant Black Shirt",
    price: "45.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230509/RfsE/645a8c9dd55b7d0c63a0c48a/-473Wx593H-469484359-black-MODEL3.jpg",
    rating: 5,
    isSale: false,
  },
  {
    id: 12,
    name: "Floral Short Sleeve Blouse",
    price: "28.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230825/dEAb/64e7d5a6afa4cf41f5822704/-473Wx593H-461602810-black-MODEL.jpg",
    rating: 4,
    isSale: false,
  },
];

// Component to display the list of products
const ProductList = ({ addToCart, removeFromCart, isInCart }) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
          {products.map((product) => (
            <div className="col mb-5" key={product.id}>
              <div className="card h-100">
                {product.isSale && (
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                )}
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.name}
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.name}</h5>
                    <StarRating rating={product.rating} />
                    {product.isSale ? (
                      <>
                        <span className="text-muted text-decoration-line-through">
                          ${product.originalPrice}
                        </span>
                        ${product.price}
                      </>
                    ) : (
                      <>${product.price}</>
                    )}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {isInCart(product) ? (
                      <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart(product)}
                      >
                        Remove from cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => addToCart(product)}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
