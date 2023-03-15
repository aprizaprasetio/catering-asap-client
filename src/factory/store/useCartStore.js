import { create } from 'zustand'
import { formatQuantity } from 'commands/application/priceCommand'

const useCartStore = create((set, get) => (
    {
        pages: null,
        quantity: null,
        setCart: value => {
            const isCartExist = get().pages?.length >= 1
            const lastPage = value[value.length - 1]
            if (isCartExist) {
                return set(state => ({
                    pages: state.pages.push(lastPage),
                }))
            }
            set({
                pages: value,
            })
        },
        setQuantity: value => set({
            quantity: value,
        }),
        resetCart: () => set({ pages: null }),
        isCartExist: () => !!get().pages.find(group => (group.length >= 1)),
        isNoCheck: () => {
            const isSingleCheck = get().pages?.some(group => (
                group.some(item => {
                    if (item.isChecked) return true
                })
            ))
            return !isSingleCheck
        },
        isCheckedAll: () => {
            const isSingleNoCheck = get().pages?.some(group => (
                group.some(item => {
                    if (!item.isChecked) return true
                })
            ))
            return !isSingleNoCheck
        },
        checkboxTriggerAll: () => set(state => ({
            pages: state.pages.map(group => (
                group.map(item => ({
                    ...item,
                    isChecked: state.isCheckedAll() ? false : true,
                }))
            ))
        })),
        removeCart: id => set(state => ({
            pages: state.pages.map(group => (
                group.filter(item => {
                    return item.id !== id
                })
            )),
        })),
        removeChecked: () => set(state => ({
            pages: state.pages.map(group => (
                group.filter(item => !item.isChecked)
            )),
        })),
        checkedTotal: () => get().pages?.reduce((groupTotal, group) => (
            groupTotal + group.reduce((itemTotal, item) => {
                if (!item.isChecked) return itemTotal
                return itemTotal + formatQuantity(item.food_Drink_Menu_Price, item.quantity)
            }, 0)
        ), 0),
        checkboxTrigger: id => set(state => ({
            pages: state.pages.map(group => (
                group.map(item => {
                    if (item.id !== id) return item
                    return {
                        ...item,
                        isChecked: !item.isChecked,
                    }
                })
            )),
        })),
        increaseQuantity: id => set(state => ({
            pages: state.pages.map(group => (
                group.map(item => {
                    if (item.id !== id) return item
                    return {
                        ...item,
                        quantity: ++item.quantity,
                    }
                })
            ))
        })),
        decreaseQuantity: id => set(state => ({
            pages: state.pages.map(group => (
                group.map(item => {
                    if (item.id !== id) return item
                    return {
                        ...item,
                        quantity: --item.quantity,
                    }
                })
            ))
        })),
    }
))

export default useCartStore