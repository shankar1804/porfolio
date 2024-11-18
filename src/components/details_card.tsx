'use client'

import { useState } from "react";
import Tabs from "./menu"
import About from "./sub_card_details/about";
import Resume from "./sub_card_details/resume";
import Projects from "./sub_card_details/projects";
import Contact from "./sub_card_details/contact";
export const tabs = [
   { name: 'Home', value: 'home', icon: 'ri-home-4-line' },
   { name: 'Resume', value: 'resume', icon: 'ri-article-line' },
   { name: 'Work', value: 'work', icon: 'ri-briefcase-line' },
   { name: 'Contact', value: 'contact', icon: 'ri-contacts-book-3-line' },
]
const Details_card = () => {
   const [tabname, setTabName] = useState<string>('home');

   return (
      <>
         <div className="profile-details">
            <div className="card-content">
               <Tabs tabs={tabs} setTabName={setTabName} tabname={tabname} />
            </div>
            {tabname == 'home' && <About></About>}
            {tabname == 'resume' && <Resume></Resume>}
            {tabname == 'work' && <Projects></Projects>}
            {tabname == 'contact' && <Contact></Contact>}
         </div>
      </>
   )
}
export default Details_card;