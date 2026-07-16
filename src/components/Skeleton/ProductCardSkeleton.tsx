import Skeleton from "./Skeleton"

const ProductCardSkeleton = () => {

    return (

        <div>
            <Skeleton width="100%" height="180px" borderRadius="8px" />
            <Skeleton width="80%" height="20px" borderRadius="4px" />
            <Skeleton width="40%" height="24px" borderRadius="4px" />
        </div>
    )
}

export default ProductCardSkeleton