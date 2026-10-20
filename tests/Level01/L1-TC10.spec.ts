import{test,expect, Locator}from '@playwright/test';

test("Logo returns home and Back returns to the shop", async({page})=>{
    await page.goto("https://www.playwithweb.com/qa/login.html");
   /*Enter the email address in "Email"*/
   const emailField = page.getByLabel("Email");
   await emailField.fill("qa@playwithweb.com");
    /*Enter the password in "Password" */
   const passwordField = page.getByLabel("Password");
   await passwordField.fill("Qa@12345");
   /* Click "Sign in" */
   await page.getByRole('button', {name: "Sign in"}).click();
   
   /*	Open the catalogue
   Expected - The heading "All products" is shown */
   await page.getByRole('link', {name:'Shop', exact:true}).click();
   const productsHeading:Locator = page.locator("h1");
   await expect(productsHeading).toContainText("All products");
   await expect(productsHeading).toBeVisible();

   /*Click the PlayWithWeb logo
   Expected - The home page opens with "Gear up for less" */
   await page.getByAltText("PlayWithWeb logo").click();
   await expect(page.locator("#hero-title")).toBeVisible();

   /*Use the browser Back button
   Expected - The catalogue is shown again with "All products" */
   await page.goBack();
   await expect(productsHeading).toBeVisible();

});