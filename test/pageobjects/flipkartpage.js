import Page from './page';

class flipkartPage extends Page {


get closeX(){
    return $("//button[@class='_2KpZ6l _2doB4z']");
}
get clickfashion(){
    return $("//div[text()='Fashion']");
   
}
get mensFwear(){
    return $("//a[text()='Men Footwear']");
}
get selectAll(){
    return $("//a[text()='All']");
}
get dropDown(){
    return $('//*[@id="container"]/div/div[3]/div[1]/div[1]/div/div/div/section[2]/div[4]/div[3]/select');
}

open(){
    super.open('https://www.flipkart.com/')
}

}
export default new flipkartPage();