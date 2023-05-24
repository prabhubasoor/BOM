import { test, expect, chromium } from "@playwright/test";
import { BomCityForcastPage } from '../pages/bomCityForcastPage';
import { BomMainPage } from '../pages/bomMainPage';
import {CityNames, Days } from '../testHelpers/enums';
import { getDDMMMFormatedDate } from '../testHelpers/dateUtils';

test.describe('Australian Government Bureau of Meteorology web system Test.', function () {
    let page;
    test.beforeEach(async () => {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();

        page = await context.newPage();
        await page.goto("http://www.bom.gov.au");
    });

    test("Verify rain forcast for the Sydney city, 3rd day from today.", async () => {
        //Arrange
        const mainPage = new BomMainPage(page);
        const cityForcastPage = new BomCityForcastPage(page);
       
        //Act
        await mainPage.selectCityName(CityNames.Sydney);
               
        const actualrainForecast = await cityForcastPage.getRainForcast(Days.ThirdDay);
        const formatedDayMonth = getDDMMMFormatedDate(Days.ThirdDay);
        
        //Assert
        expect(actualrainForecast).isGreaterThan(50, `Looks like it will a rainy day on ${formatedDayMonth}.`);
    });

});
