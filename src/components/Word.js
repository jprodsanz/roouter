import React from 'react'
import { useParams } from 'react-router-dom'

export const Word = props => {

const { word, color, bg } = useParams()

const styles = {
    color: color,
    backgroundColor: bg
}

return (
<h1 style={styles}>
    { isNaN(word) ? 'the word is: ' + word : 'the number is: ' + word }
</h1>
)
}