import { create } from 'zustand'

const useSortAdmin = create((set, get )=> ({
    sortBy: '',
    setSortBy: value => set({
        sortBy: value,
    })
}))

export default useSortAdmin