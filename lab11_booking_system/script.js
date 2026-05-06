function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
  
    // Validation
    if (username === "" || password === "") {
      message.style.color = "red";
      message.innerText = "Please fill in all fields!";
      return;
    }
  
    // Sample credentials
    let correctUser = "admin";
    let correctPass = "1234";
  
    if (username === correctUser && password === correctPass) {
      message.style.color = "green";
      message.innerText = "Login Successful!";
      
      // Redirect to dashboard
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
  
    } else {
      message.style.color = "red";
      message.innerText = "Invalid username or password!";
    }
  }