import { emailOptions } from "../interfaces/response";
import emailTemplate from "../jsondata/emailTemplate.json";

export class emailService {
   public async brevoSendEmail(emailData: emailOptions) {
      const { subject, name, message, email, mobile }: emailOptions = emailData
      try {
         let html = emailTemplate
            .replace('%user_name%', name)
            .replace('%user_name%', name)
            .replace('%message%', message);
         if (email && mobile) {
            html = html.replace('%email%', email || '').replace('%mobile%', mobile || '');
         }
         else if (email) {
            html = html.replace('%email%', email || '').replace('<strong> / </strong>Mobile:%mobile%', '');
         }
         else if (mobile) {
            html = html.replace('%mobile%', mobile || '').replace('Email:%email%<strong> / </strong>', '');
         }
         const data = {
            "sender": {
               "email": process.env.EMAIL_SENDER_EMAIL
            },
            "to": [
               {
                  email: process.env.EMAIL_RECIVER_EMAIL
               }
            ],
            "subject": subject,
            "htmlContent": html
         };

         const apiUrl: string = process.env.EMAIL_URL || ''
         const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'api-key': process.env.EMAIL_API_KEY || '',
            },
            body: JSON.stringify(data),
         });;
         return ({
            success: true,
            message: "sent successfully",
            data: response
         });
      } catch (error) {
         throw error
      }
   }
}