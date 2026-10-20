import {test,expect, Locator} from '@playwright/test';

test('Category tile filters the catalogue', async({page})=>{
    await page.goto("https://www.playwithweb.com/qa/login.html");
   /*Enter the email address in "Email"*/
   const emailField = page.getByLabel("Email");
   await emailField.fill("qa@playwithweb.com");
    /*Enter the password in "Password" */
   const passwordField = page.getByLabel("Password");
   await passwordField.fill("Qa@12345");
   /* Click "Sign in" */
   await page.getByRole('button', {name: "Sign in"}).click();
   /*Click the PlayWithWeb logo in the header
   Expected - The home page opens */
   await page.getByAltText("PlayWithWeb logo").click();
   await expect(page).toHaveURL("https://www.playwithweb.com/qa/index.html");

   /*Click the "Audio" category tile
   Expected - The catalogue opens filtered to audio */
   await page.locator("//a[text() = 'Audio']").click();

   /*Check the URL and the page heading
   Expected - The URL contains category=audio and the heading reads "Audio" */
   await expect(page).toHaveURL("https://www.playwithweb.com/qa/products.html?category=audio");
   const headinginAudio:Locator = page.locator("h1");
   console.log(await headinginAudio.textContent());
});