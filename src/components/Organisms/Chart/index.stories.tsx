import {Chart} from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from "../../../themes/index";

export default  {
    title: 'Trading/Organisms/Chart',
    component: Chart,
    argTypes: {
    },
  } as ComponentMeta<typeof Chart>;

 const Templates: ComponentStory<typeof Chart> = (args:any) => <ThemeProvider theme={theme}><Chart {...args} /></ThemeProvider>;
  
  export const ChartSheet = Templates.bind({});
//   ChartSheet.args={
//     highcharts=Highcharts
//     constructorType="stockChart"
//     options={options}
//   }