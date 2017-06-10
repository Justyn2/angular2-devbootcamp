import { DEVBOOTCAMPAPPPage } from './app.po';

describe('devbootcamp-app App', () => {
  let page: DEVBOOTCAMPAPPPage;

  beforeEach(() => {
    page = new DEVBOOTCAMPAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
