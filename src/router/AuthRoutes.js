import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from "../screen/Signup";
import HomeScreen from "../screen/HomeScreen";
import OtpScreen from "../screen/OtpScreen";
import Registrationdone from "../screen/Registrationdone";
import StartScreen from "../screen/StartScreen";
import DataScreen from "../screen/DataScreen";
import ContinueScreen from "../screen/ContinueScreen";
import RetailingScreen from "../screen/RetailingScreen";
import OutScreen from "../screen/OutScreen";
import NonProductiveScreen from "../screen/NonProductiveScreen";
import NonProductiveRetailScreen from "../screen/NonProductiveRetailScreen";
import RetailerOrderScreen from "../screen/RetailerOrderScreen";

import DetailsScreen from "../screen/DetailsScreen";
import ConfirmationScreen from "../screen/ConfirmationScreen";
import OrderCnfScreen from "../screen/OrderCnfScreen";
import MapScreen from "../screen/MapScreen";
import NoSalesReasonScreen from "../screen/NoSalesReasonScreen";
import SalesReasonScreen from "../screen/SalesReasonScreen";
import DetailScreen from "../screen/DetailScreen";
import NewOutletScreen from "../screen/NewOutletScreen";
import NewOutletScreen1 from "../screen/NewOutletScreen1";
import NewOutletScreen2 from "../screen/NewOutletScreen2";
import NewOutletScreen3 from "../screen/NewOutletScreen3";
import NewOutletScreen4 from "../screen/NewOutletScreen4";
import OutletImgScreen from "../screen/OutletImgScreen";
import DsrMantraScreen from "../screen/DsrMantraScreen";
import ChangeBeatScreen from "../screen/ChangeBeatScreen";
import TodayPerformanceScreen from "../screen/TodayPerformanceScreen";
import TimeLineSceen from "../screen/TimeLineSceen";
import PocketMIS from "../screen/PocketMIS";
import PocketMis1 from "../screen/PocketMis1";
import DayWiseScreen from "../screen/DayWiseScreen";
import ProductWiseScreen from "../screen/ProductWiseScreen";
import OrderScreen from "../screen/OrderScreen";
import PendingRequestScreen from "../screen/PendingRequestScreen";
import SupportScreen from "../screen/SupportScreen";

const Stack = createStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="Registrationdone" component={Registrationdone} />
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="ContinueScreen" component={ContinueScreen} />
      
      <Stack.Screen name="RetailingScreen" component={RetailingScreen} />
      <Stack.Screen name="OutScreen" component={OutScreen} />
      <Stack.Screen name="NonProductiveScreen" component={NonProductiveScreen} />
      <Stack.Screen name="NonProductiveRetailScreen" component={NonProductiveRetailScreen} />
      <Stack.Screen name="RetailerOrderScreen" component={RetailerOrderScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
      <Stack.Screen name="OrderCnfScreen" component={OrderCnfScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="NoSalesReasonScreen" component={NoSalesReasonScreen} />
      <Stack.Screen name="SalesReasonScreen" component={SalesReasonScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="NewOutletScreen" component={NewOutletScreen} />
      <Stack.Screen name="NewOutletScreen1" component={NewOutletScreen1} />
      <Stack.Screen name="NewOutletScreen2" component={NewOutletScreen2} />
      <Stack.Screen name="NewOutletScreen3" component={NewOutletScreen3} />
      <Stack.Screen name="NewOutletScreen4" component={NewOutletScreen4} />
      <Stack.Screen name="OutletImgScreen" component={OutletImgScreen} />
      <Stack.Screen name="DsrMantraScreen" component={DsrMantraScreen} />
      <Stack.Screen name="ChangeBeatScreen" component={ChangeBeatScreen} />
      <Stack.Screen name="TodayPerformanceScreen" component={TodayPerformanceScreen} />
      <Stack.Screen name="TimeLineSceen" component={TimeLineSceen} />
      <Stack.Screen name="PocketMIS" component={PocketMIS} />
      <Stack.Screen name="PocketMis1" component={PocketMis1} />
      <Stack.Screen name="DayWiseScreen" component={DayWiseScreen} />
      <Stack.Screen name="ProductWiseScreen" component={ProductWiseScreen} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="PendingRequestScreen" component={PendingRequestScreen} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
    </Stack.Navigator>
  );
}
export default AuthRoutes;
