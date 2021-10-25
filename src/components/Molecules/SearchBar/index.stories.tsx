import {SearchBar} from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from "../../../themes/index";

export default  {
    title: 'Trading/Molecules/Searchbar',
    component: SearchBar,
    argTypes: {
    },
  } as ComponentMeta<typeof SearchBar>;

 const Templates: ComponentStory<typeof SearchBar> = () => <ThemeProvider theme={theme}><SearchBar  /></ThemeProvider>;
  
  export const Search = Templates.bind({});