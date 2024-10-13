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
  

  jest.mock('@/components/ui/tag-card/TagCard', () => ({
    __esModule: true,
    default: ({ tag }: { tag: Tag }) => (<div data-testid={`tag-card-${tag.id}`}>{tag.attributes.name}</div>),
  }));


// Mock the fetchTags function
(fetchTags as jest.Mock).mockResolvedValue({ data: mockSeveralTags });


/**
 * Test suite for the Tags Page component
 */
describe('Tags Page', () => {





  describe('Unit Tests', () => {



    /**
     * Test case: Verify that all MockTagCard components are rendered
     */
    it('renders all MockTagCard components', async () => {
      // Arrange: Render the Tags component
      render(await Tags({}));

      // Act: Find all rendered MockTagCard components
      const renderedMockTagCards = screen.getAllByTestId(/^tag-card-/);

      // Assert: Check if the correct number of MockTagCard components are rendered
      expect(renderedMockTagCards).toHaveLength(mockSeveralTags.length);

      // Assert: Check if each MockTagCard has the correct content
      mockSeveralTags.forEach((tag) => {
        const mockTagCard = screen.getByTestId(`tag-card-${tag.id}`);
        expect(mockTagCard).toHaveTextContent(tag.attributes.name);
      });
    });

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

    beforeAll(() => {
      jest.resetModules();
      jest.unmock('@/components/ui/tag-card/TagCard');
      
    });

    /**
     * Test case: Verify that TagCard components are rendered with correct data
     */
    it('renders TagCard components with correct data', async () => {
      // Arrange: Mock the API response
      global.serverMock.onGet('/api/tags').reply(200, { data: mockSeveralTags });

      // Act: Render the Tags component
      render(await Tags({}));

      // Assert: Check if each TagCard is rendered with correct data
      mockSeveralTags.forEach((tag) => {
        const tagCard = screen.getByTestId(`tag-card-${tag.id}`);
        expect(tagCard).toBeInTheDocument();
        expect(tagCard).toHaveTextContent(tag.attributes.name);
        expect(tagCard).toHaveTextContent(`${tag.attributes.articles?.data.length} articles`);
      });
    });

    /**
     * Test case: Verify that TagCard components have correct links
     */
    it('renders TagCard components with correct links', async () => {
      // Arrange: Mock the API response
      global.serverMock.onGet('/api/tags').reply(200, { data: mockSeveralTags });

      // Act: Render the Tags component
      render(await Tags({}));

      // Assert: Check if each TagCard has the correct link
      mockSeveralTags.forEach((tag) => {
        const tagLink = screen.getByRole('link', { name: tag.attributes.name });
        expect(tagLink).toHaveAttribute('href', `/tags/${tag.attributes.name.toLowerCase()}`);
      });
    });

    /**
     * Test case: Verify that TagCard components display the correct number of articles
     */
    it('displays correct number of articles for each TagCard', async () => {
      // Arrange: Mock the API response
      global.serverMock.onGet('/api/tags').reply(200, { data: mockSeveralTags });

      // Act: Render the Tags component
      render(await Tags({}));

      // Assert: Check if each TagCard displays the correct number of articles
      mockSeveralTags.forEach((tag) => {
        const tagCard = screen.getByTestId(`tag-card-${tag.id}`);
        const articleCount = tag.attributes.articles?.data.length || 0;
        expect(tagCard).toHaveTextContent(`${articleCount} article${articleCount !== 1 ? 's' : ''}`);
      });
    });

    /**
     * Test case: Verify that TagCard components have the correct styling
     */
    it('applies correct styling to TagCard components', async () => {
      // Arrange: Mock the API response
      global.serverMock.onGet('/api/tags').reply(200, { data: mockSeveralTags });

      // Act: Render the Tags component
      render(await Tags({}));

      // Assert: Check if each TagCard has the correct styling classes
      mockSeveralTags.forEach((tag) => {
        const tagCard = screen.getByTestId(`tag-card-${tag.id}`);
        expect(tagCard).toHaveClass('bg-white', 'dark:bg-gray-800', 'rounded-lg', 'shadow-md', 'p-6');
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
});
