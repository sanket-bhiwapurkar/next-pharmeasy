import { TypographyScale } from '@/app/constants/styles'
import Image from 'next/image'
import React from 'react'

interface ArticleCardProps {
    className?: string;
    imgUrl?: string;
    title?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ className, imgUrl = "/images/articles/celery-seed.webp", title = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero eveniet iure, nam sequi aspernatur excepturi." }) => {
    return (
        <div className={`min-w-48 md:min-w-56 rounded-lg border border-gray-300 overflow-hidden hover:shadow-lg ${className}`}>
            <div className="min-w-32 md:h-44">
                <Image
                    alt="Article"
                    className="w-full h-full rounded-t-lg object-cover"
                    height={0}
                    src={imgUrl}
                    width={232}
                />
            </div>
            <div className="border-t border-gray-300 p-4">
                <p className={`${TypographyScale.body2} line-clamp-3`}>{title}</p>
            </div>
        </div>
    )
}

export default ArticleCard