import {test,expect, Locator} from '@playwright/test';

test("Featured products and the About section", async({page})=>{await page.goto("https://www.playwithweb.com/qa/login.html");
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

   /*Count the product cards in "Featured products"
   Expected - There are exactly 4 cards */
   const featuredProducts = page.locator("//div[@id='featured']/article");
   await expect(featuredProducts).toHaveCount(4);

   /*Scroll to the section "A web automation practice website"
   Expected - It explains the site and links to the 130 test cases */
   await page.locator("#about-title").scrollIntoViewIfNeeded();


   /*Click "130 step-by-step test cases" in that section
   Expected - The test cases page opens */
   await page.getByText("130 step-by-step test cases").click();
   await expect(page.locator("h1")).toBeVisible();

});