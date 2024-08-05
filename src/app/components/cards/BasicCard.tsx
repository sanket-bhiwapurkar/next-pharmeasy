import { TypographyScale } from '@/app/constants/styles'
import Image from 'next/image'
import React from 'react'

interface BasicCardProps {
    className?: string;
    imgUrl?: string;
    title?: string;
    imageClassName?: string;
}

const BasicCard: React.FC<BasicCardProps> = ({ className, imgUrl = "/images/brands/611be7f660e-SugarfreeFB.png", title = "Lorem, ipsum.", imageClassName }) => {
    return (
        <div className={`flex flex-col gap-4 w-44 text-center ${className}`}>
            <div className={`rounded-lg aspect-square w-full hover:shadow-lg ${imageClassName}`}>
                <Image
                    alt="Brand"
                    className={`w-full h-full rounded-lg object-cover`}
                    height={0}
                    src={imgUrl}
                    width={200}
                />
            </div>
            <p className={`${TypographyScale.body1} font-medium`}>{title}</p>
        </div>
    )
}

export default BasicCard
