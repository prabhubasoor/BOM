import { Page } from '@playwright/test';
import { CityNames } from '../testHelpers/enums';


export class BomMainPage {
    readonly page : Page;
    private lnkCapitals = ".capital a";
    private header = "h1";

    /**
     * @param {import('@playwright/test').Page} page
     */
    
    constructor(page : Page) {
        this.page = page;
    }

    async selectCityName(cityName : CityNames){

        await this.page
            .locator(this.lnkCapitals)
            .filter({has : this.page.locator(`text="${cityName}"`)})
            .click();

        await this.page
            .locator(this.header)
            .waitFor();
    }
};