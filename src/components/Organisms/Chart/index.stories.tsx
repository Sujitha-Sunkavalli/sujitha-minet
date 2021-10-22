import {Chart} from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default  {
    title: 'Trading/Organisms/Chart',
    component: Chart,
    argTypes: {
    },
  } as ComponentMeta<typeof Chart>;

 const Templates: ComponentStory<typeof Chart> = () => <Chart  />;
  
  export const ChartSheet = Templates.bind({});