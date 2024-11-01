const { When, Then, Given } = require('@cucumber/cucumber')

Given('app is started', async function () {
    const label = await $('~labelTest');
    await label.waitForDisplayed();
    expect(label).toBeDefined();
})

When('I press the button', async function () {

    const button = await $('~testButton');
    await button.waitForDisplayed();
    // Click the button
    await button.click();
});

Then('label should be {string}', async function (expectedResponse) {
    const label = await $('~labelTest');
    await label.waitForDisplayed();
    await expect(label.getAttribute("text") == expectedResponse);
});