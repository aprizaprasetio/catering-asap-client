import { create } from 'zustand'
import { formatQuantity } from 'commands/application/priceCommand'

const useCartStore = create((set, get) => (
    {
        data: null,
        quantity: '0',
        setQuantity: value => set({
            data: value,
        }),
        setQuantity: value => set({
            quantity: value,
        }),
        isNoCheck: () => {
            const isSingleCheck = get().data.some(item => {
                if (item.isChecked) return true
            })
            return !isSingleCheck
        },
        isCheckedAll: () => {
            const isSingleNoCheck = get().data.some(item => {
                if (!item.isChecked) return true
            })
            return !isSingleNoCheck
        },
        checkboxTriggerAll: () => set(state => ({
            data: state.data.map(item => ({
                ...item,
                isChecked: !state.isCheckedAll(),
            }))
        })),
        removeCart: id => set(state => ({
            data: state.data.filter(item => {
                return item.id !== id
            }),
        })),
        removeChecked: () => set(state => ({
            data: state.data.filter(item => {
                return item.isChecked === false
            }),
        })),
        checkedTotal: () => get().data.reduce((total, item) => {
            if (!item.isChecked) return total
            return total + formatQuantity(item.price, item.quantity)
        }, 0),
        checkboxTrigger: id => set(state => ({
            data: state.data.map(item => {
                if (item.id !== id) return item
                return {
                    ...item,
                    isChecked: !item.isChecked,
                }
            }),
        })),
        increaseQuantity: id => set(state => state.data.map(item => {
            if (item.id !== id) return item
            return {
                ...item,
                quantity: ++item.quantity,
            }
        })),
        decreaseQuantity: id => set(state => state.data.map(item => {
            if (item.id !== id) return item
            if (item.quantity <= 1) return state.removeCart(id)
            return {
                ...item,
                quantity: --item.quantity,
            }
        })),
    }
))

export default useCartStore