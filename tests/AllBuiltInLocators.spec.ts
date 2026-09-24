import {test,expect, Locator} from '@playwright/test';

test('AllBuiltInLocators', async({page})=>{

    await page.goto("http://127.0.0.1:5500/tests/LocatorPracticeApp.html");

    //getByText()
    await page.getByText("Try this message").click();
    await expect(page.getByText("Nice! You located a text element.")).toBeVisible();
    const msg1:Locator = page.getByText("Nice! You located a text element.");
    console.log(await msg1.textContent());

    //getByRole
    await page.getByRole('button', {name:"New project"}).click();
    await expect(page.getByText("Project created! Role locator found the button.")).toBeVisible();
    console.log(await page.getByText("Project created! Role locator found the button.").textContent());

    await page.getByRole('button', {name:'Follow'}).click();
    await expect(page.getByText("You are now following this item.")).toBeVisible();
    await expect(page.getByRole('button', {name:'Following'})).toBeVisible();

    //getByPlaceholder
    await page.getByPlaceholder("Search projects or people…").fill("Hello I'm Learning Playwright");
    await expect(page.getByPlaceholder("Search projects or people…")).toHaveValue("Hello I'm Learing Playwright");

    //getByLabel
    await page.getByLabel("Work email").fill("anusha@mail.com");
    await expect(page.getByLabel("Work email")).toHaveValue("anusha@mail.com");

    //getByTestId
    await expect(page.getByTestId("welcome-banner")).toBeVisible();
    await page.getByRole("button",{name:'Acknowledge'}).click();
    const bannerAc:Locator = page.getByText("Banner acknowledged.");
    console.log(await bannerAc.textContent());

    //getByTitle
    await page.getByTitle("Add this page to your favorites").click();
    await expect(page.getByText("Added")).toBeVisible();

    //getByAltText
    await page.getByAltText("Profile photo of Jordan Lee").click();
    const profile:Locator = page.getByText("You found Jordan’s profile photo.");
    console.log(await profile.textContent());

    //bonus interaction
    await page.getByRole('button', {name:'Click me'}).click();
    await expect(page.getByTestId('click-count')).toHaveText('1');
    
});
