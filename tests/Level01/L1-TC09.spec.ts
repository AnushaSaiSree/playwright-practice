import{test,expect, Locator} from '@playwright/test';

test("Footer: copyright, Powered by CodeWithPalla and the Test cases link", async({page})=>{
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


   /* Scroll to the footer
   Expected - The navy footer is visible */
   const footer:Locator = page.locator("//div[@class='wrap footer-bottom']");
   await footer.scrollIntoViewIfNeeded();
   await expect(footer).toBeVisible();
   

   /*Read the copyright line
   Expected - It contains the current year and "PlayWithWeb" */
   const copyright:Locator = page.getByTestId("copyright");
   await expect(copyright).toContainText("2026 PlayWithWeb");


   /*Read the "Powered by" line
   Expected - "Powered by CodeWithPalla" with a link to https://codewithpalla.com */
   const powerdby:Locator = page.getByTestId("powered-by");
   await expect(powerdby).toContainText("Powered by CodeWithPalla");

   const powerdbyLink:Locator = page.locator("//a[1][@href='https://codewithpalla.com']");
   await expect(powerdbyLink).toHaveAttribute("href", "https://codewithpalla.com");

   /*Click the small "Test cases" link
   Expected - The URL ends with test-cases.html and the heading reads "Test cases" */
   await page.locator(".qa-link").click();
   await expect(page).toHaveURL("https://www.playwithweb.com/qa/test-cases.html");
   const TCheading:Locator = page.locator("h1");
   await expect(TCheading).toContainText("Test cases");
});
