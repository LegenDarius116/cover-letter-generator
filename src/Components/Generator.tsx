import React from 'react';
import CoverLetter from './CoverLetter'

function Generator() {
    const [companyName, setCompanyName] = React.useState("");
    const [role, setRole] = React.useState("");
    const [blurb, setBlurb] = React.useState("");

    return (
        <div>
            {/* Form to generate cover letter. It plugs in data to a predefined template. */}
            <h1>Cover Letter Generator</h1>
            <p>Provide the company name, role, and a short blurb to create a tailored cover letter!</p>
            <hr />
            <form onSubmit={e => e.preventDefault()}>
                <label>
                    Company Name
                    <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)}/>
                </label>
                <label>
                    Role
                    <input type="text" value={role} onChange={e => setRole(e.target.value)}/>
                </label>
                <label>
                    Short Blurb on Company
                    <textarea value={blurb} onChange={e => setBlurb(e.target.value)} className="boxBorder"/>
                </label>
            </form>
            <hr />

            {/* Put actual generated cover letter here */}
            <CoverLetter companyName={companyName} role={role} blurb={blurb}/>

            {/* Some Dummy Data
            <CoverLetter 
                companyName="Palantir"
                role="Software Engineer, New Grad" 
                blurb="develop a data processing platform for use in many verticals such as investigation and government operations" 
            />
            */}
        </div>
    );
}

export default Generator;
