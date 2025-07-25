import Footer from '../../layout/Footer/Footer'
import ShopHeader from '../../ShopSections/ShopHeader/ShopHeader'
import ShopProduct from '../../ShopSections/ShopProducts/ShopProduct'
import styles from "./Shop.module.css"

const Shop = () => {
  return (
    <div className={styles["shop-container"]}>
        <ShopHeader />
        <ShopProduct />

        <Footer />

    </div>
  )
}

export default Shop