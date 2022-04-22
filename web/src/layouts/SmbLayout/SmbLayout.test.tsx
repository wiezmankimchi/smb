import { render } from '@redwoodjs/testing/web'

import SmbLayout from './SmbLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SmbLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SmbLayout />)
    }).not.toThrow()
  })
})
