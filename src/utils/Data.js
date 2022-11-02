import palogo from './images/payAfrik_logo.png';
import { FaSignal } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaBahai } from "react-icons/fa";
import dstv from './images/cable-icon.png';
import power from './images/energy.png';
import airtimeData from './images/telcos.png';
import smartControl from './images/remote-control.png';
import support from './images/help.png';
import rwandaElectricity from './images/reg.png';



export const logo = palogo;
export const alt = "PayAfrik Logo";

export const utilities = [
    {
    "id":1,
    "icon":power,
    "icon2":<FaBolt/>,
    "name":"Buy Electricity",
    "link":"dashboard/buyelectricity"
      },
    {
      "id":2,
      "icon":airtimeData,
      "icon2":<FaSignal/>,
      "name":"Airtime & Data",
      "link":"dashboard/buyairtimedata"
      },
      {
        "id":3,
        "icon":rwandaElectricity,
        "icon2":<FaBolt/>,
        "name":"Rwanda Electricity",
        "link":"dashboard/rwandaelectricity"
        },
    {
      "id":4,
      "icon":dstv,
      "icon2":<FaTv/>,
      "name":"Cable TV Subscription",
      "link":"dashboard/cablesubcription"
      },
    {
      "id":5,
      "icon":support,
      "icon2":<FaCommentAlt/>,
      "name":"Help & Support",
      "link":"dashboard/support"
      },

      {
        "id":6,
        "icon":smartControl,
        "icon2":<FaBahai/>,
        "name":"Smart Conntrol",
        "link":"dashboard/smartcontrol"
        },
        // {
        //     "id":7,
        //     "icon":FaBahai,
        //     "icon2":<FaBahai/>,
        //     "name":"Transaction History",
        //     "link":"dashboard/transactions"
        //     },
        // {
        //     "id":8,
        //     "icon":FaBahai,
        //     "icon2":<FaBahai/>,
        //     "name":"Wallet",
        //     "link":"dashboard/wallet"
        //     },
        // {
        //     "id":9,
        //     "icon":FaBahai,
        //     "icon2":<FaBahai/>,
        //     "name":"Account",
        //     "link":"dashboard/account"
        //     },
  ]