import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
    it('Emits and event with a user data payload', () => {
        const wrapper = mount(LoginForm)
        // 1 - Find our text input
        const input = wrapper.find('[data-testid="name-input"]')

        // 2 - Set value for text input
        input.setValue('Miguel Ortega')

        // 3 - Simulate form submission
        wrapper.trigger('submit')

        // 4 - Assert event has been emitted
        const formSubmittedCalls = wrapper.emitted('formSubmitted')
        expect(formSubmittedCalls).toHaveLength(1)

        // 5 - Assert paypoad is correct
        const expectedPayload = { name: 'Miguel Ortega' }
        expect(wrapper.emitted('formSubmitted')[0][0].toMatchObject(
            expectedPayload
        ))


    })
})