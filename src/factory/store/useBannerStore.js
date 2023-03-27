import { create } from 'zustand'

const useBannerStore = create((set, get) => ({
    imagePath: "",
    setImagePath: value => set({
        imagePath: value,
    }),
    subject: "",
    setSubject: value => set({
        subject: value,
    }),
    link: "",
    setLink: value => set({
        link: value,
    }),
    idBanner: null,
    setIdBanner: value => set({
        idBanner: value
    })
})) 

export default useBannerStore