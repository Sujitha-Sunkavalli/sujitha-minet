import {Icons} from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  NotificationsNoneOutlinedIcon  from '@mui/icons-material/NotificationsNoneOutlined';


export default  {
    title: 'Trading/Atoms/Icons',
    component: Icons,
    argTypes: {
    },
  } as ComponentMeta<typeof Icons>;

 const Templates: ComponentStory<typeof Icons> = () => <NotificationsNoneOutlinedIcon children={"notification"}  />;
  
  export const Icon = Templates.bind({});