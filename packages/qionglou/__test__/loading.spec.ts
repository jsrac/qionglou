import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest'
import { Qloading } from '../loading'

describe('Qloading', async () => {
  test('text', () => {
    const wrapper = mount(Qloading, {
      props: {
        text: 'test loading...'
      }
    })
    expect(wrapper.html()).toContain('test')
  })
})
