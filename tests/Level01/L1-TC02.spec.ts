import{test, expect, Locator} from '@playwright/test';

test('Verify Simple sign-up with any made-up data', async({page})=>{
    
    /* Open the sign-in page
    Expected - The "Sign in" heading is shown */
   await page.goto("https://www.playwithweb.com/qa/login.html");
   await expect(page.locator("h1")).toBeVisible();

   /*Click "Create an account"
   Expected - The "Create your account" page opens */
   await page.getByRole('link', {name:'Create an account'}).click();

   /*Read the note under the heading
   Expected "This is a practice store: any made-up name, email and password will work."*/
   const text1:Locator = page.locator("//p[contains(text(),'This is a practice store: any made-up name, email and password will work.')]");
   await expect(text1).toBeVisible();

   /*Enter any first name in "First name"
   Expected - The name appears in the field */
   const firstName:Locator = page.getByLabel("First name");
   firstName.fill("Anusha");
   const EnteredFN = await firstName.inputValue();
   
   /*Enter any last name in "Last name" 
   Expected - The name appears in the field*/
   await page.getByLabel("Last name").fill("Vundamatla")

   /*Enter a new email in "Email" (any made-up address that was not used before)
   Expected - The email appears in the field */
   const email:Locator =  page.getByRole('textbox', {name: 'Email'});
   email.fill("2001@example.com");
   await expect(email).toHaveAttribute('type', 'email');

   /*Enter a password in "Password" (8+ characters with a number)
   Expected - Shown as dots */
   await page.locator("input#reg-password").fill("Practice123");
   await expect(page.locator("input#reg-password")).toHaveAttribute('type','password');
   
   /*Enter the same password in "Confirm password"
   Expected - Shown as dots */
   await page.locator("input#reg-confirm").fill("Practice123");
   await expect(page.locator("input#reg-confirm")).toHaveAttribute('type','password');

   /*Choose any country in "Country"
   Expected - The region list becomes available*/
   await page.locator("select#reg-country").selectOption({label:'India'});

   /*Tick "I agree to the Terms & privacy"
   Expected - "Create account" becomes enabled */
   await expect(page.getByRole('button', {name:'Create account'})).toBeDisabled();

   await page.locator("input#terms").click();
   await expect(page.getByRole('button', {name:'Create account'})).toBeEnabled();

   /*Click "Create account"
   Expected - "Account created! Welcome, <first name>." appears */
   await page.getByRole('button', {name:'Create account'}).click();
   await expect(page.locator("p#welcome")).toContainText("Account created! Welcome," + EnteredFN);

   /*Click "Sign in" under the message and sign in with the new email and password
   Expected - My account greets "Hi, <first name>" */
   await page.locator("a.btn").click();
   await page.getByRole('textbox', {name: 'Email'}).fill("2001@example.com");
   await page.getByRole('textbox', {name: 'Password'}).fill("Practice123");
   await page.getByRole('button', {name:'Sign in'}).click();
   await expect(page.locator("#greeting")).toContainText("Hi," + EnteredFN);


});