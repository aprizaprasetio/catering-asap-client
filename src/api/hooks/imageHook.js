import { useMutation } from '@tanstack/react-query'
import { fetchImage } from 'api/connections/imageRequest'

const useImageByPath = () => {
    const imageMutation = useMutation({
        mutationFn: fetchImage,
    })

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