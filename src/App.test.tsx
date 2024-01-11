import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'

import App from './App'
import store from './store/configureStore'

describe('Breakify App', () => {
  it('should render correctly', async () => {
    createComponent()
    expect(screen.getByText('Br')).toBeInTheDocument()
    expect(screen.getByText('eaking')).toBeInTheDocument()
    expect(screen.getByText('Ba')).toBeInTheDocument()
    expect(screen.getByText('d')).toBeInTheDocument()
  })

  it('should initialize highlight correctly', async () => {
    createComponent()
    expect(screen.getByText('Br')).toHaveClass('highlighted')
    expect(screen.getByText('eaking')).not.toHaveClass('highlighted')
    expect(screen.getByText('Ba')).toHaveClass('highlighted')
    expect(screen.getByText('d')).not.toHaveClass('highlighted')
  })

  it('should change words and highlight when user change input and click in button', async () => {
    createComponent()

    const firstNameInput = screen.getByLabelText('First Name')
    const lastNameInput = screen.getByLabelText('Last Name')

    expect(firstNameInput).toHaveValue('Breaking')
    userEvent.clear(firstNameInput)
    userEvent.type(firstNameInput, 'example')
    await waitFor(() => expect(firstNameInput).toHaveValue('example'))

    expect(lastNameInput).toHaveValue('Bad')
    userEvent.clear(lastNameInput)
    userEvent.type(lastNameInput, 'test')
    await waitFor(() => expect(lastNameInput).toHaveValue('test'))

    userEvent.click(screen.getByText('Breakify'))

    await waitFor(() => expect(screen.getByText('ex')).toBeInTheDocument())

    expect(screen.getByText('ex')).not.toHaveClass('highlighted')
    expect(screen.getByText('Am')).toHaveClass('highlighted')
    expect(screen.getByText('ple')).not.toHaveClass('highlighted')
    expect(screen.getByText('Te')).toHaveClass('highlighted')
    expect(screen.getByText('st')).not.toHaveClass('highlighted')
  })
})

const createComponent = () => {
  return act(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
}
