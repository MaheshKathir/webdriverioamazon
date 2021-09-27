import amazonPage from '../pageobjects/amazonpage';
import flipkartPage from '../pageobjects/flipkartpage';
import allureReporter from '@wdio/allure-reporter';
import { expect as chaiExpect } from 'chai';

describe('Validate Amazon Page', () =>{

     beforeEach(()  => { 
         amazonPage.open();
     });

    it('should show the Watches page', () =>{
        allureReporter.addFeature('Watch Page');
        
        amazonPage.openCategories.click();
        amazonPage.openCategories.scrollIntoView();
        //expect(openCategories).toBeDisplayed();
        
        amazonPage.selectCategory.click();
       
        amazonPage.selectSubCategory.click();
       
        amazonPage.enterValue.setValue('Watches');

        amazonPage.submitValue.click();
        browser.pause(2000);
        expect(browser).toHaveUrlContaining('amazon')

        // let geturl = browser.getUrl();
        // chaiExpect(geturl).to.include('/Watches/');         
         
        });
    
    it('should go account and change pincode', () =>{
        allureReporter.addFeature('Account Page');
       
        
        amazonPage.address.click();

        amazonPage.addPin.setValue('600098');

        amazonPage.enterPin.click();
        browser.pause(2000)

        amazonPage.checkPin;
        expect(checkPin).toHaveText('Chennai 600098');
        browser.close();

    });

    it('should show account page', () =>{
        allureReporter.addFeature('Account check');
        
        
        amazonPage.account.moveTo();
       
        amazonPage.selectAccount.click();
       
        amazonPage.selectPrime.click();

        //expect(browser).toHaveUrlContaining('amazon')
       
        //expect(amazonPage.findtext).toHaveText('Your Account');
        
        let title = browser.getTitle();
        console.log(title);

        
        let haveTitle = browser.getTitle();
        console.log(haveTitle);
        expect(haveTitle).toHaveTitle('signin');
        browser.close();
    });

    it('should show fashop page ', () =>{
        allureReporter.addFeature('validate amazon category page and set price');
        
         amazonPage.clickfashion.click();
        
         amazonPage.watchfashion.scrollIntoView();
         amazonPage.watchfashion.click();
        
         amazonPage.selectAll.click();
    
         //amazonPage.dropdown.click();
        // let selectAttribute = (selectByVisibleText('₹2,000 - ₹5,000'));
       
         //amazonPage.dropdown.click();
        // browser.refresh();
    });

});

//     after(() => {  
//         flipkartPage.open();
        
//     });

//     describe('Validate Flipkart Page', () =>{
//         it('should select dropdown list', () =>{
//             allureReporter.addFeature('validate flipkart category page and set price');
            
//              flipkartPage.closeX.click();
//              browser.dismissAlert();
            
//              clickfashion.moveTo();
             
//              flipkartPage.menFwear.moveTo();
            
//              flipkartPage.selectAll.moveTo().click();
        
//              flipkartPage.dropDown.click();
//              flipkartPage.selectByAttribute('value', '2000').click();
//              browser.refresh();


//     });

// });
