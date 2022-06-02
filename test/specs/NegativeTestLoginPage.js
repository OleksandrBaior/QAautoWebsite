const LoginPage = require('../pageobjects/login.page');
const {username, password} = require('../helper/data');

describe('Negative test on Login Page', () => {
    
      it('Test without credentials', async () => {
        await LoginPage.open();
        await LoginPage.btnSubmit.click();
        await expect(LoginPage.errorEmptyUsername).toBeExisting();
        await expect(LoginPage.errorEmptyPassword).toBeExisting();   
    });

    it('Enter valid username and empty password', async () => {
        await LoginPage.open();
        await LoginPage.login(username, '');
        await expect(LoginPage.errorEmptyPassword).toBeExisting();  
    });

    it('Enter empty username and valid password', async () => {
        await LoginPage.open();
        await LoginPage.login('', password);
        await expect(LoginPage.errorEmptyUsername).toBeExisting();
    });

    it('Enter valid username and valid password', async () => {
        await LoginPage.open();
        await LoginPage.login(username, password);
        await expect(LoginPage.errorNoAccount).toBeExisting();
    });

     it('test fail', async () => {
        await LoginPage.open();
        await expect(browser).toHaveUrlContaining('https://fail.com');
    });


  

});


