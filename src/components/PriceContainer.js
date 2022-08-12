import styles from './PriceContainer.module.css'
import { useState, useContext } from "react"
import { ItemContext } from "../context/ItemContext";

export default function PriceContainer() {
    const [profit, setProfit] = useState(0)
    const [profitPrice, setProfitPrice] = useState(0)
    const {totalPrice} = useContext(ItemContext)
    
    const handleChange = (e) => {
        setProfit(e.target.value)
        setProfitPrice(totalPrice)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let price = totalPrice
        price += (totalPrice * profit) / 100
        setProfitPrice(price)
    }

    


    return (
        <div className={styles.PriceContainer}>
            <div className={styles.profitFormContainer}>
                <form className={styles.profitForm}>
                    <input
                        className={styles.profitInput}
                        type="number"
                        name="profit"
                        onChange={handleChange}
                        placeholder="Porcentaje de ganancia"
                    />
                    <button onClick={handleSubmit} className={styles.btn}>Calculate</button>
                </form>
            </div>

            <div className={styles.finalPriceContainer}>
                <div className={styles.titlePrice}>
                    <span>Precio del producto:</span>
                </div>
                <div className={styles.price}>
                    {profit > 0 ? <span>${profitPrice}</span> : <span>${totalPrice}</span>}
                </div>
            </div>
        </div>
    )
}