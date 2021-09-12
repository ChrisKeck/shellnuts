import { test,expect } from '@playwright/test';

test.describe('app-root', async() => {
  test.beforeEach(async({page})=>{
    await page.goto("http://localhost:3333")
  })
  test('renders', async ({page}) => {
    await expect(page).toHaveURL("http://localhost:3333/")
  });
});

