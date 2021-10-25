import {Header} from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from "../../../themes/index";

export default  {
    title: 'Trading/Molecules/TableHeader',
    component: Header,
    argTypes: {
    },
  } as ComponentMeta<typeof Header>;

 const Templates: ComponentStory<typeof Header> = () => <ThemeProvider theme={theme}><Header   /></ThemeProvider>;
  
  export const TableHeader = Templates.bind({});