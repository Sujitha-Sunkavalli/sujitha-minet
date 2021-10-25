import {Footer} from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from "../../../themes/index";

export default  {
    title: 'Trading/Organisms/Footer',
    component: Footer,
    argTypes: {
    },
  } as ComponentMeta<typeof Footer>;

 const Templates: ComponentStory<typeof Footer> = () => <ThemeProvider theme={theme}><Footer  /></ThemeProvider>;
  
  export const footer = Templates.bind({});