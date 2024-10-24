const { When, Then, Given } = require('@cucumber/cucumber')

Given('app is started', async function () {
    const label = await $('//android.widget.TextView[@content-desc="labelTest"]');

    expect(label).toBeDefined();
})

When('I press the button', async function () {

    const button = await $('//android.widget.Button[@content-desc="Test Button"]');
    // Click the button
    await button.click();
});

Then('label should be {string}', async function (expectedResponse) {
    const label = await $('//android.widget.TextView[@content-desc="labelTest"]');

    await expect(label).toHaveText(expectedResponse);
});
