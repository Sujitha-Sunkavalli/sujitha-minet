import SideNav from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from "../../../themes/index";

export default  {
    title: 'Trading/Organisms/SideBar',
    component: SideNav,
    argTypes: {
    },
  } as ComponentMeta<typeof SideNav>;

 const Templates: ComponentStory<typeof SideNav> = () => <ThemeProvider theme={theme}><SideNav   /></ThemeProvider>;
  
  export const SideBar = Templates.bind({});