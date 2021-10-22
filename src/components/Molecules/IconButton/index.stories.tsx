import {IconButtonComponent} from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ExpandMore } from '@mui/icons-material';


export default  {
    title: 'Trading/Molecules/IconButton',
    component: IconButtonComponent,
    argTypes: {
    },
  } as ComponentMeta<typeof IconButtonComponent>;




const Template: ComponentStory<typeof IconButtonComponent> = (args) => <IconButtonComponent {...args} />;

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