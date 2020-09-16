import * as React from 'react'
import {cleanup, render} from '@testing-library/react'
import {useScriptLoader} from "../index";

describe('useScriptLoader', () => {
  afterEach(() => cleanup())

  test('Should add script to the DOM as child of head by default', () => {
    const scriptUniqueId = 'script-id-goes-here'
    const MockedComponent = () => {
      useScriptLoader('url/to/script/here.js', { id: scriptUniqueId })
      return <div>MockedComponent</div>
    }
    render(<MockedComponent />)
    expect(document.getElementById(scriptUniqueId)).toBeInTheDocument()
  })

  test('Should not add script with the same source twice', () => {
    const scriptUniqueId = 'script-id-goes-here'
    const mockedSource = 'url/to/script/here.js'
    const MockedComponent = () => {
      useScriptLoader(mockedSource, { id: scriptUniqueId })
      return <div>MockedComponent</div>
    }
    render(
        <div>
          <script src={mockedSource} />
          <MockedComponent />
        </div>
    )
    expect(document.getElementById(scriptUniqueId)).not.toBeInTheDocument()
  })

  test('Should not add script when skip is true', () => {
    const scriptUniqueId = 'script-id-goes-here'
    const MockedComponent = () => {
      useScriptLoader('url/to/script/here.js', { id: scriptUniqueId }, undefined, true)
      return <div>MockedComponent</div>
    }
    render(<MockedComponent />)
    expect(document.getElementById(scriptUniqueId)).not.toBeInTheDocument()
  })

})
