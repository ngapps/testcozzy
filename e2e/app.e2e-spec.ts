import { MegderDemoAppPage } from './app.po';

describe('megder-demo-app App', function() {
  let page: MegderDemoAppPage;

  beforeEach(() => {
    page = new MegderDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cz works!');
  });
});
