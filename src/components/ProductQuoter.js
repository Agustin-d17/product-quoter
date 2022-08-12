import styles from "./ProductQuoter.module.css";
import ItemContainer from "./ItemContainer.js";
import PriceContainer from "./PriceContainer.js";

export default function ProductQuoter() {
    return <div className={styles.ProductQuoter}>
        <ItemContainer />
        <PriceContainer />
    </div>
}
