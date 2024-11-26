window.onload = function() {
    // Prevent scrolling to a hash on page reload
    if (window.location.hash) {
        history.pushState("", document.title, window.location.pathname);
    }
};
