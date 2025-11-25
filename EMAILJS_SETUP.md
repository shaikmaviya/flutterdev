# EmailJS Setup Guide for Contact Form

## Overview
Your portfolio now includes a professional contact form with email functionality using EmailJS. Follow these steps to set it up.

## Steps to Configure EmailJS

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. For **Gmail**:
   - Click "Connect Account"
   - Sign in with your Gmail (shaik.mavi@gmail.com)
   - Allow EmailJS to access your account
4. Give your service a name (e.g., "Portfolio Contact")
5. Note your **Service ID** (you'll need this)

### 3. Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template configuration:

**Template Content:**
```
From: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

**Template Settings:**
- **To Email:** shaik.mavi@gmail.com (or use {{to_email}})
- **From Name:** {{user_name}}
- **Reply To:** {{user_email}}
- **Subject:** New Contact Form Message: {{subject}}

4. Save the template and note your **Template ID**

### 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (starts with letters/numbers)
3. Copy this key

### 5. Update Your Website Code
Open `script.js` and replace the placeholders:

```javascript
// Line 6 - Replace YOUR_PUBLIC_KEY
emailjs.init('YOUR_PUBLIC_KEY'); // Paste your actual Public Key here

// Line 282 - Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

**Example:**
```javascript
emailjs.init('abc123xyz789'); // Your actual public key
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

## Testing the Contact Form

1. Open your portfolio in a browser
2. Navigate to the Contact section
3. Fill in all form fields:
   - Full Name
   - Email Address
   - Subject
   - Message
4. Click "Send Message"
5. You should see:
   - "Sending..." during submission
   - "✓ Message sent successfully!" on success
   - The form will reset automatically
6. Check your email (shaik.mavi@gmail.com) for the message

## Troubleshooting

### Form not sending?
- Check browser console (F12) for errors
- Verify all three credentials are correct (Public Key, Service ID, Template ID)
- Ensure EmailJS CDN is loaded in `index.html`

### Emails not arriving?
- Check your spam/junk folder
- Verify "To Email" in template matches your email
- Check EmailJS dashboard for delivery logs

### Rate Limits
- Free plan: 200 emails/month
- Upgrade if you need more: [https://www.emailjs.com/pricing/](https://www.emailjs.com/pricing/)

## Alternative: FormSubmit (No Setup Required)

If you want a simpler solution without EmailJS setup:

1. Replace the form action in `index.html`:
```html
<form action="https://formsubmit.co/shaik.mavi@gmail.com" method="POST" class="contact-form">
    <input type="hidden" name="_subject" value="New Portfolio Contact">
    <input type="hidden" name="_captcha" value="false">
    <!-- rest of form fields -->
</form>
```

2. This sends form data directly to your email without JavaScript

## Support

- EmailJS Docs: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Need help? Email: support@emailjs.com

---

**Your Portfolio Features:**
✓ Professional modern design
✓ Responsive layout
✓ Smooth animations
✓ Email contact form
✓ Social media links
✓ Project showcase
✓ Skills display
