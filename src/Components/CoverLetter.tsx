import React from 'react';

function CoverLetter(props: any) {
    /** Takes in string data and plugs them into this predefined template to generate a cover letter for me. */
    let companyName = props.companyName ? props.companyName : "<Company Name>";
    let role = props.role ? props.role : "<Role Title>";
    let description = props.description ? props.description : "<Role Description>";
    let blurb = props.blurb ? props.blurb : "<Blurb>";

    return (
        <div className="generated-cover-letter">
            <p>Dear {companyName} Hiring Manager,</p>
            <p data-testid="clp1">
                My name is Darius, I am excited to be applying for your {role} position. 
                I’ve had a lifelong interest in building digital things—small games, websites, and mobile applications to name a few. 
                I began programming when I was 13, and over the years, my passion for driving the world forward through technology 
                has grown tremendously. No matter the tech stack, no matter the business vertical, 
                I’m ready to hit the ground running to build meaningful systems that {description}.
            </p>
            <p data-testid="clp2">
                During my previous role as a Software Engineering Intern at Cox Automotive, I worked as part of an agile 
                scrum team to develop and maintain DocCenter, an API that handles important digital documents such as contracts and leases.
                During that internship, my first project was to create a python library that interacts with company files stored on Amazon S3. 
                I was new to professional software development and having to work with AWS as my first task was rather daunting. To start, 
                I immersed myself in S3’s documentation, as well as existing code that also interacts with our data on the cloud. I dove deep 
                and quickly got to work, experimenting frequently and iterating from there until I got the results that I wanted. But even 
                when I developed the core functionality, my code was still far from professional. The people on my team were relentless in 
                their code reviews, which I'm grateful for because, without it, I would’ve never improved. I learned about unit testing, 
                code documentation, and building Jenkins pipelines to introduce continuous integration. Finally, after my PR was 
                merged, I was able to deliver a Python library that operate on our data on S3 faster than the existing API. 
                What took seconds using the API now took milliseconds with the library. I completed this project 
                with a sense of pride, a sharpened ability to learn on the job, as well as a hunger to contribute more to what Cox 
                Automotive delivers, which is a paperless solution for car dealerships. I believe I can do the same here at {companyName}.
            </p>
            <p data-testid="clp3">
                Those opportunities for growth are what draw me to organizations like {companyName} who {blurb}. 
                I believe that my skills and experiences will equip me to serve you well as an engineer in that mission. 
                Thank you for your time and consideration. I hope to hear from you soon!
            </p>
            <p>Regards,</p>
            <p>Darius Lance T. San Agustin</p>
        </div>
    );
}

export default CoverLetter;
