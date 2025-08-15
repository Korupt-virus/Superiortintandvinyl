# Cache Busting Guide for Superior Tint & Vinyl Website

## 🚨 **Why This Matters**
When you make changes to your website, users' browsers might show old cached versions instead of your latest updates. This guide ensures users always see your newest changes.

## 📋 **What to Do When Making Updates**

### **Step 1: Make Your Changes**
- Edit your CSS, JavaScript, or HTML files as needed
- Test your changes locally

### **Step 2: Update Version Numbers (ONLY for changed files)**
**IMPORTANT:** Only update version numbers for files that you actually modified.

**Current version format: `?v=2025081504`**
- `2025` = Year
- `08` = Month
- `15` = Day  
- `04` = Update number for that day

### **Step 3: Which Files Need Version Updates**

**✅ UPDATE VERSION when you change:**
- CSS files (any styling changes)
- JavaScript files (any functionality changes)

**❌ DON'T UPDATE VERSION for:**
- CSS files you didn't modify
- JavaScript files you didn't modify
- Images (they don't cache the same way)
- HTML content changes

### **Step 4: How to Update**

**Example: If you only changed `main.js`:**
```html
<!-- DON'T change these (not modified) -->
<link rel="stylesheet" href="css/contact.css?v=2025081501">
<script src="js/component-loader.js?v=2025081501"></script>

<!-- ONLY change this (was modified) -->
<script src="js/main.js?v=2025081502" defer></script>
```

### **Step 5: Push to GitHub**
```bash
git add .
git commit -m "Update [describe your changes] - cache version 2025081502"
git push origin main
```

## 🔄 **Quick Version Update Process**

1. **Identify which files you changed**
2. **Only update those file versions in `index.html`**
3. **Increment to next number** (e.g., `01` → `02` → `03`)
4. **Keep unchanged files at their current version**

## 📝 **Example Update Workflow**

Let's say you update ONLY the contact form JavaScript:

1. Edit `js/main.js`
2. In `index.html`, change ONLY:
   ```html
   <!-- Before -->
   <script src="js/main.js?v=2025081501" defer></script>
   
   <!-- After -->
   <script src="js/main.js?v=2025081502" defer></script>
   ```
3. Leave all CSS versions unchanged since you didn't modify them
4. Commit and push

## ⚡ **Efficient Strategy**

- **Small changes**: Only update the specific file you changed
- **Multiple file changes**: Update all changed files to the same new version
- **Major updates**: You can update everything to the same version if preferred

## 🎯 **When to Update Versions**

**Always update when you change:**
- ✅ CSS files (styling changes)
- ✅ JavaScript files (functionality changes)

**Don't need to update for:**
- ❌ Files you didn't modify
- ❌ Image changes
- ❌ Minor HTML content changes
- ❌ Configuration file changes

## � **Pro Tips**

- **Be selective**: Only version files you actually changed
- **Use descriptive commit messages** so you can track what changed
- **Test in incognito mode** to simulate new users
- **Keep a mental note** of which files you modified

---

**Remember:** Only update versions for files you actually changed!
