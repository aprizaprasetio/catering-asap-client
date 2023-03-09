import { create } from 'zustand'

const useFoodDrinkStore = create(set => ({
    totalFoodDrink: null,
    setTotalFoodDrink: value => set({
        totalFoodDrink: value,
    }),
}))

export default useFoodDrinkStore