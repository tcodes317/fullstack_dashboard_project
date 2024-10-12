import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerficationEmail = async(email, verificationToken) => {
    const recipient = [{email}]

    try{
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verficationCode}", verificationToken),
            category: "Email Verfication"
        });

        console.log("Email send successfully", response);
    }
    catch(error){
        console.error(`Error sending verfication`, error);
        throw new Error(`Error sending verification email: ${error}`);
    }
}

export const sendWelcomeEmail = async(email, name)=>{
    const recipient = [{ email }];

    try{
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "import the hash code",
            template_variables:{
                company_info_name: "Auth Company",
                name: name
            }
        })

        console.log("Welcome email sent successfully", response);
    }
    catch(error){
        console.error(`Error sending welcome email`, error);

        throw new Error(`Error sending welcome email: ${error}`);
    }
}

export const sendPasswordResetEmail = async(email, resetURL)=>{
    const recipient = [{ email }];

    try{
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset"
        })
    }   catch(error){
        console.error(`Error sending password reset email`, error)
        
        throw new Error(`Error sending password reset email: ${error}`);
    }
}

export const sendResetSuccessEmail = async(email) => {
    const recipient = [{ email }];

    try{
        const resposne = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset successfully",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset"
        });

        console.log("Password reset email sent successfully", response);
    }
    catch(error){
        console.log(`Error sending password reset succses email`, error);

        throw new Error(`Error sending password reset success email: ${error}`);
    }
}