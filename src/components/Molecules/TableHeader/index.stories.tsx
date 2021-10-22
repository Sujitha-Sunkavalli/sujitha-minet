import {Header} from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default  {
    title: 'Trading/Molecules/TableHeader',
    component: Header,
    argTypes: {
    },
  } as ComponentMeta<typeof Header>;

 const Templates: ComponentStory<typeof Header> = () => <Header   />;
  
  export const TableHeader = Templates.bind({});