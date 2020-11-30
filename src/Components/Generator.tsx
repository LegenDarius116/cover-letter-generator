import React from 'react';
import CoverLetter from './CoverLetter'

function Generator() {
    const [companyName, setCompanyName] = React.useState("");
    const [role, setRole] = React.useState("");
    const [roleDesc, setDesc] = React.useState("");
    const [interest, setInterest] = React.useState("");
    const [blurb, setBlurb] = React.useState("");

    return (
        <div>
            {/* Form to generate cover letter. It plugs in data to a predefined template. */}
            <h1>Cover Letter Generator</h1>
            <p>
                Provide the company name, role, a short description of role responsibilities, 
                and a short blurb to create a tailored cover letter!
            </p>
            <hr />
            <form onSubmit={e => e.preventDefault()}>
                <label>
                    Company Name
                    <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} data-testid="company-input"/>
                </label>
                <label>
                    Role
                    <input type="text" value={role} onChange={e => setRole(e.target.value)} data-testid="role-input"/>
                </label>
                <label>
                    Why You're Excited about the Role
                    <textarea value={interest} onChange={e => setInterest(e.target.value)} className="boxborder" data-testid="interest-input"/>
                </label>
                <label>
                    Short Description of Role
                    <textarea value={roleDesc} onChange={e => setDesc(e.target.value)} className="boxBorder" data-testid="desc-input"/>
                </label>
                <label>
                    Short Blurb on Company
                    <textarea value={blurb} onChange={e => setBlurb(e.target.value)} className="boxBorder" data-testid="blurb-input"/>
                </label>
            </form>
            <hr />

            {/* Put actual generated cover letter here */}
            <CoverLetter companyName={companyName} role={role} interest={interest} description={roleDesc} blurb={blurb}/>

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
