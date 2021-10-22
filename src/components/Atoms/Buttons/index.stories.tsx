import {ButtonComponent} from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default  {
    title: 'Trading/Atoms/Button',
    component: ButtonComponent,
    argTypes: {
    },
  } as ComponentMeta<typeof ButtonComponent>;




const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
variant:"contained",
children:"SELL"
};

export const Buy = Template.bind({});
Buy.args = {
variant:"outlined",
children:"BUY"
};
export const Disabled = Template.bind({});
Buy.args = {
variant:"text",
children:"HELLO"
};