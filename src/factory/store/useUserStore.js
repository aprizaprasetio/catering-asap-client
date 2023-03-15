import { create } from 'zustand'

const useUserStore = create((set, get )=> ({
    totalUser: null,
    setTotalUser: value => set({
        totalUser: value,
    }),
    keyword: '',
    setKeyword: value => set({
        keyword: value,
    })
}))

export default useUserStore