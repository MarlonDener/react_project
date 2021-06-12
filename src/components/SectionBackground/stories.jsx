import { SectionBackground } from '.';
export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: 'SectionBackground',
    background: true,
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
