import { create } from 'zustand'

const useFilterListMenuUserStore = create((set, get) => ({
    filterBy: '',
    setFilterBy: value => set({
        filterBy: value,
    })
}))

export default useFilterListMenuUserStore