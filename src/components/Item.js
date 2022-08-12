import styles from './Item.module.css'
import { useContext } from "react"
import { ItemContext } from "../context/ItemContext"

export default function Item({item}) {
    const { deleteItem } = useContext(ItemContext)

    return (
        <div className={styles.DetailsContainer}>
            <span className={styles.detail}>{item.name}</span>
            <span className={styles.detail}>${item.price}</span>
            <span className={styles.detail}>{item.quantity}</span>
            <span className={styles.detail}>${item.quantity * item.price}</span>
            <button onClick={deleteItem} className={styles.btn}><span class="material-icons">delete</span></button>
        </div>
    );
}