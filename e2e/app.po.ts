import { browser, element, by } from 'protractor';

export class MegderDemoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cz-root h1')).getText();
  }
}
