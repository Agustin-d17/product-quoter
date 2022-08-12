import { useState, createContext } from "react";


export const ItemContext = createContext([])

const ItemContextProvider = ({children}) => {
    const [itemList, setItemList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    // const [profit, setProfit] = useState(0)


    const addItem = (item) => {
        if (item.name.trim() !== "" && parseFloat(item.quantity) > 0 && parseFloat(item.price) > 0){
            updateList([...itemList, item])
        }
    }

    const updateList = (array) => {
        setItemList(array);
        setTotalPrice(parseInt(array.map(el => el.quantity*el.price).reduce((total, item) => total+item, 0)));
    }

    const deleteItem = (item) => {
        const newList = [...itemList]
        let index = newList.findIndex(el => el.name === item.name)

        newList.splice(index, 1)

        updateList([...newList])
    }

    const cleanList = () => {
        setItemList([])
        setTotalPrice(0)
    }

    // const profitExpected = (profit) => {
    //     setProfit(profit)
    // }

    return (
        <ItemContext.Provider value={{itemList, totalPrice, addItem, deleteItem, cleanList}}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemContextProvider;