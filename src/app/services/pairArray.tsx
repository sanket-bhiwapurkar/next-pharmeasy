import React from 'react'

const pairArray = (array: { [key: string]: any }[]) => {
    let paired = []
    for (let i = 0; i < array.length; i += 2) {
        paired.push([array[i], array[i + 1]])
    }
    return paired
}

export default pairArray