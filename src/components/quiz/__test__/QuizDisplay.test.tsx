import { render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'
import QuizDisplay from '../QuizDisplay'

describe('quizdisplay', () => {
    test('quizdisplay snapshot', () => {
        const tree = renderer.create(<QuizDisplay page={2} navigate={() => { }} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('quiz should be true or false', () => {
        const { getByTestId } = render(<QuizDisplay page={2} navigate={() => { }} />)
        expect(getByTestId('quiz2')).toBeInTheDocument()
        expect(getByTestId('quiz2')).toHaveTextContent('cat is an object')
    })
})