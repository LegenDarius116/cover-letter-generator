import React from 'react';

function CoverLetter(props: any) {
    /** Takes in company name, role, and blurb as strings. It plugs them into this predefined template to
     *  generate a cover letter for me.
     */
    let companyName = props.companyName ? props.companyName : "<>";
    let role = props.role ? props.role : "<>";
    let blurb = props.blurb ? props.blurb : "<>";

    return (
        <div>
            <p>Dear {companyName} Hiring Manager,</p>
            <p>
                My name is Darius, I am excited to be applying for your {role} position. 
                I’ve had a lifelong interest in building digital things—small games, websites, and mobile applications to name a few. 
                I began programming when I was 13, and over the years, my passion for driving the world forward through technology 
                has grown tremendously. No matter the tech stack, no matter the business vertical, 
                I’m ready to hit the ground running to build meaningful systems that improve the health of its users.
            </p>
            <p>
                During my previous role as a Software Engineering Intern at Cox Automotive, I worked as part of an agile 
                scrum team on a web platform written in Python. Specifically, we maintained an internal Python API, DocCenter, 
                that handles important digital documents such as contracts and leases. During that internship, my first project 
                was to create a python library that interacts with company files stored on Amazon S3. I was completely new to software 
                development in a professional setting and having to work with AWS as my first task was rather daunting. I immersed myself 
                in Amazon S3’s documentation, as well as existing company code that also interacts with our data on the cloud. I dove deep 
                and quickly got to work, experimenting frequently and iterating from there until I got the results that I wanted. But even 
                when I developed the core functionality, my code was still far from professionals. The people on my team were relentless in 
                their code reviews, and I am grateful for that because, without it, I would’ve never improved. I learned about unit testing 
                and test automation, as well as building Jenkins pipelines to introduce continuous integration. Finally, after my PR was 
                merged, I was able to deliver a python library that can interact with our data on S3 faster than the existing API that 
                did the same thing. What took seconds to do using the API now took milliseconds with the library. I completed this project 
                with a sense of pride, a sharpened ability to learn on the job, as well as a hunger to contribute more to what Cox 
                Automotive delivers, which is a paperless, environmentally friendly solution for car dealerships. I believe I can do the 
                same here at {companyName}.
            </p>
            <p>
                It’s opportunities for growth like that that draws me to organizations like {companyName} who {blurb}. 
                I believe that my skills and experiences will equip me to serve you well as an engineer in that mission. 
                Thank you for your time and consideration. I hope to hear from you soon!
            </p>
            <p>Regards,</p>
            <p>Darius Lance T. San Agustin</p>
        </div>
    );
}

export default CoverLetter;
