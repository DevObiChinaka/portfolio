# Contact Form Setup Guide

The contact form is now integrated with **Formspree** - a free service that handles form submissions without requiring a backend.

## Quick Setup (5 minutes)

### Option 1: Formspree (Recommended - Free & Easy)

1. **Sign up at Formspree:**
   - Go to https://formspree.io
   - Click "Get Started" and create a free account
   - Free plan includes 50 submissions/month

2. **Create a new form:**
   - After logging in, click "+ New Form"
   - Give it a name like "Portfolio Contact Form"
   - Formspree will generate a unique Form ID (looks like `xyzabc123`)

3. **Update your code:**
   - Open `components/Contact.tsx`
   - Find line with: `const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";`
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Example: `"https://formspree.io/f/xyzabc123"`

4. **Configure email notifications:**
   - In Formspree dashboard, go to your form settings
   - Set your email address (obinnachiderachinaka@gmail.com) to receive notifications
   - Enable email notifications for new submissions

5. **Test it:**
   - Fill out your contact form on the portfolio
   - Submit and check your email
   - You'll receive submissions at your configured email

### Option 2: EmailJS (Alternative)

If you prefer EmailJS instead:

1. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

2. **Sign up at EmailJS:**
   - Go to https://www.emailjs.com
   - Create account (free 200 emails/month)
   - Set up email service (Gmail, Outlook, etc.)
   - Create email template
   - Get your Service ID, Template ID, and Public Key

3. **Update Contact.tsx** with EmailJS code instead

## What Happens When Someone Submits?

1. Form data is sent to Formspree
2. Formspree forwards it to your email
3. User sees success message
4. You receive email notification with:
   - Sender's name
   - Sender's email (for reply)
   - Their message

## Formspree Features (Free Plan)

✅ 50 submissions per month  
✅ Email notifications  
✅ Spam filtering  
✅ Form dashboard to view submissions  
✅ Archive submissions  
✅ Export data  
✅ No coding required for setup  

## Upgrade Later

If you exceed 50 submissions/month, Formspree has affordable paid plans starting at $10/month for unlimited submissions.

## Testing

Before going live:
1. Submit a test message through your form
2. Check if you receive the email
3. Verify all form fields appear in the email
4. Test the "Reply-To" header works (should be sender's email)

## Troubleshooting

**Problem:** Not receiving emails  
**Solution:** Check spam folder, verify email in Formspree settings

**Problem:** Form shows error  
**Solution:** Verify Form ID is correct in Contact.tsx

**Problem:** 429 Error (Rate limit)  
**Solution:** You've hit the 50/month limit, upgrade plan or wait for next month

## Current Status

🔧 **Action Required:** Replace `YOUR_FORM_ID` in `components/Contact.tsx` with your actual Formspree form ID

Once configured, your contact form will be fully functional!
