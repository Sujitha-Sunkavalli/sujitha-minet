import TradeTab from './index'
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
    title: 'Trading/Molecules/Tradetab',
    component: TradeTab,
    argTypes: {
    },
  } as ComponentMeta<typeof TradeTab>;

 const Templates: ComponentStory<typeof TradeTab> = (args:TradeType) =><ThemeProvider theme={theme}><TradeTab  {...args} /></ThemeProvider> ;
  
  export const Tradetabs = Templates.bind({});
  Tradetabs.args={
    id: 1,
    name: "Bitcoin",
    price: "$3,28,555.373",
    change: "+1.06%",
    market: "$60.1T",
    url: "https://assets.gadgets360cdn.com/img/crypto/bitcoin-og-logo.png",
  }