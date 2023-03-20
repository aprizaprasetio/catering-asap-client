import { useMutation } from "@tanstack/react-query"
import { createReaction, updateReaction } from "api/connections/reactionRequest"
import { axios } from 'api/initiates/queryInitiate'

const useCreateReaction = foodDrinkId => {
    const { mutate } = useMutation({
        mutationFn: createReaction,
        onSuccess: (data) => {
            console.log(data)
        }
    })

    return reaction => {
        mutate({
            token: axios.defaults.headers.Authorization,
            reaction,
            foodDrinkId,
        })
    }
}

const useUpdateReaction = foodDrinkId => {
    const { mutate } = useMutation({
        mutationFn: updateReaction,
        onSuccess: (data) => {
            console.log(data)
        }
    })

    return (id, reaction) => {
        mutate({
            token: axios.defaults.headers.Authorization,
            id,
            reaction,
            foodDrinkId,
        })
    }
}

export {
    useCreateReaction,
    useUpdateReaction
}