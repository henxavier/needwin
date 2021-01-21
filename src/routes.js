import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Tierlist from './Pages/Tierlist'
import Main from './Pages/Main'
import Escopetas from './Pages/Warzone/Escopetas'
import Assalt from './Pages/Warzone/Fuzis_de_Assalto'
import Precisao from './Pages/Warzone/Fuzid_de_Precisao'
import MTS from './Pages/Warzone/MTS'
import Atirador from './Pages/Warzone/Fuzid_de_Atirador'
import SMTS from './Pages/Warzone/SMTS'

function Routes() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/main" exact component={Main} />
                <Route path="/escopetas" component={Escopetas} />
                <Route path="/assalt" component={Assalt} />
                <Route path="/precisao" component={Precisao} />
                <Route path="/mts" component={MTS} />
                <Route path="/smts" component={SMTS} />
                <Route path="/atirador" component={Atirador} />
                <Route path="/Tierlist" component={Tierlist} />
            </Switch>
        </BrowserRouter>
    )
    
}

export default Routes;