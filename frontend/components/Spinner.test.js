import Spinner from './Spinner' 
import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
test('sanity', () => {
  expect(true).toBe(true)
})

const loadingMessage = 'Please Wait...';

test('does not render loadingMessage if props = false', () => {
  render(<Spinner on={false}/>)
  const lM = screen.queryByText(loadingMessage)
  expect(lM).not.toBeInTheDocument()
})

test('loadingMessage is in the document if props = true', () => {
  render(<Spinner on={true}/>)
  const lM = screen.queryByText(loadingMessage)
  expect(lM).toBeInTheDocument
})


