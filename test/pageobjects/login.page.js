const Page = require('./page');


class LoginPage extends Page {
  
//all elements in the Login page
    get inputUsername () {return $("//input[@name='username']")}
    get inputPassword () {return $("//input[@name='password']")}
    get btnSubmit () {return $("//input[@type='submit']")}

    get errorNoAccount () {return $("//*[contains(text(),'No account found with that username.')]")}
    get errorEmptyUsername () {return $("//*[contains(text(),'Please enter username.')]")}
    get errorEmptyPassword () {return $("//*[contains(text(),'Please enter your password.')]")}

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
