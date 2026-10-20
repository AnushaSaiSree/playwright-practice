import{test,expect, Locator} from '@playwright/test';

test('Deals link opens todays deals', async({page})=>{

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

  /*  Click "Deals" in the Main navigation
  Expected - The deals page opens*/
  await page.getByRole('link',{name:'Deals', exact:true}).click();
  /*Read the page heading
  Expected - The heading reads "Today's deals" */
  const headinginDeals:Locator = page.locator("h1");
  console.log(await headinginDeals.textContent());


});