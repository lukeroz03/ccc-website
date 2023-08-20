import { render, screen } from "@testing-library/react";
import Project from "./Project";

test("project name shows up on screen", () => {
  const stupidProject = { name: "Stupid Project", link: "https://www.google.com", description: "description" };
  render(<Project project={stupidProject} />);
  const linkElement = screen.getByText(/Stupid Project/i);
  expect(linkElement).toBeInTheDocument();
});

test("project link shows up on screen", () => {
  const stupidProject = { name: "Stupid Project", link: "https://www.google.com", description: "description" };
  render(<Project project={stupidProject} />);
  const linkElement = screen.getByText(/google/i);
  expect(linkElement).toBeInTheDocument();
});

test("project description shows up on screen", () => {
  const stupidProject = { name: "Stupid Project", link: "https://www.google.com", description: "description" };
  render(<Project project={stupidProject} />);
  const linkElement = screen.getByText(/description/i);
  expect(linkElement).toBeInTheDocument();
});
