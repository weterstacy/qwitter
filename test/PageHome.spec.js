import { shallowMount, createLocalVue } from '@vue/test-utils'
import PageHome from '@/pages/PageHome.vue'

// Mock Firebase
jest.mock('src/boot/firebase', () => ({
  collection: jest.fn(() => ({
    add: jest.fn(() => Promise.resolve({ id: 'test-id' })),
    doc: jest.fn(() => ({
      delete: jest.fn(() => Promise.resolve()),
      update: jest.fn(() => Promise.resolve())
    })),
    orderBy: jest.fn(() => ({
      onSnapshot: jest.fn((callback) => {
        // Return empty snapshot
        callback({
          docChanges: () => []
        })
        // Return unsubscribe function
        return jest.fn()
      })
    }))
  }))
}))

const localVue = createLocalVue()

// Mock the relativeDate filter
localVue.filter('relativeDate', (value) => {
  return 'a few seconds ago'
})

describe('PageHome.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PageHome, {
      localVue,
      stubs: ['q-page', 'q-scroll-area', 'q-input', 'q-avatar', 'q-btn', 'q-separator', 'q-list', 'q-item', 'q-item-section', 'q-item-label']
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has correct component name', () => {
    expect(wrapper.vm.$options.name).toBe('PageHome')
  })

  it('initializes with empty newQweetContent', () => {
    expect(wrapper.vm.newQweetContent).toBe('')
  })

  it('initializes with empty qweets array', () => {
    expect(wrapper.vm.qweets).toEqual([])
  })

  it('addNewQweet method creates a qweet object', () => {
    wrapper.vm.newQweetContent = 'This is a test qweet'
    const dateSpy = jest.spyOn(Date, 'now').mockReturnValue(1234567890)
    
    wrapper.vm.addNewQweet()
    
    expect(wrapper.vm.newQweetContent).toBe('')
    dateSpy.mockRestore()
  })

  it('toggleLiked method is defined', () => {
    expect(typeof wrapper.vm.toggleLiked).toBe('function')
  })

  it('deleteQweet method is defined', () => {
    expect(typeof wrapper.vm.deleteQweet).toBe('function')
  })
})
