const {test,expect} = require ('@playwright/test')

test ('verify application title',async ({page})=>{

    await page.goto("https://www.google.com/")
    
    const url = await page.url()

    console.log("URL is "+url)
});