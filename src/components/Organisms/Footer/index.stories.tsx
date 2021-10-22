import {Footer} from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default  {
    title: 'Trading/Organisms/Footer',
    component: Footer,
    argTypes: {
    },
  } as ComponentMeta<typeof Footer>;

 const Templates: ComponentStory<typeof Footer> = () => <Footer  />;
  
  export const footer = Templates.bind({});