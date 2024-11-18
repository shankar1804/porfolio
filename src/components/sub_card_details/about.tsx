import userData from "@/jsondata/portfolioData.json"
const about = () => {
   return (
      <>
         <div className="content sidebar">
            <div className="flex items-center">
               <h1>ABOUT ME</h1>
               <div className="border"></div>
            </div>
            <div className="aboutMe" >
               <p style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>{userData.home.description}</p>
            </div>

            {/* <section className="skills">
               {userData.home.SkillsAndTechnologies.map(skill =>
                  <div className="skill-card" key={skill.id} style={{ backgroundColor: (skill.id % 3 === 1 || skill.id % 4 === 0) ? '#FFEBD1' : '#F2F7FC' }}>
                     <h3 >{skill.title}</h3>
                     <p>{skill.value}</p>
                  </div>
               )}
            </section> */}
         </div>
      </>
   )
}

export default about;