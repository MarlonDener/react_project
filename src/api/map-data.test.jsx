import { mapData } from './map-data';
describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pageData = mapData();
    expect(pageData.slug).toBe(undefined);
    expect(pageData.title).toBe(undefined);
  });
  it('should map data even if there are data ', () => {
    const pageData = mapData([
      {
        footer_text: '<p>Hey</p>',
        slug: '',
        title: '',
      },
    ])[0];
    expect(pageData.footerHtml).toBe('<p>Hey</p>');
    expect(pageData.slug).toBe('');
    expect(pageData.title).toBe('');
  });
});
