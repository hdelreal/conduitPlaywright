import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class MedPage extends BasePage {
    readonly heading: Locator;
    readonly medications: Locator;
    readonly medDiv: Locator;
    readonly saveButton: Locator;
    readonly addButton: Locator;
    readonly prescription: Locator;
    readonly appRn: Locator;
    readonly dosage: Locator;
    readonly selectFile: Locator;

    constructor (page: Page) {
        super(page);
        this.heading = this.page.getByRole('heading', { name: 'Medication Event Management' });
        this.medications = this.page.getByRole('textbox', { name: 'Medication Name & Strength' });
        this.medDiv = this.page.locator('#medication-name');
        this.saveButton = this.page.getByRole('button', { name: 'Save Medication' });
        this.addButton = this.page.getByRole('button', { name: 'Add' });
        this.prescription = this.page.locator('#prescription');
        this.appRn = this.page.locator('#approving-rn');
        this.dosage = this.page.locator('#dosage');
        this.selectFile = this.page.locator('#prescription-image');
    }

    async addNewMedication(medication: any) {
        await this.addButton.click();
        await expect(this.medDiv).toBeEnabled();
        await this.medDiv.fill(medication.name);
        await this.page.waitForTimeout(2000);
        await this.prescription.fill(medication.prescription);
        await this.page.waitForTimeout(2000);
        await this.appRn.fill(medication.appRn);
        await this.page.waitForTimeout(2000);
        await this.dosage.fill(medication.dosage);
        await this.page.waitForTimeout(2000);
        await this.selectFile.setInputFiles('/Users/anibaldelreal/Desktop/Playwright/carasolva.png');
        await this.page.waitForTimeout(2000);
        await expect(this.saveButton).toBeEnabled();
        // await this.saveButton.click();
    }
}
