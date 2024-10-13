import React from "react";
import { render, screen } from "@testing-library/react";
import Tags from "../src/app/tags/page";
import { fetchTags } from "@/libs/axiosServer";
import { mockSeveralTags } from "../__mocks__/mockSeveralTags";
import TagCard from "@/components/ui/tag-card/TagCard";
import { generateMetadata } from "../src/app/tags/[name]/page";
import { fetchTagByName } from "@/libs/axiosServer";

// Mock the fetchTags function
jest.mock("@/libs/axiosServer", () => ({
  fetchTags: jest.fn(),
}));



// Mock the fetchTags function to return mockSeveralTags
(fetchTags as jest.Mock).mockResolvedValue({ data: mockSeveralTags });

/**
 * Integration tests for the Tags Page component
 */
describe("Tags Page and TagCard Integration Tests", () => {
  /**
   * Test case: Verify that all tags are rendered
   */
  it("renders all tags", async () => {
    // Arrange: Set up the expected tag count
    const expectedTagCount = mockSeveralTags.length;

    // Act: Render the Tags component and find all article elements
    const { findAllByRole } = render(await Tags({}));
    const tagCards = await findAllByRole("article");

    // Assert: Check if the number of rendered tag cards matches the expected count
    expect(tagCards).toHaveLength(expectedTagCount);
  });

  /**
   * Test case: Verify that TagCard components are rendered with correct data
   */
  it("renders TagCard components with correct data", async () => {
    // Arrange: Set up the expected tags data
    const expectedTags = mockSeveralTags;

    // Act: Render the Tags component
    render(await Tags({}));

    // Assert: Check if each tag's data is correctly rendered
    for (const tag of expectedTags) {
      // Check if tag name is rendered
      expect(screen.getByText(`#${tag.attributes.name}`)).toBeInTheDocument();
      // Check if article count is rendered
      expect(
        screen.getByText(`${tag.attributes.articles?.data.length} Articles`),
      ).toBeInTheDocument();

      // Check if tag image is rendered with correct attributes
      const image = screen.getByAltText(
        tag.attributes.cover.data.attributes.alternativeText,
      );
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute(
        "src",
        expect.stringContaining(
          tag.attributes.cover.data.attributes.formats.thumbnail.url,
        ),
      );
    }
  });

  /**
   * Test case: Verify that TagCard components have correct links
   */
  it("renders TagCard components with correct links", async () => {
    // Arrange: Set up the expected tags data
    const expectedTags = mockSeveralTags;

    // Act: Render the Tags component and get all article elements
    render(await Tags({}));
    const tagCards = screen.getAllByRole("article");

    // Assert: Check if each tag card has the correct link
    for (const tag of expectedTags) {
      // Find the tag card for the current tag
      const tagCard = tagCards.find((card) =>
        card.textContent?.includes(`#${tag.attributes.name}`),
      );
      expect(tagCard).toBeTruthy();

      if (tagCard) {
        // Check if the link in the tag card has the correct href attribute
        const link = tagCard.querySelector("a");
        expect(link).toHaveAttribute(
          "href",
          `/tags/${tag.attributes.name.toLowerCase()}`,
        );
      }
    }
  });

  /**
   * Test case: Verify the correct number of TagCard components are rendered
   */
  it("renders the correct number of TagCard components", async () => {
    // Arrange: Set up the expected tag count
    const expectedTagCount = mockSeveralTags.length;

    // Act: Render the Tags component and get all article elements
    render(await Tags({}));
    const tagCards = screen.getAllByRole("article");

    // Assert: Check if the number of rendered tag cards matches the expected count
    expect(tagCards).toHaveLength(expectedTagCount);
  });

  /**
   * Test case: Verify that the Tags component matches the snapshot
   */
  it("matches snapshot", async () => {
    // Arrange & Act: Render the Tags component
    const { asFragment } = render(await Tags({}));

    // Assert: Check if the rendered component matches the snapshot
    expect(asFragment()).toMatchSnapshot();
  });

 
});
