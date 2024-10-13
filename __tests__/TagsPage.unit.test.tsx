import React from "react";
import { render, screen } from "@testing-library/react";
import Tags, { metadata } from "../src/app/tags/page";
import { fetchTags } from "@/libs/axiosServer";
import { Tag } from "@/interfaces/Tag";
import { mockSeveralTags } from "../__mocks__/mockSeveralTags";
import TagCard from "@/components/ui/tag-card/TagCard";

// Mock the fetchTags function
jest.mock("@/libs/axiosServer", () => ({
  fetchTags: jest.fn(),
}));

jest.mock("@/components/ui/tag-card/TagCard", () => ({
  __esModule: true,
  default: ({ tag }: { tag: Tag }) => (
    <div data-testid={`tag-card-${tag.id}`}>{tag.attributes.name}</div>
  ),
}));

// Mock the fetchTags function
(fetchTags as jest.Mock).mockResolvedValue({ data: mockSeveralTags });

/**
 * Test suite for the Tags Page component
 */
describe("Tags Page Unit Tests", () => {
  describe("Tags Page Content", () => {
    /**
     * Test case: Verify that all MockTagCard components are rendered
     */
    it("renders all MockTagCard components", async () => {
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
    it("has correct layout and styling", async () => {
      // Arrange: Render the Tags component
      const { container } = render(await Tags({}));

      // Act: Find main and section elements
      const main = container.querySelector("main");
      const section = container.querySelector("section");

      // Assert: Check if main and section have the correct classes
      expect(main).toHaveClass("container lg:max-w-screen-lg");
      expect(section).toHaveClass(
        "flex flex-col items-center gap-9 px-6 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3",
      );
    });
  });

  describe("Tags Page Metadata", () => {
    it("defines correct metadata", () => {
      // Assert: Check if the metadata object is correctly defined
      expect(metadata).toEqual({
        title: "Aniss.dev | Les tags",
        description: "Explorez ici les differenttes thématiques abordées sur le blog.",
        openGraph: {
          title: "Aniss.dev | Les tags",
          description: "Explorez ici les differenttes thématiques abordées sur le blog.",
          type: "website",
        },
        twitter: {
          card: "summary_large_image",
          title: "Aniss.dev | Les tags",
          description: "Explorez ici les differenttes thématiques abordées sur le blog.",
        },
      });
    });
  });
});
