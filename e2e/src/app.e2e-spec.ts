import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/home');
    });
    it('should have a title saying Udgram', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Udagram');
      });
    });
    it('should have a title saying Home', () => {
      page.getPageOneCreatePostText().then(title => {
        expect(title).toEqual('CREATE A NEW POST');
      });
    });
  });
});
