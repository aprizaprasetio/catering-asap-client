import { axios } from 'api/initiates/queryInitiate'

const fetchCollectCart = async ({ pageParam = 1 }) => {
    const cartCollection = await axios.get('Carts/Token', {
        params: {
            PageNumber: pageParam,
            PageSize: 10,
        },
    })
    return cartCollection.data.data
}

const fetchQuantityCart = async () => {
    const currentQuantity = await axios.get('Carts/CurrentQuantity')
    return currentQuantity.data.data
}

const fetchAddCart = async foodDrink => {
    const cartInfo = await axios.post('Carts', foodDrink)
    return cartInfo.data
}

const fetchCheckboxTrigger = async config => {
    await axios.put('Carts/CheckboxTrigger', config)
}

const fetchCheckboxAll = async config => {
    await axios.put('Carts/CheckboxTrigger/All', config)
}

const fetchOneQuantity = async config => {
    await axios.put('Carts/OneQuantity', config)
}

const fetchRemoveSingle = async config => {
    await axios.delete('Carts/Remove/Single', {
        data: config,
    })
}

const fetchRemoveMultiple = async config => {
    await axios.delete('Carts/Remove/Multiple', {
        data: config,
    })
}

export {
    fetchCollectCart,
    fetchQuantityCart,
    fetchAddCart,
    fetchCheckboxTrigger,
    fetchCheckboxAll,
    fetchOneQuantity,
    fetchRemoveSingle,
    fetchRemoveMultiple,
}