import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CoreReactRollup } from './CoreReactRollup';

const Story: ComponentMeta<typeof CoreReactRollup> = {
  component: CoreReactRollup,
  title: 'CoreReactRollup',
};
export default Story;

const Template: ComponentStory<typeof CoreReactRollup> = (args) => (
  <CoreReactRollup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
