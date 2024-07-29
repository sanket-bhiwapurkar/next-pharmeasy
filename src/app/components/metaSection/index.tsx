import React from 'react'
import { Box, Typography } from '@mui/material'
import { metaTexts, tags } from './data'
import { flexColumn } from '@/app/constants/styles'

const MetaSection = () => {
    return (
        <Box sx={{ ...flexColumn, p: 4, gap: 4 }}>
            {tags.map(eachGroup =>
                <Typography key={eachGroup.name} variant='body2' sx={{ fontWeight: 600 }}>
                    {eachGroup.name}: {" "}<Typography component="span">{eachGroup.tags[0]}</Typography>
                    {eachGroup.tags.map(eachTag =>
                        <Typography key={eachTag} component="span" variant='body2'>
                            {" "} | {eachTag}
                        </Typography>)}
                </Typography>)}
            <Typography variant='body1' sx={{ fontWeight: 600 }}>
                {metaTexts.title}
            </Typography>
            {metaTexts.content.map((eachContent, i) =>
                <Box key={i} sx={{ ...flexColumn, gap: 2 }}>
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>
                        {eachContent.title}
                    </Typography>
                    <Typography variant='body2' sx={{}}>
                        {eachContent.description}
                    </Typography>
                </Box>
            )}
        </Box>
    )
}

export default MetaSection