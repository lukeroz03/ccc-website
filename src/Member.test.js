import { render, screen } from "@testing-library/react";
import Member from "./Member";

test("member name shows up on screen", () => {
  const bob = { name: "Bob", link: "https://www.google.com", class: "2035" };
  render(<Member member={bob} />);
  const linkElement = screen.getByText(/Bob/i);
  expect(linkElement).toBeInTheDocument();
});
test("member link shows up on screen", () => {
  const bob = { name: "Bob", link: "https://www.google.com", class: "2035" };
  render(<Member member={bob} />);
  const linkElement = screen.getByText(/google/i);
  expect(linkElement).toBeInTheDocument();
});
test("member class shows up on screen", () => {
  const bob = { name: "Bob", link: "https://www.google.com", class: "2035" };
  render(<Member member={bob} />);
  const linkElement = screen.getByText(/2035/i);
  expect(linkElement).toBeInTheDocument();
});
