import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../../features/user/userActions";
import styles from "./Cart.module.css";

const Cart = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userReducer.users);
    // const products = useSelector((state) => state.productReducer.products);

    // const increaseQuantityHandler = (index, product) => {
    //     const copyuser = { ...users, cart: [...users.cart] };

    //     copyuser.cart[index] = {
    //         ...copyuser.cart[index],
    //         quantity: copyuser.cart[index].quantity + 1,
    //     };

    //     dispatch(asyncUpdateUser(copyuser.id, copyuser));
    // };

    // const decreaseQuantityHandler = (index, product) => {
    //     const copyuser = { ...users, cart: [...users.cart] };

    //     if (users.cart[index].quantity > 1) {
    //         copyuser.cart[index] = {
    //             ...copyuser.cart[index],
    //             quantity: copyuser.cart[index].quantity - 1,
    //         };
    //     } else {
    //         copyuser.cart.splice(index, 1);
    //     }

    //     dispatch(asyncUpdateUser(copyuser.id, copyuser));
    // };

    // const CartItems = users.cart.map((c, index) => {
    //     return (
    //         <li
    //             className={styles.listItem}
    //             key={c?.product?.id}
    //         >
    //             <img
    //                 className={styles.img}
    //                 src={c?.product?.image}
    //                 alt=""
    //             />
    //             <div className={styles.itemTitle}>
    //                 {c?.product?.title}
    //             </div>
    //             <div className={styles.itemPrice}>
    //                 ₹ {c?.product?.price * c?.quantity}
    //             </div>
    //             <div className={styles.quantityControls}>
    //                 <button onClick={() => decreaseQuantityHandler(index, c)} className={styles.qtyBtn}>-</button>
    //                 <span className={styles.qtyIndicator}>{c?.quantity}</span>
    //                 <button onClick={() => increaseQuantityHandler(index, c)} className={styles.qtyBtn}>+</button>
    //             </div>
    //         </li>
    //     );
    // });

    // const totalPrice = users.cart.reduce((acc, c) => {
    //     return acc + c.product.price * c.quantity;
    // }, 0);

    return (
        <div className={styles.root}>

            <div className={styles.header}>
                <h1>Shopping Cart</h1>
            </div>

            <div className={styles.listHeader}>
                <div>Product Image</div>
                <div className={styles.itemTitle}>Product Name</div>
                <div className={styles.itemPrice}>₹ Price</div>
                <div className={styles.quantityControls}>Quantity</div>
            </div>

            {/* <ul style={{ paddingBottom: "1.5rem" }}>{CartItems}</ul> */}

            <div className={styles.checkout}>
                <span>Checkout :</span>
                {/* <span>₹ {totalPrice.toFixed(2)}</span> */}
            </div>
        </div>
    );
};

export default Cart;
