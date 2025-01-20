import { Resend } from 'resend';
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from './emailTemplates.js';

// Function to send verification email
export const sendVerificationEmail = async (email, verificationCode) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const response = await resend.emails.send({
      from: 'Anthony Digital Marketplace <admin@megagigsolution.com>',
      // from: 'Megagig Solution <no-reply@resend.dev>',
      to: email,
      subject: 'Email Verification',
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        '{verificationCode}',
        verificationCode
      ), // Replace placeholder with actual code
    });

    console.log('Verification email sent:', response);
    return response;
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw new Error('Unable to send verification email');
  }
};

// Function to send a welcome email

export const sendWelcomeEmail = async (email, name) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const response = await resend.emails.send({
      from: 'Anthony Digital Marketplace <admin@megagigsolution.com>',
      // from: 'Megagig Solution <no-reply@resend.dev>',
      to: email, // Updated to use the email string directly
      subject: 'Welcome to Anthony Portfolio and Digital Marketplace', // Ensure subject matches the brand
      html: WELCOME_EMAIL_TEMPLATE.replace('{name}', name),
    });

    console.log('Welcome email sent successfully to:', email, response);
  } catch (error) {
    console.error('Error sending welcome email', error);
    throw new Error(`Error sending welcome email: ${error.message}`);
  }
};

// Function to send a password reset email
export const sendPasswordResetEmail = async (email, resetToken) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const response = await resend.emails.send({
      from: 'Anthony Digital Marketplace <admin@megagigsolution.com>',
      // from: 'Megagig Solution <no-reply@resend.dev>',
      to: email, // Updated to use the email string directly
      subject: 'Reset your password',
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{resetToken}', resetToken),
    });
    console.log('Password reset email sent successfully', response);
  } catch (error) {
    console.error('Error sending password reset email', error);
    throw new Error(`Error sending password reset email: ${error.message}`);
  }
};

// Function to send a password reset success email
export const sendResetSuccessEmail = async (email, name) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const response = await resend.emails.send({
      from: 'Anthony Digital Marketplace <admin@megagigsolution.com>',
      to: email, // Updated to use the email string directly
      subject: 'Password Reset Successful',
      html: PASSWORD_RESET_SUCCESS_TEMPLATE.replace('{name}', name),
    });

    console.log('Password reset success email sent successfully', response);
  } catch (error) {
    console.error('Error sending password reset success email', error);
    throw new Error(
      `Error sending password reset success email: ${error.message}`
    );
  }
};
