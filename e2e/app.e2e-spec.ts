import { EocSalesFunnelPage } from './app.po';

describe('eoc-sales-funnel App', () => {
  let page: EocSalesFunnelPage;

  beforeEach(() => {
    page = new EocSalesFunnelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
