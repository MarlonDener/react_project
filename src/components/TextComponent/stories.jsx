import { TextComponent } from '.';
export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum contain letters Lorem ipsum contain letters, Lorem ipsum contain letters.
    Lorem ipsum contain letters,letters Lorem ipsum contain letters, Lorem ipsum contain letters
    letters Lorem ipsum contain letters, Lorem ipsum contain letters letters Lorem ipsum contain letters, Lorem ipsum contain letters
    letters Lorem ipsum contain letters, Lorem ipsum contain letters'`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
