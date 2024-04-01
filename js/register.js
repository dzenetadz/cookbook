// JavaScript code to handle form submission using AJAX
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Serialize form data
    var formData = new FormData(this);

    // Send AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "register.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Handle response from server
            document.getElementById("message").innerHTML = xhr.responseText;
        }
    };
    xhr.send(formData);
});
