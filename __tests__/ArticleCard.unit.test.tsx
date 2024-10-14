// Import necessary dependencies
import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleCard from "../src/components/ui/article-card/ArticleCard";
import { mockArticle } from "../__mocks__/mockArticle";


describe("ArticleCard unit tests", () => {
  // Test case: Verify that the article title is rendered correctly
  it("renders the article title", () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText("Article test")).toBeInTheDocument();
  });

  // Test case: Check if all article tags are displayed
  it("displays the article tags", () => {
    // Render the ArticleCard component with the mock article
    render(<ArticleCard article={mockArticle} />);

    // Iterate through each tag in the mockArticle's tags data
    mockArticle.attributes.tags.data.forEach((tag) => {
      // For each tag, check if its name is rendered in the document
      // The tag name should be prefixed with a '#' symbol
      expect(screen.getByText(`#${tag.attributes.name}`)).toBeInTheDocument();
    });
  });

  // Test case: Ensure the article date is shown correctly
  it("shows the article date", () => {
    // Render the ArticleCard component with the mock article
    render(<ArticleCard article={mockArticle} />);

    // Use a custom function to find the date element
    const dateElement = screen.getByText((content, element) => {
      // Ensure the element is an h3 tag
      if (element?.tagName.toLowerCase() !== "h3") return false;

      // Check if the content includes the day (10)
      const hasDay = content.includes("10");

      // Check if the element's text content includes the month (sep)
      const hasMonth = element.textContent?.toLowerCase().includes("sep");

      // Return true if both day and month are present or false if not so we are sure to return a boolean
      return (hasDay && hasMonth) || false;
    });

    // Assert that the date element is in the document
    expect(dateElement).toBeInTheDocument();
  });

  // Test case: Verify that the article summary is rendered
  it("renders the article summary", () => {
    // Render the ArticleCard component with the mock article
    render(<ArticleCard article={mockArticle} />);

    // Check if the article summary is rendered in the document
    expect(
      screen.getByText("This is a test article summary"),
    ).toBeInTheDocument();
  });

  // Test case: Check if the article image is displayed with correct attributes
  it("displays the article image", () => {
    // Render the ArticleCard component with the mock article
    render(<ArticleCard article={mockArticle} />);

    // Check if the article image is rendered in the document
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
    expect(image).toHaveAttribute("alt", "CoverImage");
  });

  // Test case: Ensure the component matches the snapshot
  it("matches snapshot", () => {
    // Render the ArticleCard component with the mock article
    const { asFragment } = render(<ArticleCard article={mockArticle} />);

    // Check if the snapshot matches the rendered component
    expect(asFragment()).toMatchSnapshot();
  });

});
