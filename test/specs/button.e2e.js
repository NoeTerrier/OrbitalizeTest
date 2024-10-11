describe('React Native App', () => {
    it('should increment the counter on button press', async () => {
        // Locate elements using their testID
        const button = await $('//android.widget.Button[@content-desc="Test Button"]');
        
        const label = await $('//android.widget.TextView[@content-desc="labelTest"]');

        // Verify initial label text
        await expect(label).toHaveText('Hello world!');

        // Click the button
        await button.click();

        await expect(label).toHaveText('Text changed!');
        
    });
});