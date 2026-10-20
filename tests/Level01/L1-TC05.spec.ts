import{test,expect, Locator} from '@playwright/test';

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
   /*Click the PlayWithWeb logo in the header
   Expected - The home page opens */
   await page.getByAltText("PlayWithWeb logo").click();
   await expect(page).toHaveURL("https://www.playwithweb.com/qa/index.html");

   /*Click "Shop" in the Main navigation
   Expected - The catalogue opens */
   await page.getByRole('link', {name:'Shop', exact: true}).click();

   /*Check the URL and the page heading
   Expected - The URL ends with products.html and the heading reads "All products" */
   await expect(page).toHaveURL("https://www.playwithweb.com/qa/products.html");
   const headerInShop:Locator = page.locator("#page-title");
   await expect(headerInShop).toBeVisible();


});