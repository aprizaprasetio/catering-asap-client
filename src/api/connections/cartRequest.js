import { axios, client } from 'api/initiates/queryInitiate'
import { cartPath } from 'api/initiates/pathInitiate'

const fetchAddCart = async foodDrink => {
    const cartInfo = await axios.post(cartPath.root, foodDrink)
    console.info(cartInfo)
    return cartInfo.data
}

export {
    fetchAddCart,
}