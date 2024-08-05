import Image from 'next/image'
import React from 'react'

interface ProductAlphaCardProps {
    clasName?: string;
    imgUrl?: string;
    title?: string;
    mp?: number;
    sp?: number;
    discount?: number;
}

const ProductAlphaCard: React.FC<ProductAlphaCardProps> = ({
    clasName,
    imgUrl = "/images/brands/611be7f660e-SugarfreeFB.png",
    title = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit sunt odio!",
    mp = 100.00,
    sp = 100.00,
    discount = 15,
}) => {
    return (
        <div className='border-r border-b lg:border lg:rounded-lg lg:hover:border-primary flex flex-col p-4 lg:w-fit min-w-56'>
            <div className={`w-36 lg:w-full self-center`}>
                <Image
                    alt="Brand"
                    className={`w-full h-full rounded-lg object-cover`}
                    height={0}
                    src={imgUrl}
                    width={200}
                />
            </div>
            <div className={`w-44 flex flex-col gap-3 text-sm lg:text-base`}>
                <p className='line-clamp-2 font-medium lg:font-bold'>{title}</p>
                <div className='flex items-start gap-2'>
                    <div className='flex flex-col'>
                        <p className='text-xs lg:text-sm text-gray-500'>MRP <span className='line-through'>₹{mp}</span></p>
                        <p className='font-semibold'>{sp}</p>
                    </div>
                    <div className="bg-[url('/images/pdp-discount.png')] bg-no-repeat bg-contain flex items-center text-[10px] text-white w-[65px] h-[20px] px-1">
                        <p>50% OFF</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAlphaCard