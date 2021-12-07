import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./component/home/home"
import Listing from "./component/listing/listing";
import Details from "./component/details/restDetails";
import PlaceOrder from './component/booking/placeOrder';
import ViewBooking from './component/booking/viewOrderApi';
import Login from './component/login/login';
import Register from './component/login/register';

const Routing = () => {
    return(
        <BrowserRouter forceRefresh={true}>
            <Header/>
                <Route exact path="/" component={Home}/> 
                <Route path="/list/:mealid" component={Listing}/>
                <Route path="/details/:restid" component={Details}/> 
                <Route path="/placeOrder/:restName" component={PlaceOrder}/> 
                <Route path="/viewBooking" component={ViewBooking}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>

            <Footer month="Oct" year="2021"/>
        </BrowserRouter>
    )
}

export default Routing;