import { useMutation, useQuery } from "@tanstack/react-query"
import { createBanner, deleteBanner, fetchBanner, fethBannerById } from "api/connections/bannerRequest"
import useBannerStore from "factory/store/useBannerStore"

const useCreateBanner = () => {
    const mutation = useMutation({
        mutationFn: createBanner,
    })

    return mutation
}

const useFetchBanner = () => {
    const dataBanner = useQuery({
        queryKey: ['banner'],
        queryFn: fetchBanner
    })

    return dataBanner
}

const useDeleteBanner = () => {
    const dataBanner = useMutation({
        mutationKey: ['banner'],
        mutationFn: deleteBanner
    })

    return dataBanner
}

const useFetchBannerById = () => {
    const { idBanner } = useBannerStore()
    const dataBanner = useQuery({
        queryKey: ['bannerId'],
        queryFn: () => fethBannerById(idBanner)
    })

    return dataBanner
}

export {
    useCreateBanner,
    useFetchBanner,
    useDeleteBanner,
    useFetchBannerById
}