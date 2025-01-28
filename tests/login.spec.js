// @ts-check
import { test, expect } from '@playwright/test';
import { LOCATORS } from '../constants/locators';
//Case1
  test('Valid login user', async ({ page }) => {
    await page.goto('https://admin.dev.oneaccord.cc/login');
    await page.fill('input[name="email"]', 'bimala.rai+101@webpoint.io');
    await page.fill('input[name="password"]', 'Password@123');
    await page.click('button[type="submit"]'); 
    await expect(page).toHaveURL(/dashboard/)
  });
  //Case2
  
  test('invalid login user', async ({ page }) => {
    await page.goto('https://admin.dev.oneaccord.cc/login');
    await page.fill('input[name="email"]', 'churchh@admin.com'); 
    await page.fill('input[name="password"]', 'Passwword@123'); 
    await page.click('button[type="submit"]'); 
  const errorMessage=page.locator(LOCATORS.ERROR_TOAST)
  await expect(errorMessage).toHaveText("Email or Password is not correct.")
  });

  //case3
  test('invalid email format', async ({ page }) => {
    await page.goto('https://admin.dev.oneaccord.cc/login');
    await page.fill('input[name="email"]', 'bimala');
    await page.fill('input[name="password"]', 'Pass@123');
    await page.click('button:has-text("Login")');
    const errorMessage = await page.isVisible('text=Email address is not valid.');
  });
