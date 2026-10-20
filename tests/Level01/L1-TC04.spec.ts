import{test,expect, Locator}from '@playwright/test';

test('Main navigation lists every section', async({page})=>{

    await page.goto("https://www.playwithweb.com/qa/login.html");
   /*Enter the email address in "Email"*/
   const emailField = page.getByLabel("Email");
   await emailField.fill("qa@playwithweb.com");
    /*Enter the password in "Password" */
   const passwordField = page.getByLabel("Password");
   await passwordField.fill("Qa@12345");
   /* Click "Sign in" */
   await page.getByRole('button', {name: "Sign in"}).click();


   /*Open the home page
   Expected - The white navigation strip is shown under the header */
   await expect(page.locator(".main-nav")).toBeVisible();

   /*Read its top-level links in order
   Expected - They are Home, Shop, Deals, Help, Account */
   const toplinks:Locator = page.locator("//ul[@class='wrap']");
   console.log(await toplinks.textContent());


});