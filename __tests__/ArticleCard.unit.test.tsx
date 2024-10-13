import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleCard from "../src/components/ui/article-card/ArticleCard";
import { Article_Preview } from '@/interfaces/Article';
import { Media } from '@/interfaces/Media';
import { mockArticle } from '../__mocks__/mockArticle';

describe('ArticleCard', () => {


  it('renders the article title', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText('Article test')).toBeInTheDocument();
  });

	it('displays the article tags', () => {
    render(<ArticleCard article={mockArticle} />);
    
    mockArticle.attributes.tags.data.forEach(tag => {
      expect(screen.getByText(`#${tag.attributes.name}`)).toBeInTheDocument();
    });
  });
  

  it('shows the article date', () => {
    // Render the ArticleCard component with the mock article
    render(<ArticleCard article={mockArticle} />);

    // Use a custom function to find the date element
    const dateElement = screen.getByText((content, element) => {
      // Ensure the element is an h3 tag
      if (element?.tagName.toLowerCase() !== 'h3') return false;

      // Check if the content includes the day (10)
      const hasDay = content.includes('10');

      // Check if the element's text content includes the month (sep)
      const hasMonth = element.textContent?.toLowerCase().includes('sep');

      // Return true if both day and month are present or false if not so we are sure to return a boolean
      return (hasDay && hasMonth) || false;
    });

    // Assert that the date element is in the document
    expect(dateElement).toBeInTheDocument();
  });

  it('renders the article summary', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText('This is a test article summary')).toBeInTheDocument();
  });

  it('displays the article image', () => {
    render(<ArticleCard article={mockArticle} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(image).toHaveAttribute('alt', 'CoverImage');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ArticleCard article={mockArticle} />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Add more tests as needed
});