import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('should render', async () => {
    const { findByText } = render(<App />);
    const a = await findByText('Hello World');
    expect(a).toBeInTheDocument();
  });
});
