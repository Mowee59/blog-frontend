import React from 'react';
import { render, screen } from '@testing-library/react';
import TagCard from '../src/components/ui/tag-card/TagCard';
import { mockTag } from '../__mocks__/mockTag';


describe('TagCard', () => {
  it('renders the tag name', () => {
    render(<TagCard tag={mockTag} />);
    expect(screen.getByText('#React')).toBeInTheDocument();
  });


  it('displays the correct number of articles', () => {
    render(<TagCard tag={mockTag} />);
    expect(screen.getByText('3 Articles')).toBeInTheDocument();
  });

  it('links to the correct tag page', () => {
    render(<TagCard tag={mockTag} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/tags/react');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<TagCard tag={mockTag} />);
    expect(asFragment()).toMatchSnapshot();
  });
});