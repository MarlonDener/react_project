import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { Form } from '../../components/Form';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { useLocation } from 'react-router-dom';
import Config from '../Config';

export const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : 'landing-page';
    console.log('meu slug', slug);
    const load = async () => {
      try {
        const data = await fetch(Config.url);
        const json = await data.json();
        /*await new Promise((r) => {
          return setTimeout(() => {
            setData(pageData[0]);
            r();
          }, 100000);
        });
        */
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = 'Página não encontrada';
    }
    if (data && !data.slug) {
      document.title = 'Carregando';
    }
    if (data && data.title) {
      document.title = `${data.title} | ${Config.name}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }
  if (data && !data.slug) {
    return <Loading />;
  }
  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;
  console.log(menu);
  return (
    <div className="app">
      <Styled.Wrapper>
        <Menu {...menu} />
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}${index}`;
          if (component === 'section.section-two-columns') {
            return (
              <GridTwoColumn
                key={key}
                title={section.title}
                text={section.text}
                imgSrc={section.srcImg}
                sectionId={section.sectionId}
              />
            );
          } else if (component === 'section.section-content') {
            return (
              <GridContent key={key} {...section} id={section.sectionId} />
            );
          } else if (component === 'section.section-grid-text') {
            return <GridText key={key} {...section} id={section.sectionId} />;
          } else if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...section} id="gallery" />;
          } else {
            console.log(component);
          }
        })}
        <GoTop />
        <Form />
        <Footer />
      </Styled.Wrapper>
    </div>
  );
};
