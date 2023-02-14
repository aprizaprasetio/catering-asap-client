import { create } from 'zustand'

const useUserStore = create(set => ({
    totalUser: null,
    setTotalUser: value => set({
        totalUser: value,
    }),
}))

export default useUserStore