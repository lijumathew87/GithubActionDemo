import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/homePage';

Given(/^I'm at fittedsite$/, () => {
  HomePage.visit();
});

When(/^I select ship To me option$/, () => {
  HomePage.selectitem();
});