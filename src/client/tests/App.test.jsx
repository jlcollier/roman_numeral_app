import { render, screen} from '@testing-library/react';
import App from '../App.jsx';

describe('App', () => {
  test('renders a button with the correct label', () => {
    render(<App/>)
    const button = screen.getByText('Convert')
    expect(button).toBeInTheDocument()
  })
})