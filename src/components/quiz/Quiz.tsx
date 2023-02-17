import { Paper } from '@mui/material'
import React, { useState } from 'react'
import { NavigateFunction } from 'react-router-dom'
import Pagination from '../pagination/Pagination'
import QuizDisplay from './QuizDisplay'

type Props = {
    navigate: NavigateFunction
}

export default function Quiz({ navigate }: Props) {
    const [page, setPage] = useState(1)
    return (
        <Paper>
            <Pagination setChange={(val: number) => setPage(val)} />
            <QuizDisplay {...{ page, navigate }} />
        </Paper>
    )
}
