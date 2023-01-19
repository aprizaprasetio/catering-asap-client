import React from 'react'
import SkeletonItem from './SkeletonItem'

const SkeletonList = () => {
    return [...Array(5)].map((array, index) => <SkeletonItem key={index} />)
}

export default SkeletonList