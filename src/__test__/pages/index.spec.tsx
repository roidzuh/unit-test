import React from "react";
import { render } from "@testing-library/react";
import Home from "@/pages";

describe("home page", () => {
  it("should handle render homepage", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it("should handle text in homepage", () => {
    const { getByText } = render(<Home />);
    expect(
      getByText("Learn about Next.js in an interactive course with quizzes!")
    ).toBeInTheDocument();
  });

  it("should handle element use role in homepage", () => {
    const { getByRole } = render(<Home />);
    expect(getByRole("subtitle")).toBeInTheDocument();
  });
});
