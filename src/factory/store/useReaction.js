import { create } from 'zustand'

const useReaction = create((set, get )=> ({
    dataReaction: null,
    setDataReaction: value => set({
        dataReaction: value,
    }),
    foodId: null,
    setFoodId: value => set({
        foodId: value,
    })
}))

export default useReaction