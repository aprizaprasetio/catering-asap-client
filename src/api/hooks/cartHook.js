import { useMutation } from '@tanstack/react-query'
import useCartStore from 'factory/store/useCartStore'
import { axios } from 'api/initiates/queryInitiate'
import { fetchAddCart } from 'api/connections/cartRequest'

const useAddCart = () => {
    const setQuantity = useCartStore(state => state.setQuantity)

    const { mutate } = useMutation({
        mutationFn: fetchAddCart,
        onSuccess: res => setQuantity(res.latestQuantity)
    })

    const addNewCart = foodDrinkId => {
        mutate({
            token: axios.defaults.headers.Authorization,
            food_Drink_Id: foodDrinkId,
        })
    }

    return addNewCart
}

export {
    useAddCart,
}