import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders the app component', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('has the correct name', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.vm.$options.name).toBe('App')
  })

  it('contains a router-view', () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-view']
    })
    expect(wrapper.find('router-view-stub').exists()).toBe(true)
  })
})
