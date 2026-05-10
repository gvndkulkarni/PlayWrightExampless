const {test,expect} = require ('@playwright/test')

test ('verify login',async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").type("Admin")
    await page.locator("input[name='password']").type("admin123")
    await page.locator("button[type='submit']").click()
});