
export default class LoginPage {
    
  constructor(page) {
    this.page = page;

    // Locators
    this.emailInput = page.locator("input[name='email']");
    this.passwordInput = page.locator("input[name='password']");
    this.loginButton = page.locator("input[value='Login']");
  }

  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginBtn();
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLoginBtn() {
    await this.loginButton.click();
  }
}