import { create } from 'zustand'

const useGrapStore = create((set, get) => ({
    filterBy: '',
    setFilterBy: value => set({
        filterBy: value,
    })
}))

export default useGrapStore