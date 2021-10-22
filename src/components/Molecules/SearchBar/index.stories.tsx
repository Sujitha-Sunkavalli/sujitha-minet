import {SearchBar} from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default  {
    title: 'Trading/Molecules/Searchbar',
    component: SearchBar,
    argTypes: {
    },
  } as ComponentMeta<typeof SearchBar>;

 const Templates: ComponentStory<typeof SearchBar> = () => <SearchBar  />;
  
  export const Search = Templates.bind({});