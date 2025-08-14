# Superior Tint & Vinyl Website

## ✨ Easy Contact Information Updates

To update your contact information across the entire website, simply edit **ONE FILE**:

### 📝 Edit Contact Info
**File:** `config/contact-info.js`

```javascript
const contactInfo = {
    // Business Information
    businessName: "Superior Tint & Vinyl",
    
    // Phone Numbers
    phone: "(555) 538",        // For tel: links
    phoneDisplay: "(555) 123-4567", // How it appears on site
    
    // Email
    email: "info@superiortintvinyl.com",
    
    // Address
    address: {
        street: "123 Main Street",
        city: "Your City", 
        state: "ST",
        zip: "12345",
        full: "123 Main Street, Your City, ST 12345"
    },
    
    // Business Hours
    hours: {
        weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
        saturday: "Saturday: 9:00 AM - 4:00 PM", 
        sunday: "Sunday: Closed"
    },
    
    // Social Media Links
    social: {
        facebook: "https://facebook.com/superiortintvinyl",
        instagram: "https://instagram.com/superiortintvinyl",
        twitter: "https://twitter.com/superiortintvinyl"
    },
    
    // Service Area
    serviceArea: "Your City and surrounding areas",
};
```

### 🚀 That's It!
After editing that file, your contact information will automatically update in:
- Header phone number
- Contact section 
- Footer
- Mobile call buttons
- All phone/email links

## 📁 Website Structure

```
📂 Superior Website/
├── 📄 index.html              ← Main website file
├── 📂 config/
│   └── 📄 contact-info.js     ← Edit this for contact info
├── 📂 components/             ← Individual page sections
│   ├── 📄 header.html
│   ├── 📄 hero.html
│   ├── 📄 contact.html
│   └── ... (other sections)
├── 📂 css/                    ← Styling files
├── 📂 js/                     ← Interactive features
└── 📂 images/                 ← Photos and graphics
```

## 🛠️ How to Edit Components

Each section of your website is in a separate file for easy editing:

- **Header/Navigation:** `components/header.html`
- **Main Banner:** `components/hero.html` 
- **Services:** `components/services.html`
- **Packages:** `components/packages.html`
- **Photo Gallery:** `components/gallery.html`
- **Reviews:** `components/reviews.html`
- **FAQ:** `components/faq.html`
- **Contact Form:** `components/contact.html`
- **Footer:** `components/footer.html`

## 📸 Adding Your Photos

Replace the template images in the `images/` folder:
- `gallery-1.jpg` through `gallery-6.jpg` - Your work photos
- `logo.jpg` - Your business logo
- `map-placeholder.jpg` - Map to your location

## 🌐 Publishing Your Website

1. Upload all files to your web hosting service
2. Make sure `index.html` is in the root directory
3. Your website will be live!

## 📞 Need Help?

- Edit `config/contact-info.js` for contact updates
- Edit individual component files for content changes
- Keep the file structure intact for everything to work properly
