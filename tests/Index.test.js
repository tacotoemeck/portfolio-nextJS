import { screen, fireEvent } from '@testing-library/react';
import { getPage } from 'next-page-tester';

describe('Index page', () => {
  it('renders image', async () => {
    const { render } = await getPage({
      route: '/',
    });

    render();
    expect(screen.getAllByAltText('profile')).toBeInTheDocument;
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument;
    expect(screen.getByText('contact')).toBeInTheDocument;
  });
});
