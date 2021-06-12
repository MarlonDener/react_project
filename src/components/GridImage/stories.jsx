import { GridImage } from '.';
import mock from './mock';
export default {
  title: 'GridImage',
  component: GridImage,
  args: {
    title: 'o corre',
  },
};
export const Template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
