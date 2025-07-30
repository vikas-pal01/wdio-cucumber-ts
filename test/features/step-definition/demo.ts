import { Given , When , Then } from "@wdio/cucumber-framework";
import logger from "../../helper/logger";

Given('Open sauce demo', async function(){

  await  browser.url("https://www.saucedemo.com/v1/");
    browser.debug();
})

When('I enter the username',async function(){
let userName_ele=await $(`[name=user-name]`);
await userName_ele.setValue("standard_user");


})

When('I enter the password',async function(){
let pwd_ele=await $(`[name=password]`);
await pwd_ele.setValue("secret_sauce");
});

When('I clicked on login btn',async function () {
    let loginbtn_ele=await $('input[type="submit"]');
     await loginbtn_ele.click();
})

Then('I should be logged in successfully',async function() {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/v1/inventory.html');
    console.log("success");
})


Given('web is opened',async function() {
  await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
  await browser.setTimeout({implicit:15000,pageLoad:10000});
  await browser.maximizeWindow();

})

When('perform web Interactions',async function() {
 let radioBtn=await $(`input[value='radio1']`);
 await radioBtn.click();

 let dropdown= await $(`#dropdown-class-example`);
//  await dropdown.selectByIndex(1);
 await dropdown.selectByAttribute('value','option2')
 await browser.pause(10000); 
})


/*Window Handling
*/

Given('Open the url',async function(){
  await browser.url("https://the-internet.herokuapp.com/windows");
  await browser.setTimeout({implicit:15000,pageLoad:10000});
  await browser.maximizeWindow();
})

When('Click on here to open new window',async()=>{
  console.log(`>>>>Entered in the window handle`);
  let clickBtn= await $(`a=Click Here`);
  let elementBtn=await $(`a=Elemental Selenium`);  
  clickBtn.click();
  elementBtn.click();
  let currentTitle=await browser.getTitle();
  console.log(`>> current window title:${currentTitle}`);

  //switch to specific window
  let windowHandles=await browser.getWindowHandles();
  for(let i=0; i<windowHandles.length; i++){
    console.log(`>> window handle ${windowHandles[i]}`);
    await browser.switchToWindow(windowHandles[i]);
    currentTitle=await browser.getTitle();
    if(currentTitle==="Home | Elemental Selenium"){
      await browser.switchToWindow(windowHandles[i]);
      break;
  }
}
})

 //alerts


// await $(`button=Click for JS Alert`).click();
// if(await browser.isAlertOpen()){
//    await browser.acceptAlert();
//   console.log(await $(`#result`).getText());
// }
// await $(`button=Click for JS Confirm`).click();
// await $(`button=Click for JS Prompt`).click();
// if(await browser.isAlertOpen()){
//   await browser.sendAlertText('yes');
//    await browser.acceptAlert();
//    browser.pause(1000);
//   //  let getAlertText=await $(`#result`).getText();
//   // console.log(getAlertText);
// }


//   await browser.debug();


// })


// Given('Open the url',async()=>{
//   await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
//   await browser.setTimeout({implicit:15000,pageLoad:10000});
//   await browser.maximizeWindow();
// });

// When('Click on JS Alerts',async()=>{
//   await $(`button=Click for JS Alert`).click();
// if(await browser.isAlertOpen()){
//    await browser.acceptAlert();
//   // console.log(await $(`#result`).getText());
// }
//   browser.pause(1000);

  
//   browser.debug();
// });