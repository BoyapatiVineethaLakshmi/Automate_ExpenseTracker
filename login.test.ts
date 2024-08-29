import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://main--flourishing-dusk-613926.netlify.app/');
  await page.getByPlaceholder('Enter Text....').click();
  await page.getByPlaceholder('Enter Text....').fill('fruits');
  await page.getByPlaceholder('Enter amount...').click();
  await page.getByPlaceholder('Enter amount...').fill('100');
  await page.getByRole('button', { name: 'Add transaction' }).click();
  await page.getByPlaceholder('Enter Text....').click();
  await page.getByPlaceholder('Enter Text....').fill('vegetables');
  await page.getByPlaceholder('Enter amount...').click();
  await page.getByPlaceholder('Enter amount...').fill('900');
  await page.getByRole('button', { name: 'Add transaction' }).click();
  await page.getByPlaceholder('Enter Text....').click();
  await page.getByPlaceholder('Enter Text....').fill('Rent');
  await page.getByPlaceholder('Enter amount...').click();
  await page.getByPlaceholder('Enter amount...').fill('-234');
  await page.getByRole('button', { name: 'Add transaction' }).click();
  await page.getByRole('heading', { name: 'Income', exact: true }).click();
  await page.getByRole('heading', { name: 'Expense', exact: true }).click();
  await page.getByText('Expense $').click();
  await page.getByText('$1000.00').click();
  await page.getByRole('heading', { name: 'Your Balance' }).click();
  await page.getByRole('heading', { name: '$' }).click({
    clickCount: 4
  });
  await page.getByRole('heading', { name: 'Your Balance' }).click();
  await page.getByRole('heading', { name: '$' }).click();
  await page.getByText('Income $').click();
  await page.getByText('Expense $').click();
});