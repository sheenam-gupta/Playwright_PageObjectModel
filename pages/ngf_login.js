const { expect } = require("@playwright/test")

exports.NGFLoginPage = class NGFLoginPage {

    constructor(page) {
        this.page = page
        this.login_link = page.getByRole('link', { name: 'Login' })
        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.heading_text = page.getByText(/Welcome, [A-Za-z]+$/i)
        this.community_space_link = page.getByRole('link', { name: 'Community Space' })
        this.view_suggestions_button = page.getByRole('button', { name: 'View all Suggestions' })
        this.community_heading_text = page.getByText(/Suggestions/)
    }
    async goto_NGF_URL() {
        await this.page.goto('http://localhost:4200/');
    }
    async click_login() {
        await this.login_link.click();
    }
    async ngf_login(username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()

    }
    async verify_user() {
        //const locator = page.getByRole('heading', { name: 'Welcome, newuser' })
        await expect(this.heading_text).toHaveText(/Welcome, .*/);
    }

    async click_community_space()
    {
        await this.community_space_link.click()
    }

    async view_suggestions()
    {
        await this.view_suggestions_button.click()
    }

    async verify_suggestion_page()
    {
        await expect(this.community_heading_text).toHaveText(/Suggestions/);
    }
        
}