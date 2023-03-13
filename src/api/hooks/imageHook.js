import { useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { imageToBase64 } from 'commands/builders/imageBuilder'
import { fetchImage } from 'api/connections/imageRequest'

const useImageByPath = path => {
    const imageMutation = useMutation({
        mutationFn: async () => {
            const image = await fetchImage(path)
            return await imageToBase64(image)
        },
    })

    useEffect(imageMutation.mutate, [])

    return imageMutation
}


// Example usage
// const {data: image, isLoading: isImageLoading} = useImageByPath('payment/10-1-payment-2023-03-13.webp')
// Component will return like this
// {isImageLoading ? <Skeleton /> : <Box component="img" src={image} />}
// Don't forget, you need to realize that this request is asyncronus, 
// you can go with Skeleton when the image still loading

export {
    useImageByPath,
}