import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, FormGroup, Checkbox, Button } from '@mui/material';
import React, { useState } from 'react'
import { NavigateFunction } from 'react-router-dom';
import { quizData } from '../../quizData'

type Props = {
    page: number;
    navigate: NavigateFunction;
}

export default function QuizDisplay({ page, navigate }: Props) {
    const [answers, setanswers] = useState({
        mcq: '',
        fillblanks: '',
        multi: [],
        truefalse: ''
    })

    function handleChange(val: string, e: any) {
        if (val === 'multi') {
            console.log(e.target.name)
            const arr: any = answers.multi
            const ind = arr.findIndex((item: string) => item === e.target.name)
            if (ind < 0) {
                arr.push(e.target.name)
            } else {
                arr.splice(ind, 1)
            }
            console.log({ arr })
            setanswers(answers => ({ ...answers, multi: arr }))
        } else {
            setanswers(answers => ({ ...answers, [val]: e.target.value }))
        }
    }

    function handleSubmit() {
        navigate('/result', { state: answers })
    }

    const quizObj = quizData[page - 1]
    switch (page) {
        case 1: return (
            <FormControl>
                <FormLabel id="mcq-radio">{quizData[page - 1].question}</FormLabel>
                <RadioGroup
                    aria-labelledby="mcq-radio"
                    name="radio-buttons-group"
                    onChange={(e: any) => handleChange('mcq', e)}
                // onChange={}
                >
                    {quizObj && quizObj.options && quizObj.options.map((item: any) => (
                        <FormControlLabel value={item} control={<Radio />} label={item} />
                    ))}
                </RadioGroup>
            </FormControl>
        )
        case 2: return (
            <FormControl>
                <FormLabel data-testid="quiz2" id="truefalse-radio">{quizData[page - 1].question}</FormLabel>
                <RadioGroup
                    aria-labelledby="truefalse-radio"
                    name="radio-buttons-group"
                    onChange={(e: any) => handleChange('truefalse', e)}
                >
                    {quizObj && quizObj.options && quizObj.options.map((item: any) => (
                        <FormControlLabel value={item} control={<Radio />} label={item} />
                    ))}
                </RadioGroup>
            </FormControl>
        )
        case 3: return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextField onChange={(e: any) => handleChange('fillblanks', e)} variant='standard' /> {quizData[page - 1].question}
            </div>
        )
        case 4: return (
            <>
                <FormGroup>
                    {quizObj && quizObj.options && quizObj.options.map((item: any) => (
                        <FormControlLabel control={<Checkbox onChange={(e: any) => handleChange('multi', e)} name={item} />} label={item} />
                    ))}
                </FormGroup>
                <Button variant="outlined" onClick={handleSubmit} >Submit</Button>
            </>
        )
        default: return null
    }
}
