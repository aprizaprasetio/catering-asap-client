import { create } from 'zustand'
import moment from 'moment'

const useCheckoutStore = create((set, get) => (
    {
        mealDate: moment().add(1, 'day'),
        image: null,
        setMealDate: newValue => {
            set({
                mealDate: newValue,
            })
        },
        setImage: value => set({
            image: value,
        }),
        getCheckoutData: () => {
            const { mealDate, image } = get()
            const orderForm = new FormData()

            orderForm.append('OrderData.MealDate', mealDate.toISOString())
            orderForm.append('OrderData.Payment', image.file, image.fileName)
            orderForm.append('OrderData.Address', localStorage.getItem('USER_ADDRESS'))

            return orderForm
        },
    }
))

export default useCheckoutStore