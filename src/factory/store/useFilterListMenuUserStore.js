import { create } from 'zustand'

const userFilterListMenuUserStore = create((set, get) => ({
    filterBy: '',
    setFilterBy: value => set({
        filterBy: value,
    })
}))

export default userFilterListMenuUserStore