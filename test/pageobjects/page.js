module.exports = class Page {
   
     open () {
        return browser.url(`https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php`)
    }
}
