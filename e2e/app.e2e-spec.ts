import { KarmaPage } from './app.po';

describe('karma App', function() {
  let page: KarmaPage;

  beforeEach(() => {
    page = new KarmaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
