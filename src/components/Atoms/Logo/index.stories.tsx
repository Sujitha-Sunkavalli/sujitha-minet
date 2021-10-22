import LogoComponent from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';



export default  {
    title: 'Trading/Atoms/Logo',
    component: LogoComponent,
    argTypes: {
    },
  } as ComponentMeta<typeof LogoComponent>;

 const Templates: ComponentStory<typeof LogoComponent> = () => <LogoComponent children={"logo"}  />;
  
  export const Logo = Templates.bind({});