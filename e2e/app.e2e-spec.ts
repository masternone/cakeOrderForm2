import { CakeOrderForm2Page } from './app.po';

describe('cake-order-form2 App', function() {
  let page: CakeOrderForm2Page;

  beforeEach(() => {
    page = new CakeOrderForm2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
