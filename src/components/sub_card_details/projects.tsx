'use client'
import Image from 'next/image';
import userData from "@/jsondata/portfolioData.json"
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useState } from 'react';
interface project {
   Image: string,
   title: string,
   Company: string,
   description: string[],
   technologiesUsed: string
}
const projectDetails = {
   Image: "",
   title: "",
   Company: "",
   description: [],
   technologiesUsed: ""

}
const Projects = () => {
   const [open, setOpen] = useState(false);
   const [projectData, setProjectData] = useState<project>(projectDetails);
   const openDialog = (data: project) => {
      setOpen(true);
      setProjectData(data);
   }
   const closeDialog = () => {
      setOpen(!open);
      setProjectData(projectDetails);
   }

   return (
      <>
         <div className="content sidebar">
            <div className="flex items-center">
               <h1>PROJECTS</h1>
               <div className="border"></div>
            </div>
            <section className="skills">
               {userData.work.Projects.map((x: project, index: number) =>
                  <div className="project-card" key={index} onClick={() => openDialog(x)}  >
                     <Image
                        src={x.Image}
                        alt={x.title}
                        width={300}
                        height={200}
                        className="project-img"
                     />
                     <p className="light-text" style={{ fontSize: '10px' }}>{x.Company}</p>
                     <p className="text">{x.title}</p>
                  </div>
               )
               }

            </section>
            <Dialog
               open={open}
               keepMounted
               scroll={'paper'}
               onClose={() => closeDialog()}
               aria-describedby="scroll-dialog-description"
               aria-labelledby="scroll-dialog-title"
               sx={{
                  '& .MuiDialog-paper': {
                     height: '400px',
                  },
               }}
            >
               <DialogTitle>{projectData?.title}</DialogTitle>
               <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description" component="ul" className="rounded-bullet-list">
                     {projectData?.description.map((x: string, index: number) => (
                        <li key={index} className='m-3'>{x}</li>
                     ))}
                     <strong>Technologies used:</strong> {projectData?.technologiesUsed}
                  </DialogContentText>
               </DialogContent>
               <DialogActions>
                  <Button onClick={() => closeDialog()}>Close</Button>
               </DialogActions>
            </Dialog>
         </div>
      </>
   )
}

export default Projects;