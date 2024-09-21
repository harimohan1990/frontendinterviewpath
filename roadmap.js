// Function to hide all sections
function hideAllSections() {
    document.getElementById('html_prep').style.display = 'none';
    document.getElementById('css_prep').style.display = 'none';
    document.getElementById('js_prep').style.display = 'none';
    document.getElementById('react_prep').style.display = 'none';
}

// For HTML
function htmlToggleDisplay() {
    hideAllSections(); // Hide other sections first
    const htmlElement = document.getElementById('html_prep');
    htmlElement.style.display = 'block'; // Show the HTML section
}

// For CSS
function cssToggleDisplay() {
    hideAllSections(); // Hide other sections first
    const cssElement = document.getElementById('css_prep');
    cssElement.style.display = 'block'; // Show the CSS section
}

// For JavaScript
function jsToggleDisplay() {
    hideAllSections(); // Hide other sections first
    const jsElement = document.getElementById('js_prep');
    jsElement.style.display = 'block'; // Show the JavaScript section
}

// For ReactJS
function reactToggleDisplay() {
    hideAllSections(); // Hide other sections first
    const reactElement = document.getElementById('react_prep');
    reactElement.style.display = 'block'; // Show the ReactJS section
}
