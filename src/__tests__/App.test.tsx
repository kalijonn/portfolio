import React from 'react'
import App from 'App'
import {render} from '@testing-library/react'
import {axe} from 'jest-axe'

test('no violations', async () => {
  const {container} = render(<App />)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})
