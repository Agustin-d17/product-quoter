import styles from "./ItemContainer.module.css";
import Item from "./Item.js";
import { useState, useContext } from "react"
import { ItemContext } from "../context/ItemContext";

export default function ItemContainer() {
    // const [items, setItems] = useState([])
    const [item, setItem] = useState({})

    const { itemList, addItem, cleanList } = useContext(ItemContext)

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value,
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault()

        addItem(item)

        setItem({
            name: "",
            quantity: "",
            price: "",
        })
    }

      
    return <div className={styles.ItemContainer}>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={item.name}
                            onChange={(e) => handleChange(e)}
                            placeholder="Nombre"
                        />
                    <input
                            type="number"
                            name="quantity"
                            value={item.quantity}
                            onChange={(e) => handleChange(e)}
                            placeholder="Cantidad"
                        />
                    <input
                            type="number"
                            name="price"
                            value={item.price}
                            onChange={(e) => handleChange(e)}
                            placeholder="Precio por unidad"
                        />
                    <button onClick={handleSubmit} className={styles.btn}><span class="material-icons">add</span></button>
                    </form>
                </div>

                <div>
                    <div className={styles.Headers}>
                        <span className={styles.DetailHeader}>Nombre</span>
                        <span className={styles.DetailHeader}>Precio por u.</span>
                        <span className={styles.DetailHeader}>Cantidad</span>
                        <span className={styles.DetailHeader}>Precio total</span>
                    </div>
                    <div>
                        {itemList.map((item) => <Item item={item} />)}
                    </div>
                </div>

                <div className={styles.CleanContainer}>
                    <button onClick={cleanList} className={styles.btn}>Clean</button>
                </div>
        </div>
}