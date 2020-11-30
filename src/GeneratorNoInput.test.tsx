import React from 'react';
import { render, screen } from '@testing-library/react';
import Generator from './Components/Generator'

test("Test First Paragraph with no data provided", () => {
  render(<Generator />);
  let p1 = screen.queryByTestId("clp1") as HTMLParagraphElement;

  expect(p1?.textContent).toMatch("applying for your <Role Title> position.");
  expect(p1?.textContent).toMatch("systems that <Role Description>.");
});

test("Test Second Paragraph with no data provided", () => {
  render(<Generator />);
  let p2 = screen.queryByTestId("clp2") as HTMLParagraphElement;
  
  expect(p2?.textContent).toMatch("here at <Company Name>.");
});

test("Test Third Paragraph with no data provided", () => {
  render(<Generator />);
  let p3 = screen.queryByTestId("clp3") as HTMLParagraphElement;

  expect(p3?.textContent).toMatch("organizations like <Company Name> who <Blurb>.");
});
