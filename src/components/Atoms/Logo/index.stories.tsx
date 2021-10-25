import LogoComponent from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from "../../../themes/index";


export default  {
    title: 'Trading/Atoms/Logo',
    component: LogoComponent,
    argTypes: {
    },
  } as ComponentMeta<typeof LogoComponent>;

 const Templates: ComponentStory<typeof LogoComponent> = () => <ThemeProvider theme={theme}><LogoComponent children={"logo"}  /></ThemeProvider>;
  
  export const Logo = Templates.bind({});