import {test, expect} from '@playwright/test';

test('Home page title and headline', async({page})=>{

   await page.goto("https://www.playwithweb.com/qa/login.html");

   await page.getByTestId("account-link").click();

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

   /*Read the browser tab title
   expected - The title is "PlayWithWeb | Web automation practice website with 130 Playwright test cases */
   await expect(page).toHaveTitle("PlayWithWeb | Web automation practice website with 130 Playwright test cases");

   /*Find the main (level 1) heading in the hero banner 
   Expected - It reads "Gear up for less" and is visible*/
   await expect(page.locator("#hero-title")).toBeVisible();


});
