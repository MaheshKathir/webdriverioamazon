import flipkartPage from '../pageobjects/flipkartpage';
import allureReporter from '@wdio/allure-reporter';

describe('Validate Flipkart Page', () =>{
    it('should select dropdown list', () =>{
        allureReporter.addFeature('validate flipkart category page and set price');
        
        flipkartPage.open();
         flipkartPage.closeX.click();
        // browser.dismissAlert();
        
        flipkartPage.clickfashion.moveTo();
        flipkartPage.mensFwear.waitForExist({ timeout: 5000 }); 

         flipkartPage.mensFwear.moveTo();
         flipkartPage.selectAll.waitForExist({ timeout: 5000 }); 
        
         flipkartPage.selectAll.click();
   
         flipkartPage.dropDown.selectByAttribute('value', '2000');
         browser.refresh();
    
    });

});