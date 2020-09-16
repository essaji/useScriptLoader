import * as React from 'react'
import {cleanup, render} from '@testing-library/react'
import {useScriptLoader} from "../index";

describe('useScriptLoader', () => {
  afterEach(() => cleanup())

  test('Should add script to the DOM as child of head by default', () => {
    const scriptUniqueId = 'script-id-goes-here'
    const MockedComponent = () => {
      useScriptLoader({ source: 'url/to/script/here.js', id: scriptUniqueId })
      return <div>MockedComponent</div>
    }
    render(<MockedComponent />)
    expect(document.getElementById(scriptUniqueId)).toBeInTheDocument()
  })

})
