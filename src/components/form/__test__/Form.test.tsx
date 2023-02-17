import { cleanup, render, fireEvent } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'
import Form from '../Form'

afterEach(cleanup)

describe('test for form', () => {
    test('snapshot for form comp', () => {
        const tree = renderer.create(<Form navigate={() => { }} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('header present in form', () => {
        const { getByTestId } = render(<Form navigate={() => { }} />)
        expect(getByTestId('text-header')).toBeInTheDocument()
        expect(getByTestId('text-header')).toHaveTextContent('Please fill the details')
    })

    test('textinput present in form', () => {
        const { getByTestId } = render(<Form navigate={() => { }} />)
        expect(getByTestId('form-input')).toHaveTextContent('Name');
    })

    test('submit button to be disabled by default', () => {
        const { getByTestId, getByText } = render(<Form navigate={() => { }} />)
        expect(getByTestId('name-input')).toBeInTheDocument()
        expect(getByText('Submit')).toBeInTheDocument()
        expect(getByText('Submit')).toBeDisabled()
    })

    test('submit button to be enabled', () => {
        const { getByTestId, getByText } = render(<Form navigate={() => { }} />)
        const input = getByTestId('name-input')
        fireEvent.change(input, { target: { value: 'rohit' } })
        expect(getByText('Submit')).toBeInTheDocument()
        expect(getByText('Submit')).toBeEnabled()
    })

    test('language radio buttons to be present', () => {
        const { getByTestId } = render(<Form navigate={() => { }} />)
        expect(getByTestId('language-radio')).toBeInTheDocument()
    })

    test('age select buttons to be present', () => {
        const { getByTestId } = render(<Form navigate={() => { }} />)
        expect(getByTestId('age-input')).toBeInTheDocument()
    })
})