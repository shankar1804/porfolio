import userData from "@/jsondata/portfolioData.json";
const Topbar = () => {
   return (
      <>
         <div className="topbar">
            <h2 className="subHeading ml-9">
               {userData.PersonalDetails.name}
            </h2>
         </div>
      </>
   );
}
export default Topbar;