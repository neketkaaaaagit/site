import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import {randomUUID} from 'node:crypto'


// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})

window.crypto.randomUUID = randomUUID

// Skip all tests
test.skip('dummy test', () => {
  expect(true).toBe(true)
})