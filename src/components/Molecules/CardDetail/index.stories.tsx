import CardDetail from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from "../../../themes/index";
type TradeType = {
    price: string;
    name: string;
    url: string;
    change: string;
    market: string;
    id: number;
  };

export default  {
    title: 'Trading/Molecules/CardDetail',
    component: CardDetail,
    argTypes: {
    },
  } as ComponentMeta<typeof CardDetail>;

 const Templates: ComponentStory<typeof CardDetail> = (args:TradeType) =>  <ThemeProvider theme={theme}><CardDetail  {...args} /></ThemeProvider>;
  
  export const CardTab = Templates.bind({});
  CardTab.args={
    id: 1,
    name: "Bitcoin",
    price: "$3,28,555.373",
    change: "+1.06%",
    market: "$60.1T",
    url: "https://assets.gadgets360cdn.com/img/crypto/bitcoin-og-logo.png",
  }