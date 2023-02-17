import { Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Location } from 'react-router-dom'
import { quizData } from '../../quizData'

type Props = {
    location: any
}

export default function Result({ location }: Props) {
    const [res, setres] = useState(0)

    function calculateResult() {
        const { state } = location
        console.log({ state })
        let correct = 0
        const { mcq, fillblanks, multi, truefalse } = state
        if (mcq === quizData[0].answer) {
            correct += 1
        }
        if (fillblanks === quizData[2].answer) {
            correct += 1
        }
        if (truefalse === quizData[1].answer) {
            correct += 1
        }
        if (multi.length === quizData[3].answer.length) {
            let arr: any = quizData[3].answer
            let res = multi.every((item: string) => {
                let ind = arr.findIndex((it: string) => it === item)
                if (ind < 0) { return false }
                else { return true }
            })

            if (res) {
                correct += 1
            }
        }
        setres(res => correct)
    }

    useEffect(() => {
        calculateResult()
    }, [])


    return (
        <Paper style={{ padding: '10px', maxWidth: '400px', display: 'flex', justifyContent: 'center' }}>
            <div>
                <Typography variant="body1"> Result: {res} /{quizData.length}</Typography><br />
                <div style={{ height: '100px', width: '100px', borderRadius: '50px', background: `conic-gradient(green ${(res / quizData.length) * 100}% ,red 0)` }} />
            </div>
        </Paper>
    )
}
