import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import Browser from '../../../pages/browser';
import HomePage from '../../../pages/homePage';

When(/^I select ship To me option$/, () => {
  HomePage.type('github');
});


Then(/^I am redirected to another domain$/, () => {
  Browser.expect().toBeInOtherDomain();
});
