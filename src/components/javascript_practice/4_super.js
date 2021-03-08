// super 
class BronzeLevelUser extends User {
  // we addthe ccinfo property to the user here
  constructor(username, password, ccinfo) {
      // if you are going to use 'this' in your constructor, you must have super that points to the parent constructor
      super(username, password);
      // the 'this' keyword wouldn't work without super
      this.type = 'Bronze User',
      this.ccinfo = ccinfo
  }

  getInfo() {
      console.log(this.username, this.password, this.type, this.ccinfo);
  }
}

let bronzeGuy = new BronzeLevelUser('Bronze Dude', 'bronze1234', 0000111122223333);
bronzeGuy.greet(); 
bronzeGuy.status();
console.log(bronzeGuy);