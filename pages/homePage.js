
export default class HomePage {

    constructor(page) {
        this.page = page;
    }

    async clickOnSpecialHotMenu() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click("(//span[contains(text(),'Special')]/../..)[2]")
        ]);
    }
}