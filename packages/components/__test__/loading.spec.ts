import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest'
import { QlLoading } from '@qionglou/components'

describe('Qloading', async () => {
  test('text', () => {
    const wrapper = mount(QlLoading, {
      props: {
        text: 'test loading...'
      }
    })
    expect(wrapper.html()).toContain('test')
  })
})
