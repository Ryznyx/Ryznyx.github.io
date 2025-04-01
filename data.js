// Store valid ID/password pairs
const validUsers = {
    "admin": "admin123",
    "user1": "password123",
    "dkfan": "zorbán123"
};
// Function to handle login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ✅ Prevent form from refreshing

    // Get user input
    let username = document.getElementById("userid").value.trim();  // Trim to remove extra spaces
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Check if the user exists and password matches
    if (validUsers.hasOwnProperty(username) && validUsers[username] === password) {
        message.style.color = "limegreen";
        message.innerText = "✅ Sikeres bejelentkezés! Üdv, " + username + "!";

        // ✅ Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = "https://youtu.be/zz31gg2xrJo?si=H9yCf7ZrA2hVSuj2&t=3";  // Redirect to the dashboard
        }, 1500);
    } else {
        message.style.color = "red";
        message.innerText = "❌sok volt a bor? mennyi 2*3 ?";
    }
});
