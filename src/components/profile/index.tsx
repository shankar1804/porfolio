'use client'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Image from 'next/image'
import userData from "@/jsondata/portfolioData.json";


const profile = () => {
   /**
    * open web links in new tab
    */
   const openLinkInNewTab = (url: string) => {
      window.open(url, '_blank');
   }
   /**
    * download resume
    */
   const downloadResume = () => {
      fetch('/api/download')
         .then(response => response.blob())
         .then(blob => {
            const link = document.createElement('a');
            const url = window.URL.createObjectURL(blob);
            link.href = url;
            link.setAttribute('download', userData.PersonalDetails.resumeName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
         })
         .catch(error => console.error('Error downloading file:', error));
   }

   return (
      <>
         <div className="sidebar" style={{ marginTop: '70px' }}>
            <div style={{ position: 'relative', top: '-80px' }}>
               <Image
                  src={userData.PersonalDetails.profilePic}
                  alt="Uma Shankar"
                  width={180}
                  height={180}
                  className="profile-img"
               />
            </div>

            <div className="profile" >
               <h2 style={{ fontSize: '1.5rem', margin: '0' }}>{userData.PersonalDetails.name}</h2>
               <p style={{ fontSize: '1rem', color: '#666' }}>{userData.PersonalDetails.Profession}</p>
            </div>

            <div className="social-icons" >
               <div style={{ backgroundColor: '#f0f2f5', padding: '10px', borderRadius: '8px' }}><FaLinkedinIn size={18} color="#0077b5" onClick={() => openLinkInNewTab(userData.PersonalDetails.linkedInURL)} /></div>
               <div style={{ backgroundColor: '#f0f2f5', padding: '10px', borderRadius: '8px' }}><FaGithub size={18} color="#333" onClick={() => openLinkInNewTab(userData.PersonalDetails.githubURL)} /></div>
            </div>

            <div className="contact-info">
               <p> <b>Phone :</b>{userData.PersonalDetails.mobile}</p>
               <p><b>Email :</b> {userData.PersonalDetails.email}</p>
            </div>

            <button className="resume-btn" onClick={() => downloadResume()}>
               Download Resume
            </button>
         </div>

      </>
   )
}

export default profile