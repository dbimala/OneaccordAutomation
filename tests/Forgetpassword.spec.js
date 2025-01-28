// @ts-check
import { test, expect } from '@playwright/test';
import { LOCATORS } from '../constants/locators';

//Case1
test('forget password button clickable', async ({ page }) => {
  await page.goto('https://admin.dev.oneaccord.cc/login');
  await page.locator('xpath=//p[contains(text(),"Forgot Password?")]').click();
  await expect(page).toHaveURL(/forgot-password/);
})