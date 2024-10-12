import React from 'react';
import { render, screen } from '@testing-library/react';
import Tags, { metadata } from '../src/app/tags/page';
import { fetchTags } from '@/libs/axiosServer';
import { Tag } from '@/interfaces/Tag';
import { mockSeveralTags } from '../__mocks__/mockSeveralTags';
import TagCard from '@/components/ui/tag-card/TagCard';

// Mock the fetchTags function
jest.mock('@/libs/axiosServer', () => ({
  fetchTags: jest.fn(),
}));

// Mock the TagCard component for unit tests
const MockTagCard = ({ tag }: { tag: Tag }) => (
  <div data-testid={`tag-card-${tag.id}`}>{tag.attributes.name}</div>
);

/**
 * Test suite for the Tags Page component
 */
describe('Tags Page', () => {
  // Set up mock data before each test
  beforeEach(() => {
    (fetchTags as jest.Mock).mockResolvedValue({ data: mockSeveralTags });
  });

  describe('Unit Tests', () => {
    beforeEach(() => {
      jest.mock('@/components/ui/tag-card/TagCard', () => MockTagCard);
    });

    /**
     * Test case: Verify that all tag cards are rendered correctly
     */
    // it('renders all tag cards correctly', async () => {
    //   // Arrange: Render the Tags component
    //   const { findByTestId } = render(await Tags({}));

    //   // Act: Find all rendered tag cards
    //   const renderedTags = await Promise.all(
    //     mockSeveralTags.map(tag => findByTestId(`tag-card-${tag.id}`))
    //   );

    //   // Assert: Check if each tag card is in the document and has correct content
    //   renderedTags.forEach((tagElement, index) => {
    //     expect(tagElement).toBeInTheDocument();
    //     expect(tagElement).toHaveTextContent(mockSeveralTags[index].attributes.name);
    //   });
    // });

    /**
     * Test case: Verify the layout and styling of the Tags page
     */
    it('has correct layout and styling', async () => {
      // Arrange: Render the Tags component
      const { container } = render(await Tags({}));

      // Act: Find main and section elements
      const main = container.querySelector('main');
      const section = container.querySelector('section');

      // Assert: Check if main and section have the correct classes
      expect(main).toHaveClass('container lg:max-w-screen-lg');
      expect(section).toHaveClass('flex flex-col items-center gap-9 px-6 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3');
    });
  });

  describe('Integration Tests', () => {
    beforeEach(() => {
      jest.unmock('@/components/ui/tag-card/TagCard');
    });

    /**
     * Test case: Verify that all real TagCard components are rendered correctly
     */
    it('renders all real TagCard components correctly', async () => {
      // Arrange: Render the Tags component
      const { container } = render(await Tags({}));

      // Act: Find all rendered TagCard components
      const renderedTagCards = container.querySelectorAll('article');

      // Assert: Check if the correct number of TagCard components are rendered
      expect(renderedTagCards.length).toBe(mockSeveralTags.length);

      // Assert: Check if each TagCard has the correct structure
      renderedTagCards.forEach((tagCard, index) => {
        expect(tagCard).toHaveClass('flex h-[225px] w-full flex-col gap-5');
        expect(tagCard.querySelector('h3')).toHaveTextContent(`#${mockSeveralTags[index].attributes.name}`);
        expect(tagCard.querySelector('h4')).toHaveTextContent(`${mockSeveralTags[index].attributes.articles?.data.length} Articles`);
      });
    });
  });

  /**
   * Test case: Verify the metadata of the Tags page (currently commented out)
   * TODO: Uncomment and implement this test when metadata testing is required
   */
  // it('has correct metadata', () => {
  //   // Arrange: Define expected metadata values
  //   const expectedTitle = 'Aniss.dev | Les tags';
  //   const expectedDescription = 'Explorez ici les differenttes thématiques abordées sur le blog.';

  //   // Act: Get actual metadata
  //   const actualMetadata = metadata;

  //   // Assert: Check if metadata matches expected values
  //   expect(actualMetadata.title).toBe(expectedTitle);
  //   expect(actualMetadata.description).toBe(expectedDescription);
  //   expect(actualMetadata.openGraph?.title).toBe(expectedTitle);
  //   expect(actualMetadata.openGraph?.description).toBe(expectedDescription);
  //   expect(actualMetadata.openGraph?.siteName).toBe('Aniss.dev');
  //   expect(actualMetadata.twitter?.title).toBe(expectedTitle);
  //   expect(actualMetadata.twitter?.description).toBe(expectedDescription);
  // });
});
