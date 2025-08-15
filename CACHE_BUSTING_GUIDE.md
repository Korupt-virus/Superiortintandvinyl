# Cache Busting Guide for Superior Tint & Vinyl Website

## 🚨 **Why This Matters**
When you make changes to your website, users' browsers might show old cached versions instead of your latest updates. This guide ensures users always see your newest changes.

## 📋 **What to Do When Making Updates**

### **Step 1: Make Your Changes**
- Edit your CSS, JavaScript, or HTML files as needed
- Test your changes locally

### **Step 2: Update Version Numbers**
Every time you make changes to CSS or JavaScript files, update the version number in `index.html`:

**Current version format: `?v=2025081501`**
- `2025` = Year
- `08` = Month
- `15` = Day  
- `01` = Update number for that day

### **Step 3: How to Update**

**When you make changes, change this:**
```html
<link rel="stylesheet" href="css/contact.css?v=2025081501">
<script src="js/main.js?v=2025081501" defer></script>
```

**To this (increment the last number):**
```html
<link rel="stylesheet" href="css/contact.css?v=2025081502">
<script src="js/main.js?v=2025081502" defer></script>
```

### **Step 4: Push to GitHub**
```bash
git add .
git commit -m "Update cache version for [describe your changes]"
git push origin main
```

## 🔄 **Quick Version Update Process**

1. **Find these lines in `index.html`:**
   - All `<link rel="stylesheet"` lines with `?v=`
   - All `<script src="js/` lines with `?v=`

2. **Change the version number:**
   - If today is August 15, 2025 and this is your 2nd update: `?v=2025081502`
   - If today is August 16, 2025 and this is your 1st update: `?v=2025081601`

3. **Update ALL CSS and JS version numbers to the same new version**

## 📝 **Example Update Workflow**

Let's say you update the contact form styling:

1. Edit `css/contact.css`
2. Change ALL version numbers in `index.html` from `?v=2025081501` to `?v=2025081502`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update contact form styling - cache version 2025081502"
   git push origin main
   ```

## ⚡ **Alternative: Quick Update Script**

You can create a simple find-and-replace:
1. Open `index.html`
2. Find: `?v=2025081501` 
3. Replace with: `?v=2025081502` (or your new version)
4. Replace All

## 🎯 **When to Update Versions**

**Always update when you change:**
- ✅ CSS files (styling changes)
- ✅ JavaScript files (functionality changes)
- ✅ Important content updates

**Don't need to update for:**
- ❌ Image changes (they don't cache the same way)
- ❌ Minor text content changes in HTML
- ❌ Configuration file changes

## 🔍 **How to Test**

After pushing updates:
1. Visit your website in incognito/private mode
2. Check if your changes appear
3. If not, try a hard refresh (`Ctrl + F5`)
4. If still not working, verify your version numbers were updated

## 💡 **Pro Tips**

- **Keep version numbers consistent** across all files in the same update
- **Use descriptive commit messages** so you can track what changed
- **Test in incognito mode** to simulate new users
- **Consider major version jumps** for big updates (e.g., `?v=2025081600`)

---

**Remember:** Every time you make changes, increment that version number!
