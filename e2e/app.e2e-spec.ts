import { PopulationEstimatePage } from './app.po';

describe('population-estimate App', () => {
  let page: PopulationEstimatePage;

  beforeEach(() => {
    page = new PopulationEstimatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
