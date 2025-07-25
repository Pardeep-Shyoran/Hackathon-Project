import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../../features/user/userActions";
import { useEffect, useState } from "react";
import axios from "../../api/axiosconfig";
import styles from "./ShopProduct.module.css";
import { toast } from "react-toastify";

const Products = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const [products, setProducts] = useState([]);


  useEffect(() => {

    (async () => {
      try {
        const { data } = await axios.get("/products");
        console.log(data);
        setProducts(data); // <-- don't append
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const AddToCartHandler = (product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    const idx = copyuser.cart.findIndex((c) => c?.product?.id === product.id);

    if (idx === -1) {
      copyuser.cart.push({ product, quantity: 1 });
    } else {
      copyuser.cart[idx] = {
        product,
        quantity: copyuser.cart[idx].quantity + 1,
      };
    }

    dispatch(asyncUpdateUser(copyuser.id, copyuser));
    toast.success("Product added to Cart!")
  };



  return (
    <div>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div className={`${styles.productCard} ${styles.productDetailsLink}`} key={product.id}>
            <Link to={`/shop/${product.id}`}>
              <img className={styles.productImage} src={product.image} alt={product.title} />
            </Link>
            <div className={styles.productDetails}>

              <h1 className={styles.productTitle}>{product.title}</h1>
              <h1 className={styles.productDesc}>{product.description}</h1>
              <div className={styles.productBottomRow}>
                <p className={styles.productPrice}>₹ {product.price}</p>
                <button
                  className={styles.btnAddToCart}
                  onClick={() => AddToCartHandler(product)}
                >
                  Add to Cart
                </button>
              </div>
              <Link to={`/shop/${product.id}`} className={` ${styles.moreDetails}`}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
