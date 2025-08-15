/**
 * Component Loader
 * Loads HTML components dynamically into the page
 */

// Component mapping
const components = {
    'header-component': 'components/header.html',
    'mobile-cta-component': 'components/mobile-cta.html',
    'hero-component': 'components/hero.html',
    'services-component': 'components/services.html',
    'packages-component': 'components/packages.html',
    'gallery-component': 'components/gallery.html',
    'why-choose-component': 'components/why-choose.html',
    'reviews-component': 'components/reviews.html',
    'faq-component': 'components/faq.html',
    'contact-component': 'components/contact.html',
    'footer-component': 'components/footer.html',
    'lightbox-component': 'components/lightbox.html'
};

// Load component function
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Failed to load component: ${componentPath}`);
        }
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading component:', error);
        // Fallback: show error message
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = `
                <div style="padding: 20px; background: #ff6b6b; color: white; text-align: center; border-radius: 8px; margin: 10px;">
                    <strong>Component Load Error:</strong> ${componentPath}
                    <br><small>Check that the component file exists and is accessible.</small>
                </div>
            `;
        }
    }
}

// Load all components
async function loadAllComponents() {
    const loadPromises = Object.entries(components).map(([elementId, componentPath]) => 
        loadComponent(elementId, componentPath)
    );
    
    try {
        await Promise.all(loadPromises);
        
        // Add a small delay to ensure DOM is ready
        setTimeout(function() {
            // Dispatch custom event when all components are loaded
            document.dispatchEvent(new CustomEvent('componentsLoaded'));
        }, 100);
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Initialize component loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllComponents);
} else {
    loadAllComponents();
}

// Export for potential external use
window.ComponentLoader = {
    loadComponent,
    loadAllComponents,
    components
};
