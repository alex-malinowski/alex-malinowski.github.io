import React from 'react';

const Resume = () => {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <section>
                <h3>Education</h3>
                <p><strong>Bachelor of Science, Information Technology – Cyber Security</strong><br />
                University of Pittsburgh at Greensburg, Greensburg, PA<br />
                <em>Expected Graduation: April 2026</em></p>
                <p><strong>Minor:</strong> Computer Science</p>
            </section>
            <section>
                <h3>Certifications</h3>
                <ul>
                    <li>Testout – Network Pro (4/24/24)</li>
                    <li>Linux Pro (12/13/24)</li>
                    <li>Security Pro (12/14/23)</li>
                </ul>
            </section>
            <section>
                <h3>Relevant Work Experience</h3>
                <p><strong>IT Support Analyst Intern, Levin Furniture</strong> – Smithton, PA<br />
                <em>January – April 2025</em></p>
                <ul>
                    <li>Corporate help desk support on-site; remote and travel to 28 retail locations</li>
                    <li>Utilized Freshdesk Ticketing System, VoIP and in-person technical assistance</li>
                    <li>Azure Hybrid Cloud Network; Windows AD + 365 Admin for user and license management</li>
                    <li>Troubleshooting, updating, securing Windows, iOS, Android systems</li>
                    <li>Documenting issues and resolutions; maintenance of internal guides</li>
                </ul>
                <p><strong>IT Intern, Cloudcast Computing</strong> – Greensburg, PA<br />
                <em>January – June 2024</em></p>
                <ul>
                    <li>Delivered help desk support on-site; remote and travel to 8 additional locations</li>
                    <li>Utilized Incident IQ Ticketing System, VoIP and in-person technical assistance</li>
                    <li>Provided monitoring, deployment, and remote support using TeamViewer, Filewave, and AnyDesk</li>
                    <li>Maintained and configured Juniper Switches and Mist Access Points</li>
                    <li>Reimaging server using Windows Server and Windows Deployment Services</li>
                </ul>
            </section>
            <section>
                <h3>Skills</h3>
                <ul>
                    <li>Operating Systems: Windows, MacOS, Linux (Kali, Ubuntu)</li>
                    <li>Software: Office365, Google Workspace</li>
                    <li>Networking: Configuring VLANs, NAT, Firewalls, DHCP, DNS</li>
                    <li>Programming: Python, Java, HTML, CSS, JS, React</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;