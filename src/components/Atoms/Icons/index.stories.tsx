import {Icons} from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  NotificationsNoneOutlinedIcon  from '@mui/icons-material/NotificationsNoneOutlined';
import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from "../../../themes/index";


export default  {
    title: 'Trading/Atoms/Icons',
    component: Icons,
    argTypes: {
    },
  } as ComponentMeta<typeof Icons>;

 const Templates: ComponentStory<typeof Icons> = () => <ThemeProvider theme={theme}><NotificationsNoneOutlinedIcon children={"notification"}  /></ThemeProvider>;
  
  export const Icon = Templates.bind({});