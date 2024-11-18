import { form } from '@/interfaces/response';
import { emailService } from '@/services/emailService';
import { TextField, Alert, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import userData from '@/jsondata/portfolioData.json'

const EmailApiService = new emailService();
export const formType = {
   name: '',
   email: '',
   mobile: '',
   message: '',
   countryCode: '+91'
}
const Contact = () => {
   const [success, setSuccess] = useState(false);
   const [contactForm, setContactForm] = useState<form>(formType);
   const [formErrors, setformErrors] = useState<form>(formType);
   const [formTouched, setFormTouched] = useState<form>(formType);
   const [alertMsg, setAlertMsg] = useState('');

   const onSubmit = async () => {
      if ((contactForm.name && contactForm.message && contactForm.email && contactForm.mobile) &&
         (!formErrors.name && !formErrors.message && !formErrors.email && !formErrors.mobile)) {
         const body = {
            "name": contactForm?.name || '',
            "email": contactForm?.email || '',
            "message": contactForm?.message || '',
            "subject": contactForm?.name + 'is requested to contact',
            "mobile": `${contactForm?.countryCode} ${contactForm?.mobile}` || ''
         }
         const response = await EmailApiService.brevoSendEmail(body)
         console.log(response);
         await successCard()
      }
      else {
         setAlertMsg('Please fill all the fields')
      }
   }

   const successCard = () => {
      setSuccess(!success)
   }

   const onInputBlur = (event: { target: { name: string }; }) => {
      const name = event.target.name;
      setFormTouched((formDetails) => ({ ...formDetails, [name]: true }))

   }

   const onInputChange = (event: { target: { value: string; name: string; }; }) => {
      setAlertMsg('')
      const name = event.target.name;
      const value = event.target.value;
      setformErrors({ ...formErrors, [name]: '' })
      if (name == 'mobile') {
         const mobilePattren = /^[0-9]+$/
         if (!mobilePattren.test(value) || value.length > 10 || value == userData.PersonalDetails.mobile) {
            setformErrors({ ...formErrors, mobile: 'Please enter valid mobile number' })
         }
      }
      if (name == 'email') {
         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         if (!emailPattern.test(value) || value.toLowerCase() == userData.PersonalDetails.email) {
            setformErrors({ ...formErrors, email: 'Please enter valid email' })
         }
      }
      setContactForm((formDetails) => ({ ...formDetails, [name]: value }))
   }

   return (
      <>
         <div className="content sidebar">
            <div className="flex items-center">
               <h1>CONTACT</h1>
               <div className="border"></div>
            </div>
            {!success ?
               <div className="card">
                  {alertMsg && <Alert severity="error">{alertMsg}</Alert>}
                  <div className="input-group">
                     <TextField
                        id="name"
                        name="name"
                        label="Name"
                        variant="standard"
                        value={contactForm.name}
                        onBlur={onInputBlur}
                        onChange={(e) => onInputChange(e)}
                        fullWidth
                     />
                  </div>
                  <span className="error">{!contactForm.name && formTouched.name ? 'Name is required' : formErrors.name}</span>
                  <div className="input-group">
                     <TextField
                        id="email"
                        name="email"
                        label="Email"
                        variant="standard"
                        value={contactForm.email}
                        onBlur={onInputBlur}
                        onChange={(e) => onInputChange(e)}
                        fullWidth
                     />
                  </div>
                  <span className="error">{!contactForm.email && formTouched.email ? 'Email is required' : formErrors.email}</span>
                  <div className="input-group-row">
                     <FormControl variant="standard" sx={{ maxWidth: 120 }}>
                        <InputLabel id="country-code-label">Country code</InputLabel>
                        <Select
                           labelId="country-code-label"
                           id="country-code"
                           value={contactForm.countryCode}
                           onChange={(e) => onInputChange(e)}
                        >
                           <MenuItem value=""><em>Select country code</em></MenuItem>
                           <MenuItem value="+1">+1</MenuItem>
                           <MenuItem value="+91">+91</MenuItem>
                        </Select>
                     </FormControl>
                     <TextField
                        id="mobile"
                        name="mobile"
                        label="Phone Number"
                        variant="standard"
                        value={contactForm.mobile}
                        onBlur={onInputBlur}
                        onChange={(e) => onInputChange(e)}
                        fullWidth
                     />
                  </div>
                  <span className="error">{!contactForm.mobile && formTouched.mobile ? 'Phone number is required' : formErrors.mobile}</span>
                  <div className="input-group">
                     <TextField
                        id="message"
                        name="message"
                        label="Message"
                        variant="standard"
                        value={contactForm.message}
                        onBlur={onInputBlur}
                        onChange={(e) => onInputChange(e)}
                        fullWidth
                     />
                  </div>
                  <span className="error">{!contactForm.message && formTouched.message ? 'Message is required' : formErrors.message}</span>

                  <div className="m-5">
                     <button className="resume-btn" onClick={onSubmit}>Submit</button>
                  </div>
               </div>

               :
               <div className="thank-you-container">
                  <div className="thank-you-message">
                     <h2>Thank You!</h2>
                     <p>Your message has been received. I will get back to you shortly.</p>
                     <div className='m-5 '>
                        <button className='resume-btn' onClick={successCard}>Send Another Response</button>
                     </div>
                  </div>
               </div>
            }
         </div>
      </>
   )
}

export default Contact;