const {test,expect} = require ('@playwright/test')

test ('first test',async ({page})=>{

    expect(12).toBe(12)
});

test ('second test',async ({page})=>{

    expect("Govind").toBe("Govind")
});

test ('third test',async ({page})=>{

    expect("Govind").toBe("Govind")
});

test ('fourth test',async ({page})=>{

    expect("GOVIND").toBe("GOVIND")
});

test ('fifth test',async ({page})=>{

    expect("123").toBe("123")
});