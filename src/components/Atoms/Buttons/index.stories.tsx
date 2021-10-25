import {ButtonComponent} from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from "../../../themes/index";

export default  {
    title: 'Trading/Atoms/Button',
    component: ButtonComponent,
    argTypes: {
    }
  } as ComponentMeta<typeof ButtonComponent>;




const Template: ComponentStory<typeof ButtonComponent> = (args) => <ThemeProvider theme={theme}> 
<ButtonComponent {...args} /></ThemeProvider>;

export const Primary = Template.bind({});
Primary.args = {
variant:"contained",
children:"SELL",


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