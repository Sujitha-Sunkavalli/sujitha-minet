import {IconButtonComponent} from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ExpandMore } from '@mui/icons-material';
import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from "../../../themes/index";

export default  {
    title: 'Trading/Molecules/IconButton',
    component: IconButtonComponent,
    argTypes: {
    },
  } as ComponentMeta<typeof IconButtonComponent>;




const Template: ComponentStory<typeof IconButtonComponent> = (args) => <ThemeProvider theme={theme} ><IconButtonComponent {...args} /></ThemeProvider>;

export const Primary = Template.bind({});
Primary.args = {
variant:"contained",
children:"ds",
color:"inherit",
endIcon:<ExpandMore/>
};

export const Buy = Template.bind({});
Buy.args = {
variant:"outlined",
children:"24h",
color:"primary",
endIcon:<ExpandMore/>
};