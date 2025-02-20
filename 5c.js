class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    validate(enteredUsername, enteredPassword) {
      if (this.username === enteredUsername && this.password === enteredPassword) {
        return "Login Successful";
      } else {
        return "Invalid Credentials";
      }
    }
  }
  
  module.exports = User;