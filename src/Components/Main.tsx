import React from 'react';
import CoverLetter from './CoverLetter'

function MainComponent() {
    const [companyName, setCompanyName] = React.useState("");
    const [role, setRole] = React.useState("");
    const [blurb, setBlurb] = React.useState("");

    return (
        <div>
            {/* Form to generate cover letter */}
            <h1>Cover Letter Generator</h1>
            <hr />
            <h3>Company Name</h3>
            <h3>Role</h3>
            <h3>Short Blurb about what the company does</h3>
            <hr />
            {/* Put actual cover letter here */}
            <CoverLetter 
                companyName="Palantir" 
                role="Software Engineer, New Grad" 
                blurb="develop a data processing platform for use in many verticals such as investigation and government operations" 
            />
        </div>
    );
}

export default MainComponent;
