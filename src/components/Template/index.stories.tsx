import React from "react";
import HomeTemplate from ".";
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { ThemeProvider } from "@material-ui/core/styles";
// import {theme} from "../../themes";



export default  {
    title: 'Trading/Templates',
    component: HomeTemplate,
    argTypes: {
    },
  } as ComponentMeta<typeof HomeTemplate>;


const DummyView = (props:any) => (
  <div style={{ backgroundColor: props.color, height: props.height,width:props.width }}></div>
);

// const HomeTemplateComponent = {
//   title: "HomeTemplateComponent",
//   component: HomeTemplate,
// };

// const Template = (args:any) => (
//   <ThemeProvider theme={theme}>
//     <HomeTemplate {...args} />
//   </ThemeProvider>
// );
const Templates: ComponentStory<typeof HomeTemplate> = (args) => <HomeTemplate {...args} />;
export const emptyHomeTemplate = Templates.bind({});

emptyHomeTemplate.args = {
    sideNav: <DummyView color="#600" height="75vh"  />,
    banner: <DummyView color="#060" height="10vh"  />,
    content: <DummyView color="#006" height="60vh" />,
    // rightPanel: <DummyView color="#606" height="100vh" />,
};



  