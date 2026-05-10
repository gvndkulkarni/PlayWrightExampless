const {test,expect} = require ('@playwright/test')

test ('verify login',async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").type("Admin")
    await expect(page.locator("input[name='username']")).toHaveValue("Admin")
    await page.locator("input[name='password']").type("admin123")
    await expect(page).toHave("Password")
    await page.locator("button[type='submit']").click()
});