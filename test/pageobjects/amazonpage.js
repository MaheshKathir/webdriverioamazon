import Page from './page';

class amazonPage extends Page {

    
    get openCategories(){
        return $('//*[@id="nav-hamburger-menu"]/span');
    }
    get selectCategory(){
        return $('//*[@id="hmenu-content"]/ul[1]/li[17]/a/div');
    }
    get  selectSubCategory(){
        return $('//*[@id="hmenu-content"]/ul[10]/li[10]/a');
    }
    get enterValue(){
        return $('//*[@id="twotabsearchtextbox"]');
    }
    get submitValue(){
        return $('//*[@id="nav-search-submit-button"]');
    }


    get address(){
        return $('//*[@id="nav-global-location-popover-link"]');
    }
    get addPin(){
        return $('//*[@id="GLUXZipUpdateInput"]');
    }
    get enterPin(){
        return $('//*[@id="GLUXZipUpdate"]/span/input');
    }
    get checkPin(){
        return $('//*[@id="glow-ingress-line2"]');
    }


    get account(){
        return $('//*[@id="nav-link-accountList-nav-line-1"]');
    }
    get selectAccount(){
        return $('//*[@id="nav-al-your-account"]/a[1]/span');
    }
    get selectPrime(){
        return $('//*[@id="a-page"]/div[2]/div/div[2]/div[3]/a/div/div/div');
    }
    get findText(){
        return $('//*[@id="a-page"]/div[2]/div/div[1]/h1');
    }


    get clickfashion(){
        return $('//*[@id="nav-xshop"]/a[3]');
    }
    get watchfashion(){
        return $('//*[@id="sobe_d_b_5_3"]/a/img');
    }
    get selectAll(){
        return $('//*[@id="s-refinements"]/div[5]/ul/li[2]/span/a/span');
    }
    get dropdown(){
        return $('//*[@id="s-refinements"]/div[5]/ul/li[2]/span/a/span');
    }
    
    open() {
        super.open('https://www.amazon.in/ref=nav_logo');
    }

}
export default new amazonPage();