import Image from 'next/image';
import React from 'react'

interface ProductBetaCardProps {
    clasName?: string;
    imageClassName?: string;
    imgUrl: string;
    orientation?: "vertical" | "horizontal"
    title: string;
    mp: number;
    sp: number;
    discount: number;
}

const ProductBetaCard: React.FC<ProductBetaCardProps> = ({
    clasName,
    imageClassName,
    imgUrl = "/images/brands/611be7f660e-SugarfreeFB.png",
    orientation = 'vertical',
    title = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit sunt odio!",
    mp = 100.00,
    sp = 100.00,
    discount = 15,
}) => {
    return (
        <div className={`flex items-start min-w-32 ${orientation === 'vertical' ? 'flex-col lg:min-w-44' : "w-64 lg:min-w-96"} gap-3 ${clasName}`}>
            <div className={`rounded-lg !aspect-square ${orientation === 'vertical' ? 'w-full' : "w-2/5"} border border-gray-300  hover:shadow-lg p-4 ${imageClassName}`}>
                <Image
                    alt="Brand"
                    className={`w-full h-full rounded-lg object-cover`}
                    height={0}
                    src={imgUrl}
                    width={200}
                />
            </div>
            <div className={`flex flex-col gap-2 font-semibold ${orientation === 'vertical' ? '' : "w-3/5"}`}>
                <p className='max-lg:text-xs font-medium line-clamp-2 mb-1'>{title}</p>
                <p className='text-xs lg:text-sm text-gray-500'>MRP <span className='line-through'>₹{mp}</span></p>

                <div className={`flex ${orientation === 'horizontal' ? "flex-col md:flex-row" : ""}`}>
                    <p className='max-lg:text-xs me-2'>{sp}</p>
                    <p className='max-lg:text-xs text-danger'>({discount})</p>
                </div>
            </div>

        </div >
    )
}

export default ProductBetaCard