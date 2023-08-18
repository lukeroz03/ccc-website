import { render, screen } from "@testing-library/react";
import Constitution from "./Constitution";

test("constitution title shows up on screen", () => {
	render(<Constitution />);
	const linkElement = screen.getByText(/Christendom College Coding Club Constitution/i);
	expect(linkElement).toBeInTheDocument();
});

test("constitution headings show up on screen", () => {
	render(<Constitution />);
	const linkElement = screen.getByText(/article one/i);
	expect(linkElement).toBeInTheDocument();
});

test("constitution text shows up on screen", () => {
	render(<Constitution />);
	const linkElement = screen.getByText(/The organization is not affiliated with any national or state organization./i);
	expect(linkElement).toBeInTheDocument();
});

