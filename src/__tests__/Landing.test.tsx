import React from 'react'
import {render} from '@testing-library/react'
import {axe} from 'jest-axe'
import Landing from 'Pages/Landing'

test('landing no violations', async () => {
  const {container} = render(<Landing />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
