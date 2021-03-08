// ES6 JS Classes
class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    // Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    // Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};

class TrialUser extends User {
  trialEnding() {
      console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
  };
};

class BannedUser extends User {
  pieToTheFace() {
    console.log('You are a square, not a circle, so you cannot have pie, ${this.name}, because you can never BE pie.');
  }; 
};

