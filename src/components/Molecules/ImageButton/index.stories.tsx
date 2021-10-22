import {ImageButton} from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ExpandMore } from '@mui/icons-material';

export default  {
    title: 'Trading/Molecules/ImageButton',
    component: ImageButton,
    argTypes: {
    },
  } as ComponentMeta<typeof ImageButton>;




const Template: ComponentStory<typeof ImageButton> = (args) => <ImageButton {...args} />;

export const Account = Template.bind({});
Account.args = {
variant:"contained",
color:"inherit",
endIcon:<ExpandMore/>,
// startIcon:<img src={"https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png"} alt=""/>
};

