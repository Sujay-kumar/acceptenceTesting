var {Given} = require('cucumber');
const chai = require('chai');
const Webdriver = require('selenium-webdriver');
const By = Webdriver.By;
var map = Webdriver.promise.map;

Given(/^I open the site "\/"$/, function () {
    const url = browser.options.baseUrl;
    browser.url(url);
});
Given(/^I wait (\d+) seconds$/, function (time) {
 browser.pause(3000)
});
Given(/^I verify five days weather is displayed$/, function () {
   //let elem = $("//div[@data-reactroot]/div/div/span[1]/span[1]");
    var results = $$("//div[@data-reactroot]/div/div/span[1]/span[1]");
    let text = results.length;
    if(text===5){
        console.log("five days weather is displayed");
    }else {
        console.log("Displaying less or more than 5 days");
    }
});
Given(/^I click on a (.*) to check hourly forecast$/, function (val) {
    let elem = $("//*[@data-test='day-"+val+"']").click();
    let horlyForcast = $("//span[contains(@data-test, 'hour-')]").isDisplayed();


});
Given(/^I click on a (.*) to hide the wethere forecast$/, function (val) {
    browser.pause(3000);
    let elem = $("//*[@data-test='day-"+val+"']").click();
    browser.pause(3000);
});
Given(/^I enter (.*) name$/, function (city) {
    elem = $('#city');
    clearExixtingValue = elem.clearValue();
    console.log('after');
    EnterCiry = elem.setValue(city);
    browser.pause(4000);
    elem.setValue(Webdriver.Key.ENTER);
    browser.pause(4000);
});