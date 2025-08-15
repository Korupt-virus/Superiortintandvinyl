# Web3Forms Setup Guide

## Step 1: Get Your Access Key

1. Go to [Web3Forms.com](https://web3forms.com)
2. Click "Get Started" or "Create Access Key"
3. Enter your email address where you want to receive the form submissions
4. Verify your email address
5. Copy your access key

## Step 2: Update the Contact Form

1. Open `components/contact.html`
2. Find this line:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key from Web3Forms

## Step 3: Test the Form

1. Open your website
2. Fill out the quote form with test data
3. Click "Get My Quote"
4. You should receive an email with the form submission

## Features Included

✅ **Form Validation**: Client-side validation for required fields and email format
✅ **Loading States**: Button shows "Sending..." while submitting
✅ **Error Handling**: Shows user-friendly error messages if submission fails
✅ **Success Messages**: Confirms successful submission to the user
✅ **Auto Reset**: Form clears after successful submission
✅ **Professional Email Format**: Emails include a clear subject line and sender name

## Email Format

When someone submits a quote request, you'll receive an email with:
- **Subject**: "New Quote Request from Superior Tint & Vinyl Website"
- **From**: The customer's email address
- **Content**: All form fields organized clearly

## Customization Options

### Change Email Subject
Edit this line in `components/contact.html`:
```html
<input type="hidden" name="subject" value="Your Custom Subject Here">
```

### Add Custom Thank You Page
Currently redirects to Web3Forms success page. To use your own:
```html
<input type="hidden" name="redirect" value="https://yourdomain.com/thank-you">
```

### Spam Protection (Optional)
Web3Forms includes built-in spam protection, but you can add honeypot fields if needed.

## Troubleshooting

- **Not receiving emails?** Check your spam folder
- **Form not submitting?** Check browser console for error messages
- **Need help?** Web3Forms has excellent documentation at their website

## Cost

Web3Forms is free for up to 250 submissions per month. Perfect for most small businesses!
