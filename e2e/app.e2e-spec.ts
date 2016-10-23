import { MigrationProjectPage } from './app.po';

describe('migration-project App', function() {
  let page: MigrationProjectPage;

  beforeEach(() => {
    page = new MigrationProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
