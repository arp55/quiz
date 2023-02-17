import React from 'react'
import renderer from 'react-test-renderer'
import Pagination from '../Pagination'
import { render } from '@testing-library/react'


describe('pagination tests', () => {
    test('pagination snapshot', () => {
        const tree = renderer.create(<Pagination setChange={() => { }} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('left icon present', () => {
        const { getByTestId } = render(<Pagination setChange={() => { }} />)
        expect(getByTestId('chevron-icon')).toBeInTheDocument()
    })
})