export default class SpecialHotPage {

    constructor(page) {
        this.page = page;
    }

    async addFirstProductToTheCart() {
        await this.page.hover("//div[@class='image']/a", {
            strict: false
        });
        await this.page.locator("(//button[@title='Add to Cart'])")
            .nth(0).click();
    }

    async isToastVisible() {
        const toast = this.page.locator("//a[.='View Cart ']");
        await toast.waitFor({ state: "visible" });
        return toast;
    }
}