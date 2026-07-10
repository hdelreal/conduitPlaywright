import { test, expect, Page } from '@playwright/test';
import { MedPage } from '../page-objects/medPage';

const medication = {
    'name': 'New Test Med 20mg',
    'prescription': 'Take once daily',
    'appRn': 'RN Example',
    'dosage': '1 pill per hour'
}

test.describe('Medication Event Management page', () => {
  test('disables the medication form until Add is clicked and saves a new medication row', async ({ page }) => {
    const medPage = new MedPage(page);

    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Medication Event Management' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Medication Name & Strength' })).toBeVisible();
    await expect(page.locator('#medication-name')).toBeDisabled();
    await expect(page.getByRole('button', { name: 'Save Medication' })).toBeDisabled();

    //Adding newMedication using the MedPage class
    await medPage.addNewMedication(medication);

    await expect(page.locator(`//td[text()="${medication.name}"]/parent::tr`)).toBeVisible();
    await expect(page.locator(`//td[text()="${medication.prescription}"]/parent::tr`)).toBeVisible();
    await expect(page.locator(`//td[text()="${medication.appRn}"]/parent::tr`)).toBeVisible();

    await page.waitForTimeout(5000);
  });
});