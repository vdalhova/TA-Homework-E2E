const { Given, When, Then } = require('@wdio/cucumber-framework');

const homePage = 'https://www.newegg.com/';

Given("I am on the home page", async () => {
    await browser.url(homePage);

});

Given("The promo banner is closed if it appears", async () => {
    try {
        const closeButton = await $('.modal-content > button')
        await closeButton.click();
    }
    catch (error) {
        console.info("The banner did not appear");
    }
});

When("I entry the word {string} in the search bar", async (word) => {
    const searchForm = await $('.header2021-search-box > input');
    await searchForm.click();
    await searchForm.addValue(word);
});


When("I click the search", async () => {
    const searchButton = await $('.header2021-search-button > button');
    await searchButton.click();
});

Then("I should check that at least one item appers", async () => {
    const items = await $('.item-cells-wrap > .item-cell');
    await expect(items).toBeExisting();
});


When("I open Today's Best Deals tab", async () => {
    const bestDealsTab = await $('#trendingBanner_720202 > span');
    await bestDealsTab.click();
});

When("I click on the Internet shop logo", async () => {
    const logo = await $(`.header2021-logo > a[href="${homePage}"]`);
    await logo.click();
});

Then("I should check that the main page opened", async () => {
    const url = await browser.getUrl();
    await expect(url).toEqual(homePage);
});