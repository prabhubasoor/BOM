import { Page } from '@playwright/test';
import { Days } from '../testHelpers/enums';
import { Locator } from 'playwright';

export class BomCityForcastPage {
    readonly page : Page;
    private lblRainForecasts = ".forecast .rain em.pop";

    /**
     * @param {import('@playwright/test').Page} page
     */
    
    constructor(page : Page) {
        this.page = page;
    }

    async getRainForcast(day : Days):Promise<number> {
        
        const rainForecasts : Locator = this.page.locator(this.lblRainForecasts);
        const rainForecastText : any  =  (await rainForecasts.nth(day).textContent());

        return parseInt(rainForecastText);
    }

};