const { overwrittenTest } = require('../fixtures');
const { expect } = require('@playwright/test');
overwrittenTest.describe('feature foo', () => {
  overwrittenTest('test 5', async ({ page }) => {
    // Assertions use the expect API.
    await page.goto('https://www.duckduckgo.com');
    const element = await page.$('[name="q"]');
    await element.click();
    await element.type('BrowserStack Local');
    await element.press('Enter');
    const title = await page.title('');
    console.log(title);
    expect(title).toEqual( 'BrowserStack Local at DuckDuckGo', 'Expected page title is incorrect!');
  });
});
