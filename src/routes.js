import Feira from 'pages/Feira'
import Login from 'pages/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { UsuarioProvider } from 'common/context/Usuario'
import { useState } from 'react'
import Carrinho from 'pages/Carrinho'
import { CarrinhoProvider } from 'common/context/Carrinho'
import { PagamentoProvider } from 'common/context/Pagamento'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <UsuarioProvider>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <CarrinhoProvider>
                        <PagamentoProvider>
                            <Route exact path="/feira">
                                <Feira />
                            </Route>
                            <Route path='/carrinho'>
                                <Carrinho />
                            </Route>
                        </PagamentoProvider>
                    </CarrinhoProvider>
                </UsuarioProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default Router