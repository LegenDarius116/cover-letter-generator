import React from 'react';
import * as data from './data.json';

function CoverLetter(props: any) {
    /** Takes in string data and plugs them into this predefined template to generate a cover letter for me. */
    let companyName = props.companyName ? props.companyName : "<Company Name>";
    let role = props.role ? props.role : "<Role Title>";
    let interest = props.interest ? props.interest: "<Interest>";
    let description = props.description ? props.description : "<Role Description>";
    let blurb = props.blurb ? props.blurb : "<Blurb>";

    /** Plugs in data from props into the paragraphs in data.json */
    let compTag = /<company>/gi;
    let roleTag = /<role>/gi;
    let interestTag = /<interest>/gi;
    let descTag = /<description>/gi;
    let blurbTag = /<blurb>/gi;

    // render the final cover letter
    // elements had to be "unfolded", here. Otherwise, the cover letter wouldn't render in real-time like it did before.
    return (
        <div className="generated-cover-letter">
            <p>{data.paragraphs[0].replace(compTag, companyName)}</p>

            <p data-testid="clp1">
                {data.paragraphs[1].replace(roleTag, role).replace(interestTag, interest).replace(descTag, description)}
            </p>

            <p data-testid="clp2">
                {data.paragraphs[2].replace(compTag, companyName)}
            </p>

            <p data-testid="clp3">
                {data.paragraphs[3].replace(compTag, companyName).replace(blurbTag, blurb)}
            </p>

            <p>{data.paragraphs[4]}</p>
            <p>{data.paragraphs[5]}</p>
        </div>
    );
}

export default CoverLetter;
