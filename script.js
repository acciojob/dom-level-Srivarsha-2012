//your JS code here. If requir
function findDOMLevel() {
    // Get the target element
    let element = document.getElementById("level");
    
    let level = 0;

    // Traverse up to the root (html)
    while (element) {
        level++;
        element = element.parentElement;
    }

    // Show result
    alert("The level of the element is: " + level);
}

// Call the function
findDOMLevel();