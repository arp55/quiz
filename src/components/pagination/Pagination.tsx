import React, { useState } from 'react'
import './Pagination.css'
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { quizData } from '../../quizData';

type Props = {
    setChange: Function
}

export default function Pagination({ setChange }: Props) {
    const [page, setpage] = useState(1)

    function handleClick(val: string) {
        if (val === 'left' && page > 1) {
            setpage(page => page - 1)
            setChange(page - 1)
        }
        if (val === 'right' && page < quizData.length) {
            setpage(page => page + 1)
            setChange(page + 1)
        }
    }

    function changePage(index: number) {
        setpage(page => index + 1)
        setChange(index + 1)
    }

    return (
        <div className='dot-cont'>
            <ChevronLeft data-testid='chevron-icon' className="icon-page" onClick={() => handleClick('left')} />
            {new Array(quizData.length).fill(null).map((_, index: number) => {
                let className = 'page-dot'
                if (page === index + 1) {
                    className += ' focused'
                }
                return (
                    <>
                        <div onClick={() => changePage(index)} {...{ className }} />
                    </>
                )
            })}
            <ChevronRight className="icon-page" onClick={() => handleClick('right')} />
        </div>
    )
}
