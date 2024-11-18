'use client'
import { Dispatch, SetStateAction } from "react"
interface tab {
   name: string,
   value: string,
   icon: string
}
interface Props {
   tabs: tab[],
   setTabName: Dispatch<SetStateAction<string>>,
   tabname: string
}

const Tabs = ({ tabs, setTabName, tabname }: Props) => {

   return (
      <>
         <div className="tab-container">
            {tabs.map((tab: tab, index: number) => (
               <button
                  className={tabname == tab.value ? "tab active" : "tab"}
                  key={index}
                  onClick={() => setTabName(tab.value)}
               >
                  <div className="tab-icon">
                     <i className={tab.icon}></i>
                  </div>
                  {tab.name}
               </button>
            ))}
         </div>
      </>
   )
}
export default Tabs