import { test, expect } from '@playwright/test';
import {LoginPage, LoginTest} from '../../pages/login';

test('test', async ({ page }) => {

  const Login =new LoginPage(page);

  await Login.goToLoginPage();
  await Login.login('tomsmith','SuperSecretPassword!');


  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  // await page.getByRole('textbox', { name: 'Password' }).fill('S');
  // await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  // await page.getByRole('textbox', { name: 'Password' }).fill('Super');
  // await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  // await page.getByRole('textbox', { name: 'Password' }).fill('SuperS');
  // await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecret');
  // await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretP');
  // await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
});