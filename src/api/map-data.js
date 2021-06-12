import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';

export const mapData = (pageData = [{}]) => {
  return pageData.map((data) => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;
    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
