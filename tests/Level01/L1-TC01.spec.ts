import {test, expect, Locator} from '@playwright/test';

test('Verify Simple sign-in with the demo account', async({page})=>{

    //Open the sign-in page
    /*Expected - The "Sign in" heading with Email and Password fields is shown */
   await page.goto("https://www.playwithweb.com/qa/login.html");

   const Signin:Locator = page.locator("//h1[text()='Sign in']");
   await expect(Signin).toBeVisible();
   await expect(page.getByLabel("Email")).toBeVisible();
   await expect(page.getByLabel("Password")).toBeVisible();

   /*Enter the email address in "Email"
   Expected - The email appears in the field*/
   const emailField = page.getByLabel("Email");
   await emailField.fill("qa@playwithweb.com");
   await expect(emailField).toHaveAttribute('type', 'email');

   /*Enter the password in "Password" 
   Expected - The password is shown as dots*/
   const passwordField = page.getByLabel("Password");
   await passwordField.fill("Qa@12345");
   await expect(passwordField).toHaveAttribute('type', 'password');

   await page.waitForTimeout(4000);

   /* Click "Sign in"
   Expected - My account opens with the heading "Hi, Demo" and the header shows "Hi, Demo" */
   await page.getByRole('button', {name: "Sign in"}).click();
   await expect(page.getByRole("heading",{name:"Hi, Demo"})).toBeVisible();
   await expect(page.getByRole('link', {name:"Hi, Demo"})).toBeVisible();

   /*Check the URL
   Expected - The URL ends with account.html*/
   await expect(page).toHaveURL("https://www.playwithweb.com/qa/account.html");

   /*Look at the header 
   Expected - The account link reads "Hi, Demo" instead of "Sign in"*/
   await expect(page.getByRole('link', {name: 'Hi, Demo'})).toBeVisible();

});