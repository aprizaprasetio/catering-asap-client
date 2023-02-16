import { useEffect } from 'react'
import { useMutation, useInfiniteQuery } from '@tanstack/react-query'
import useCartStore from 'factory/store/useCartStore'
import { axios, client } from 'api/initiates/queryInitiate'
import { fetchCollectCart, fetchQuantityCart, fetchAddCart, fetchCheckboxTrigger, fetchCheckboxAll, fetchOneQuantity, fetchRemoveSingle, fetchRemoveMultiple }
    from 'api/connections/cartRequest'

const useCartCollection = () => {
    const { setCart, resetCart } = useCartStore()

    const cartCollectionQuery = useInfiniteQuery({
        queryKey: ['cartCollections'],
        queryFn: fetchCollectCart,
        onSuccess: ({ pages }) => setCart(pages),
        getNextPageParam: (current, pages) => {
            // Fetching will stop if the last data founded less than 10
            // Because each fetch limited to 10, ofcourse that case must be stop
            const isLimit = pages.find(current => current.length !== 10)
            if (isLimit) return
            return pages.length + 1
        },
        initialData: null,
        refetchOnMount: true,
    })

    useEffect(() => {
        return () => {
            resetCart()
            client.setQueryData(['cartCollections'], null)
        }
    }, [])

    return cartCollectionQuery
}

const useCurrentCartQuantity = () => {
    const quantity = useCartStore(state => state.quantity)
    const setQuantity = useCartStore(state => state.setQuantity)

    const { mutate } = useMutation({
        mutationFn: fetchQuantityCart,
        onSuccess: res => setQuantity(res),
    })

    useEffect(() => {
        mutate()
        return () => setQuantity(null)
    }, [])

    return quantity
}

const useAddCart = () => {
    const setQuantity = useCartStore(state => state.setQuantity)

    const { mutate } = useMutation({
        mutationFn: fetchAddCart,
        onSuccess: res => setQuantity(res.currentQuantity),
    })

    const addNewCart = foodDrinkId => {
        mutate({
            token: axios.defaults.headers.Authorization,
            food_Drink_Id: foodDrinkId,
        })
    }

    return addNewCart
}

const useCheckboxCart = (cartId, stateSync) => {
    const { mutate } = useMutation({
        mutationFn: fetchCheckboxTrigger,
        onSuccess: () => stateSync(cartId),
    })

    return () => {
        mutate({
            token: axios.defaults.headers.Authorization,
            cart_Id: cartId,
        })
    }
}

const useCheckboxAllCart = stateSync => {
    const { mutate } = useMutation({
        mutationFn: fetchCheckboxAll,
        onSuccess: stateSync,
    })

    return () => {
        mutate({
            token: axios.defaults.headers.Authorization,
        })
    }
}

const useOneQuantityCart = (cartId, stateSync) => {
    const { mutate } = useMutation({
        mutationFn: fetchOneQuantity,
    })

    const increamentCart = () => {
        mutate({
            token: axios.defaults.headers.Authorization,
            id: cartId,
            is_Increament: true,
        }, {
            onSuccess: stateSync.add(cartId)
        })
    }

    const decreamentCart = () => {
        mutate({
            token: axios.defaults.headers.Authorization,
            id: cartId,
            is_Increament: false,
        }, {
            onSuccess: stateSync.remove(cartId),
        })
    }

    return [
        increamentCart,
        decreamentCart,
    ]
}

const useRemoveCartSingle = (cartId, stateSync) => {
    const { mutate } = useMutation({
        mutationFn: fetchRemoveSingle,
        onSuccess: () => stateSync(cartId),
    })

    return () => {
        mutate({
            token: axios.defaults.headers.Authorization,
            cart_Id: cartId,
        })
    }
}

const useRemoveCartMultiple = (stateSync) => {
    const { mutate } = useMutation({
        mutationFn: fetchRemoveMultiple,
        onSuccess: stateSync,
    })

    return () => {
        mutate({
            token: axios.defaults.headers.Authorization,
        })
    }
}

export {
    useCartCollection,
    useCurrentCartQuantity,
    useAddCart,
    useCheckboxCart,
    useCheckboxAllCart,
    useOneQuantityCart,
    useRemoveCartSingle,
    useRemoveCartMultiple,
}