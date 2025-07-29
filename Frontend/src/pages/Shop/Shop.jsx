import Footer from '../../layout/Footer/Footer'
import ShopHeader from '../../ShopSections/ShopHeader/ShopHeader'
import ShopProduct from '../../ShopSections/ShopProducts/ShopProduct'
import styles from "./Shop.module.css"
import { Helmet } from 'react-helmet'

const Shop = () => {
  return (
    <div className={styles["shop-container"]}>
      <Helmet>
        <title>FOKUS || Shop</title>
      </Helmet>
      <ShopHeader />
      <ShopProduct />

      <Footer />

    </div>
  )
}

export default Shop