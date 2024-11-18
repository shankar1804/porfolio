import userData from "@/jsondata/portfolioData.json"
const Resume = () => {
   return (
      <>
         <div className="content sidebar">
            <div className="flex items-center">
               <h1>RESUME</h1>
               <div className="border"></div>
            </div>
            <section className="resume">
               <section className="qualification">
                  <h2 className="subHeading" style={{ textAlign: "start" }}>Education</h2>
                  {userData.resume.education.map((x: { year: string, course: string, university: string }, index: number) =>
                     <div className="qualification-card" key={index}>
                        <p className="light-text">{x.year}</p>
                        <p className="text">{x.course}</p>
                        <p className="text">{x.university}</p>
                     </div>
                  )}
               </section>
               <section className="qualification">
                  <h3 className="subHeading" style={{ textAlign: "start" }}>Experience</h3>
                  {userData.resume.experience.map((x: { year: string, role: string, Company: string }, index: number) =>
                     <div className="qualification-card" key={index}>
                        <p className="light-text">{x.year}</p>
                        <p className="text">{x.role}</p>
                        <p className="text">{x.Company}</p>
                     </div>
                  )}
               </section>
               <section className="skills-column">
                  <section className="qualification" style={{ gap: '20px' }}>
                     <p className="subHeading" >Work Skills</p>
                     <div className="skills-container">
                        {userData.resume.Skills.map((x: string, index: number) =>
                           <div className="skill-btn" key={index}>{x}</div>
                        )}
                     </div>
                  </section>
               </section>
            </section>
         </div>
      </>
   )
}

export default Resume;