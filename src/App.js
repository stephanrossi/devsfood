import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { useSelector } from 'react-redux';
import ReactToolTip from 'react-tooltip';
import { Container, Menu, PageBody } from './components/MainComponents'

import PrivateRoute from './components/PrivateRoute';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

export default function Routes() {
    // const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title='Loja' icon="/assets/store.png" link="/" />
                    <MenuItem title='Pedidos' icon="/assets/order.png" link="/orders" />
                    <MenuItem title='Meu perfil' icon="/assets/profile.png" link="/profile" />
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoute path="/orders">
                            <div>Tela de pedidos</div>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                            <div>Tela de perfil</div>
                        </PrivateRoute>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                <Cart />
                <ReactToolTip id='tip-top' place='top' effect='solid' />
                <ReactToolTip id='tip-right' place='right' effect='solid' />
            </Container>
        </BrowserRouter>
    );
}