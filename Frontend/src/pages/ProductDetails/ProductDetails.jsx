import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    asyncDeleteProduct,
    asyncUpdateProduct,
} from "../../features/Product/productActions";
import { toast } from "react-toastify";
import { asyncUpdateUser } from "../../features/user/userActions";
import styles from "./ProductDetails.module.css";
import Footer from "../../layout/Footer/Footer";
import { useState } from "react";

const ProductDetails = () => {
    const { id } = useParams();
    const [openIndex, setOpenIndex] = useState(null);

    const {
        productReducer: { products },
        userReducer: { users },
    } = useSelector((state) => state);
    const product = products?.find((product) => product.id == id);

    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
            id: product?.id,
            image: product?.image,
            title: product?.title,
            price: product?.price,
            category: product?.category,
            description: product?.description,
        },
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const UpdateProductHandler = (product) => {
        dispatch(asyncUpdateProduct(id, product));
        toast.success("Product Updated");
    };

    const DeleteHandler = () => {
        dispatch(asyncDeleteProduct(id));
        toast.warn("Product Deleted!");
        navigate("/products");
    };

    const AddToCartHandler = (product) => {
        const copyuser = { ...users, cart: [...users.cart] };
        const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id);

        if (x == -1) {
            copyuser.cart.push({ product, quantity: 1 });
        } else {
            copyuser.cart[x] = {
                product,
                quantity: copyuser.cart[x].quantity + 1,
            };
        }
        dispatch(asyncUpdateUser(copyuser.id, copyuser));
    };

    const toggleIngredient = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return product ? (
        <div className={styles.wrapper}>

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
                </div>
            </div>

            <div className={styles.container}>
                <h1 className={styles.title}>{product?.name} Ingredients</h1>
                <div className={styles.ingredientList}>
                    {product?.ingredients.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.ingredientItem} ${openIndex === index ? styles.open : ""
                                }`}
                            onClick={() => toggleIngredient(index)}
                        >
                            <div className={styles.ingredientHeader}>{item.name}</div>
                            {openIndex === index && (
                                <div className={styles.description}>{item.description}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.productBanner} key={product.id}>
                <img src={product.bannerImage} alt="" />
            </div>

            <Footer />
        </div>
    ) : (
        "Loading..."
    );
};

export default ProductDetails;
