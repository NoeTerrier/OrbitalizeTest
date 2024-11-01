const { Given, When, Then, Before, After, setDefaultTimeout } = require("@cucumber/cucumber");

const { chromium, expect } = require("@playwright/test");

const { Page } = require("playwright");

setDefaultTimeout(60 * 1000);

let page, browser;

Before(async function () {

    browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    page = await context.newPage();

    page.goto("http://localhost:3000/");

});

Given('app is started', async function () {
    await page.getByTestId('labelTest');
})

When('I press the button', async function () {
    // Click the button
    await page.getByTestId('testButton').click();
});

Then('label should be {string}', async function (expectedResponse) {
    var labelText = await page.getByTestId('labelTest').textContent();
    expect(labelText).toEqual(expectedResponse);
});

After(async function () {

    await browser.close();

})