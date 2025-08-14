# Superior Tint & Vinyl - Modular Website Documentation

## 🏗️ Project Structure

The website has been completely modularized for better maintainability, scalability, and organization. Each component is now a separate file that can be edited independently.

```
Superior Website/
├── index.html                 # Original monolithic version
├── index-modular.html         # New modular version (USE THIS ONE)
├── components/               # HTML component files
│   ├── header.html
│   ├── mobile-cta.html
│   ├── hero.html
│   ├── services.html
│   ├── packages.html
│   ├── gallery.html
│   ├── why-choose.html
│   ├── reviews.html
│   ├── faq.html
│   ├── contact.html
│   ├── footer.html
│   └── lightbox.html
├── css/                      # Modular CSS files
│   ├── variables.css         # CSS custom properties
│   ├── base.css             # Reset & typography
│   ├── utilities.css        # Utility classes
│   ├── buttons.css          # Button styles
│   ├── header.css           # Header & navigation
│   ├── mobile-cta.css       # Mobile CTA bar
│   ├── hero.css             # Hero section
│   ├── services.css         # Services section
│   ├── packages.css         # Packages section
│   ├── gallery.css          # Gallery section
│   ├── why-choose.css       # Why choose section
│   ├── reviews.css          # Reviews section
│   ├── faq.css              # FAQ section
│   ├── contact.css          # Contact section
│   ├── footer.css           # Footer
│   ├── lightbox.css         # Lightbox modal
│   └── responsive.css       # Media queries
├── js/                      # JavaScript modules
│   ├── component-loader.js  # Loads HTML components
│   └── main.js             # Main functionality
├── images/                  # Template images
│   ├── gallery-1.jpg        # SVG template
│   ├── gallery-1-thumb.jpg  # SVG template
│   ├── map-placeholder.jpg  # SVG template
│   └── [other templates]
├── robots.txt
├── sitemap.xml
└── generate-image-templates.js
```

## 🚀 Getting Started

### Using the Modular Version

1. **Main File**: Use `index-modular.html` as your primary HTML file
2. **Components**: Edit individual sections in the `components/` folder
3. **Styling**: Modify specific CSS files in the `css/` folder
4. **Images**: Replace SVG templates in `images/` with real photos

### Local Development

The modular version requires a web server to load components (due to browser security restrictions with `fetch()`). You can use:

- **VS Code Live Server**: Install the Live Server extension
- **Python**: `python -m http.server 8000`
- **Node.js**: `npx serve .`
- **PHP**: `php -S localhost:8000`

## 📁 Component System

### How It Works

1. **Component Loader** (`js/component-loader.js`): Dynamically loads HTML components
2. **Modular HTML**: Each section is a separate `.html` file
3. **Event System**: Main JavaScript waits for components to load before initializing

### Adding New Components

1. Create a new HTML file in `components/`
2. Add the component mapping to `js/component-loader.js`
3. Add a placeholder `<div>` in `index-modular.html`
4. Create corresponding CSS file if needed

Example:
```javascript
// In component-loader.js
const components = {
    'new-section-component': 'components/new-section.html',
    // ... other components
};
```

```html
<!-- In index-modular.html -->
<div id="new-section-component"></div>
```

## 🎨 CSS Architecture

### Modular CSS Strategy

- **variables.css**: All CSS custom properties (colors, spacing, etc.)
- **base.css**: Reset styles and typography
- **utilities.css**: Reusable utility classes
- **[component].css**: Component-specific styles

### CSS Loading Order

The CSS files are loaded in a specific order to ensure proper cascading:

1. Variables
2. Base styles
3. Utilities
4. Buttons
5. Components (header → footer)
6. Responsive overrides

### Customizing Styles

To modify a specific section:

1. Find the corresponding CSS file (e.g., `css/hero.css` for hero section)
2. Edit the styles directly
3. Changes will apply immediately

## 🖼️ Image System

### Template Images

All images are currently SVG templates that:
- Use the brand color scheme
- Include placeholder text
- Are properly sized for their use case
- Can be easily replaced with real photos

### Replacing Templates

1. **Gallery Images**: Replace `gallery-[1-8].jpg` with actual before/after photos
2. **Thumbnails**: Replace `gallery-[1-8]-thumb.jpg` with smaller versions
3. **Map**: Replace `map-placeholder.jpg` with Google Maps screenshot
4. **Logo**: Replace with actual company logo
5. **Social Images**: Replace `og-image.jpg` and `twitter-image.jpg`

### Image Specifications

```
Gallery Images:     800x600px (4:3 ratio)
Thumbnails:         400x300px (4:3 ratio)
Map:               600x400px (3:2 ratio)
Logo:              400x200px (2:1 ratio)
Open Graph:        1200x630px
Twitter Card:      1200x600px
```

## ⚙️ Configuration

### Contact Information

Update in these files:
- `components/header.html` (phone number)
- `components/mobile-cta.html` (phone number)
- `components/hero.html` (phone number)
- `components/contact.html` (all contact info)
- `components/footer.html` (phone, email, social links)

### Business Information

Update in `index-modular.html`:
- Schema.org JSON-LD (address, coordinates, hours)
- Meta tags (title, description)

### Form Handler

Update in `components/contact.html`:
- Change `action="[REPLACE WITH FORMSPREE OR HANDLER URL]"`
- Add your form processing service URL

## 🛠️ Development Workflow

### Making Changes

1. **Content**: Edit HTML files in `components/`
2. **Styling**: Edit CSS files in `css/`
3. **Functionality**: Edit `js/main.js`
4. **Images**: Replace templates in `images/`

### Testing

1. Start local web server
2. Open `index-modular.html`
3. Check browser console for errors
4. Test on mobile devices

### Deployment

1. Upload all files to web server
2. Ensure proper file structure is maintained
3. Test that components load correctly
4. Update absolute URLs if needed

## 🎯 Benefits of Modular Structure

### For Developers
- **Maintainability**: Easy to find and edit specific sections
- **Reusability**: Components can be reused across pages
- **Collaboration**: Multiple developers can work on different components
- **Version Control**: Cleaner git diffs for specific changes

### For Content Managers
- **Focused Editing**: Edit only the section you need
- **Reduced Risk**: Less chance of breaking other sections
- **Clear Organization**: Obvious file structure

### For Performance
- **Lazy Loading**: Components can be loaded as needed
- **Caching**: Individual components can be cached separately
- **Code Splitting**: CSS and JS can be loaded per component

## 🔧 Troubleshooting

### Components Not Loading
1. Check browser console for fetch errors
2. Ensure you're using a web server (not file://)
3. Verify component file paths in `component-loader.js`

### Styles Not Applied
1. Check CSS file loading order in `index-modular.html`
2. Verify CSS file paths
3. Check for CSS syntax errors

### JavaScript Errors
1. Check that components are loaded before JavaScript runs
2. Verify element selectors match component HTML
3. Check browser console for specific errors

## 📞 Support

For questions about the modular structure:
1. Check this documentation first
2. Review component files for examples
3. Test changes in a local environment
4. Backup files before making major changes

---

**Note**: The original `index.html` is preserved as a backup. Use `index-modular.html` for the new modular system.
