import { MGorSoftserveTestProjectPage } from './app.po';

describe('mgor-softserve-test-project App', () => {
  let page: MGorSoftserveTestProjectPage;

  beforeEach(() => {
    page = new MGorSoftserveTestProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
