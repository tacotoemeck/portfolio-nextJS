import { screen, fireEvent } from '@testing-library/react';
import { getPage } from 'next-page-tester';

describe('Header', () => {
  it('renders header', async () => {
    const { render } = await getPage({
      route: '/',
    });

    render();
    expect(screen.getByText('about')).toBeInTheDocument;
    expect(screen.getByText('contact')).toBeInTheDocument;
    expect(screen.getByText('experience')).toBeInTheDocument;

    fireEvent.click(screen.getByText('t. wagner'));
    await screen.findByText('about');
  });
});
