const { test, expect, mergeExpects } = require("@playwright/test");

test("links in header check", async ({ page }) => {
  await page.goto("https://dou.ua/");
  await page.getByRole("link", { name: "Форум", exact: true }).click();
  await expect(page).toHaveURL("https://dou.ua/forums/");
  await page.getByRole("link", {name: "Стрічка", exact: true }).click();
  await expect(page).toHaveURL("https://dou.ua/lenta/");
  await page.getByRole("link", {name: "Зарплати", exact: true }).click();
  await expect(page).toHaveURL("https://jobs.dou.ua/salaries/?period=2023-12&position=Middle%20SE");
  await page.getByRole("link", {name: "Робота", exact: true }).click();
  await expect(page).toHaveURL("https://jobs.dou.ua")
  await page.getByRole("link", {name: "Календар", exact: true }).click();
  await expect(page).toHaveURL("https://dou.ua/calendar/")
});


test("login form", async ({ page }) => {
  await page.goto("https://dou.ua/");
  await page
    .getByRole("link", { name: "Вхід і реєстрація", exact: true })
    .click();
    await page.getByLabel('я згоден(-на)').isChecked();
    await page.getByText('Google LinkedIn GitHub Facebook Увійти за поштою').isEnabled();
});


test("login with invalid credentials", async ({page}) => {
  await page.goto("https://dou.ua/");
  await page.getByRole('link', { name: 'Вхід і реєстрація' }).click();
  await page.getByRole('link', { name: 'за поштою' }).click();
  await page.locator('[id="_loginDialog"] input[type="text"]').fill('invalid@gmail.com');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('qazwsx123');
  await page.getByRole('button', { name: 'Увійти' }).click();
  await expect (page.getByText('Неправильний пароль')).toBeVisible();
})


test("check titles", async ({page}) => {
  await page.goto("https://dou.ua/");
  await page.getByRole("link", { name: "Форум", exact: true }).click();
  await expect (page.locator('//a[@class="bi bi-tools"]')).toContainText("статті");
  await expect (page.locator('//a[@class="bi bi-vector-pen"]')).toHaveText('Блоги');
  await expect (page.locator('//a[@class="bi bi-chat-right"]')).toHaveText('Нові обговорення');
})


test("maxi-header can be closed", async ({ page }) => {
  await page.goto("https://dou.ua/");
  await expect(page.locator('//div[@id="max-header-adv-id"]')).toBeVisible();
  await page.locator("#max-header-close-id").click();
  await expect (page.locator('//div[@id="max-header-adv-id"]')).toBeHidden()
});


test("social media block in footer", async ({ page }) => {
  await page.goto("https://dou.ua/");
  await expect(page.locator('//footer[@class="b-footer"]')).toBeVisible();
  await expect(page.locator('//footer[@class="b-footer"]')).toContainText('Ми в соцмережах:');
})