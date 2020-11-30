import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Generator from './Components/Generator'

const inputIDs = [
    "company-input", 
    "role-input", 
    "desc-input", 
    "blurb-input",
    "interest-input"
];

const inputs = [
    "Atlas Corporation", 
    "Nuclear Weapons Engineer", 
    "improve legacy defense systems", 
    "build systems for the defense of our nation",
    "I want to use my skills in the defense of the United States"
];

test("Test that inputs follow their values", () => {
    render(<Generator />);

    for (let i = 0; i < inputIDs.length; ++i) {
        let input = screen.getByTestId(inputIDs[i]) as HTMLInputElement;
        fireEvent.change(input, {target: {value: inputs[i]}});

        expect(input.value).toBe(inputs[i]);
    }
});

test("Test that inputs change generated cover letter", () => {
    render(<Generator />);

    // apply inputs
    for (let i = 0; i < inputIDs.length; ++i) {
        let input = screen.getByTestId(inputIDs[i]) as HTMLInputElement;
        fireEvent.change(input, {target: {value: inputs[i]}});
    }

    // test paragraph elements
    for (let i = 1; i <= 3; ++i) {
        let p = screen.getByTestId(`clp${i}`) as HTMLParagraphElement;

        if (i == 1) {
            expect(p.textContent).toMatch(`applying for your ${inputs[1]} position.`);
            expect(p.textContent).toMatch(`systems that ${inputs[2]}.`);
            expect(p.textContent).toMatch(`this role because ${inputs[4]}.`)
        }
        else if (i == 2) {
            expect(p.textContent).toMatch(`here at ${inputs[0]}.`);
        }
        else {
            expect(p.textContent).toMatch(`organizations like ${inputs[0]} who ${inputs[3]}.`);
        }
    }
});
