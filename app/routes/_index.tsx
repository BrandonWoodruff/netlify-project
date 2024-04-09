import { useState } from 'react';
import Footer from '~/components/_footer';
import Header from '~/components/_header';
import Gif from '~/components/gif';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import ContactMe from '~/routes/contactMe';
import stylesheet from "~/tailwind.css?url";
import { useHistory } from 'react-router-dom'; // Import useHistory hook


export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesheet }];
}

export const meta: MetaFunction = () => {
 return [
  { title: "Brandon Woodruff" },
  { name: "description", content: "Welcome to Remix!" },
 ];
};

export default function Index() {
 const [summaryVisible, setSummaryVisible] = useState(false);
 const [skillsVisible, setSkillsVisible] = useState(false);
 const [experienceVisible, setExperienceVisible] = useState(false);
 const [summaryHighlighted, setSummaryHighlighted] = useState(false);
 const [skillsHighlighted, setSkillsHighlighted] = useState(false);
 const [experienceHighlighted, setExperienceHighlighted] = useState(false);

 const toggleExperience = () => {
  setExperienceVisible(!experienceVisible);
  setExperienceHighlighted(!experienceVisible);
 }

 const toggleSummary = () => {
  setSummaryVisible(!summaryVisible);
  setSummaryHighlighted(!summaryVisible);
 }

 const toggleSkills = () => {
  setSkillsVisible(!skillsVisible);
  setSkillsHighlighted(!skillsVisible);
 }

 return (
   <div className="relative z-10 text-white text-center">
      <header className="z-10 flex items-center justify-between">
      {/* Left side GIF */}
      <div>
        <a href='/'><Gif /></a>
      </div>
      {/* Right side items */}
      <div className="flex items-center space-x-4">
        <nav className="flex"> {/* Add flex class here */}
          <a href="https://www.linkedin.com/in/brandon-woody-woodruff/" aria-label="Brandon Woodruff on LinkedIn" target="_blank" rel="noopener" className="mr-4">
            <svg className="h-10 w-10 hover:text-gray-400" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z" fill="currentColor"></path>
            </svg>
          </a>
          <a href="https://github.com/BrandonWoodruff" target="_blank" className="hover:text-gray-400 dark:hover:text-white dark:text-gray-400">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
          </a>
        </nav>
        <a href="/contactMe" className="text-white hover:text-gray-400">
          Contact Me <ExternalLinkIcon className="w-4 h-4 inline"/>
        </a>
      </div>
    </header>
     <br/><br/>
     <h1 className="text-3xl font-bold underline">Brandon Woodruff</h1>
     <br/><br/>
     <p
       className={`transition duration-150 ease-in-out text-2xl cursor-pointer ${summaryHighlighted ? 'text-purple-400' : ''}`}
       onClick={toggleSummary}
       onMouseOver={() => setSummaryHighlighted(true)}
       onMouseOut={() => setSummaryHighlighted(false)}
     >
       Summary
     </p>
     {summaryVisible && (
       <div className="mx-auto max-w-4xl bg-white bg-opacity-50 rounded-lg text-2xl">
         Experienced IT professional with a focus on web applications and software development. Proficient in software development, adept at resolving diverse issues and delivering outstanding support in dynamic, fast-paced environments. Proficient in crafting and implementing solutions, monitoring systems, and facilitating changes. Specialized in leveraging software development skills to enhance operational efficiency and address complex challenges.
         <br></br>
       </div>
     )}
     <br></br><br></br>
     <p
       className={`text-2xl cursor-pointer ${skillsHighlighted ? 'text-purple-400' : ''}`}
       onClick={toggleSkills}
       onMouseOver={() => setSkillsHighlighted(true)}
       onMouseOut={() => setSkillsHighlighted(false)}
     >
       Skills
     </p>
     {skillsVisible && (
       <div className="mx-auto max-w-4xl bg-white bg-opacity-50 rounded-lg text-2xl flex justify-between">
         <ul className="w-1/2">
           <li><a href="https://profound-sprite-bad9f7.netlify.app/" target="_blank">HTML, CSS</a></li>
           <li><a href="https://github.com/BrandonWoodruff/DriveHubApp" target="_blank">NodeJS</a></li>
           <li><a href="https://react.dev/" target="_blank">React</a></li>
           <li> <a href="https://github.com/BrandonWoodruff/portfolio-website-real" target="_blank">Remix</a></li>
           <li><a href="https://github.com/BrandonWoodruff/PWDictionary" target="_blank">Scripting</a></li>
           <li><a href="https://isocpp.org/" target="_blank">C++</a></li>
           <li><a href="https://www.sqlservercentral.com/" target="_blank">SQL</a></li>
           <li><a href="https://github.com/BrandonWoodruff/CatchTheRacoon" target='_blank'>Python</a></li>
           <li>Java</li>
           <li>Linux</li>
           <li>Windows</li>
         </ul>
         <ul className="w-1/2">
           <li>Git</li>
           <li>GitHub</li>
           <li>C#</li>
           <li>Postman</li>
           <li>AWS</li>
           <li>Okta Development</li>
           <li>Hubspot Development</li>
           <li>MongoDB</li>
           <li>TypeScript</li>
           <li>MySQL</li>
           <li><a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a></li>
         </ul>
       </div>
     )}

     <br /><br />
     <p
       className={`text-2xl cursor-pointer ${experienceHighlighted ? 'text-purple-400' : ''}`}
       onClick={toggleExperience}
       onMouseOver={() => setExperienceHighlighted(true)}
       onMouseOut={() => setExperienceHighlighted(false)}
     >
       Experience
     </p>
     {experienceVisible && (
       <div className="mx-auto max-w-4xl bg-white bg-opacity-50 rounded-lg text-2xl">
         <br></br>
          <h3> PROJECT SOLAR – Orem, Utah</h3>
     <p>June 2021 to Current </p>
     <br></br>
          <h3> Systems Engineer</h3>
          <p>June 2022 to Present</p>
          <ul>
            <li>Oversee the management and monitoring of all installed systems and infrastructure.</li>
            <li>Install, configure, test, and maintain operating systems and applications to ensure optimal
              performance.</li>
            <li>Proactively ensure the highest levels of systems and infrastructure availability.</li>
            <li>Monitor and test application performance, identifying potential bottlenecks and
              collaborating with developers to
              implement effective solutions.</li>
            <li>Implement and maintain robust security, backup, and redundancy strategies.</li>
            <li>Develop and maintain custom scripts to enhance system efficiency and reduce human
              intervention time.</li>
            <li>Contribute to the design of information and operational support systems.</li>
            <li>Collaborate with vendors for effective problem resolution.</li>
          </ul>
          <br></br><br></br>
          <h3> Associate Systems Engineer</h3>
          <p>June 2022 to Dec 2023</p>
          <ul>
            <li>Spearheaded the establishment of the IT Department, assuming responsibility for all
              hardware, software, and
              network administration.</li>
            <li>Formulated comprehensive Standard Operating Procedures (SOPs) for security protocols and
              software utilization.
            </li>
            <li>Successfully integrated Okta into the company's infrastructure without relying on a
              third-party integration
              team, resulting in cost savings of $40,000.</li>
            <li>Demonstrated proficiency as a Zendesk administrator, actively involved in building reports
              and addressing
              various company needs.</li>
          </ul>
          <br></br><br></br><br></br><br></br>

     <h3> BLUE RAVEN SOLAR - Orem, Utah</h3>
     <p>April 2021 to June 2022</p>
     <br></br>
          <h3>Work Order Specialist</h3>
          <p>February 2022 to June 2022</p>
          <ul>
            <li>Acted as a Project Manager for “non-standard works”.</li>
          </ul>
          <br></br><br></br>
          <h3> Permit Coordinator</h3>
          <p>May 2021 to February 2022</p>
          <ul>
            <li>Worked with Jurisdictions to receive approval permits for solar.</li>
          </ul>
          <br></br><br></br>
          <h3> Proposal Coordinator</h3>
          <p>April 2021 to May 2021</p>
          <ul>
            <li>Created Project Proposals for customers using CAD and Aurora.</li>
          </ul>
       </div>
     )}
     <footer className="fixed bottom-0 right-0 z-10">
      <div className="text-white z-9 text-right">
        <p>© 2024 Brandon Woodruff  </p>
      </div>
    </footer>
   </div>
 );
}
