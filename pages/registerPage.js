
export default class RegisterPage {

    constructor(page) {
        this.page = page;
    }

    async enterFirstName(firstname) {
        await this.page.locator("#input-firstname")
            .fill(firstname);
    }
    async enterLastName(lastname) {
        await this.page.locator("input[name='lastname']")
            .fill(lastname);
    }
    async enterEmail(email) {
        await this.page.locator("input[name='email']")
            .fill(email);
    }

    async enterTelephone(phone) {
        await this.page.locator("input[name='telephone']")
            .fill(phone);
    }

    async enterPassword(password) {
        await this.page.locator("input[name='password']")
            .fill(password);
    }

    async enterConfirmPassword(password) {
        await this.page.locator("input[name='confirm']")
            .fill(password);
    }

    isSubscribeChecked() {
        return this.page.locator("#input-newsletter-no");
    }

    async clickTermandConditon() { 
        await this.page.click("//label[@for='input-agree']");
    }

    async clickContinueToRegister() { 
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.click("input[value='Continue']")
        ]);
    }
}