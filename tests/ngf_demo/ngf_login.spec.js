import { test, expect } from '@playwright/test'
import { NGFLoginPage, LoginTest } from '../../pages/ngf_login';

const testdata = JSON.parse(JSON.stringify(require("../../testdata.json")))

test('test', async ({ page }) => {

    const Login = new NGFLoginPage(page);
    await page.pause();

    await Login.goto_NGF_URL();
    await Login.click_login();
    await Login.ngf_login(testdata.ngf_username, testdata.ngf_password);
    await Login.verify_user();
    await Login.click_community_space();
    await Login.view_suggestions();
    await Login.verify_suggestion_page();


    //   await page.goto('http://localhost:4200/');
    //   await page.getByRole('link', { name: 'Login' }).click();
    //   await page.getByRole('textbox', { name: 'Username:' }).click();
    //   await page.getByRole('textbox', { name: 'Username:' }).fill('newuser');
    //   await page.getByRole('textbox', { name: 'Password:' }).click();
    //   await page.getByRole('textbox', { name: 'Password:' }).press('CapsLock');
    //   await page.getByRole('textbox', { name: 'Password:' }).fill('S');
    //   await page.getByRole('textbox', { name: 'Password:' }).press('CapsLock');
    //   await page.getByRole('textbox', { name: 'Password:' }).fill('Sheenam');
    //   await page.getByRole('textbox', { name: 'Password:' }).press('CapsLock');
    //   await page.getByRole('textbox', { name: 'Password:' }).fill('SheenamR');
    //   await page.getByRole('textbox', { name: 'Password:' }).press('CapsLock');
    //   await page.getByRole('textbox', { name: 'Password:' }).fill('SheenamRohit1$');
    //   await page.getByRole('button', { name: 'Login' }).click();
    //   await page.getByRole('heading', { name: 'Welcome, newuser' }).click();

    //await expect(page.get_by_text("Welcome, John!")).to_be_visible()

    // await page.getByRole('link', { name: 'Community Space' }).click();
    // await page.getByRole('button', { name: 'View all Suggestions' }).click();
    // await page.getByRole('heading', { name: 'Suggestions' }).click();
    //   await page.getByRole('list').locator('i').click();
    //   await page.getByText('Logout').click();
});
