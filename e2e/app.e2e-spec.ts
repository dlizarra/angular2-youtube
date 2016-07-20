import { Angular2YoutubePage } from './app.po';

describe('angular2-youtube App', function() {
  let page: Angular2YoutubePage;

  beforeEach(() => {
    page = new Angular2YoutubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dl works!');
  });
});
