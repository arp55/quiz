import { MenuItem, Select, FormControl, Paper, TextField, Typography, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, Button } from '@mui/material'
import React, { useState } from 'react'
import { NavigateFunction } from 'react-router-dom'
import './Form.css'

type Props = {
    navigate: NavigateFunction
}

export default function Form({ navigate }: Props) {
    const [val, setval] = useState({
        name: '',
        gender: '',
        age: '',
        language: ''
    })

    function handleChange(value: string, e: any) {
        setval({ ...val, [value]: e.target.value })
    }

    function handleSubmit() {
        // e.preventDefault()`
        if (val.name.length !== 0) {
            navigate('quiz')
        }
    }

    return (
        <Paper style={{ maxWidth: '400px', padding: '20px' }}>
            {/* <form onSubmit={handleSubmit}> */}
            <Typography data-testid='text-header' className='header-typo' variant='h6'>Please fill the details</Typography><br />
            <FormControl>
                <TextField data-testid='form-input' inputProps={{ 'data-testid': 'name-input' }} label="Name" variant="standard" placeholder='Please enter name' onChange={(e) => handleChange('name', e)} />
                <FormLabel id="radio-gender">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="radio-gender"
                    // defaultValue=""
                    value={val.gender}
                    name="radio-group"
                    onChange={(e) => handleChange('gender', e)}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
                <FormControl>
                    <InputLabel id="select-label">Age</InputLabel>
                    <Select
                        data-testid="age-input"
                        labelId="select-label"
                        id="select"
                        value={val.age}
                        label="Age"
                        onChange={(e) => handleChange('age', e)}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>

                </FormControl>
                <FormLabel id="radio-language">Test language</FormLabel>
                <RadioGroup
                    data-testid='language-radio'
                    aria-labelledby="radio-language"
                    // defaultValue=""
                    value={val.language}
                    name="radio-group"
                    onChange={(e) => handleChange('language', e)}
                >
                    <FormControlLabel value="spanish" control={<Radio />} label="spanish" />
                    <FormControlLabel value="english" control={<Radio />} label="english" />
                    <FormControlLabel value="hindi" control={<Radio />} label="hindi" />
                </RadioGroup>
            </FormControl>
            <div style={{ width: '100%', textAlign: 'center' }}>
                <Button data-testid='submit-btn' disabled={val.name.length === 0} variant="outlined" onClick={handleSubmit} >Submit</Button>
            </div>
            {/* </form> */}
        </Paper >
    )
}
