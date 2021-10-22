import SideNav from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default  {
    title: 'Trading/Organisms/SideBar',
    component: SideNav,
    argTypes: {
    },
  } as ComponentMeta<typeof SideNav>;

 const Templates: ComponentStory<typeof SideNav> = () => <SideNav   />;
  
  export const SideBar = Templates.bind({});