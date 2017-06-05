import { StateManagementRxJSDEMOPage } from './app.po';

describe('state-management-rx-jsdemo App', () => {
  let page: StateManagementRxJSDEMOPage;

  beforeEach(() => {
    page = new StateManagementRxJSDEMOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
