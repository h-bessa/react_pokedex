import React, { FunctionComponent, useState, useEffect, Fragment  } from 'react';
import PokemonList from './pages/pokemons-list';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Pokemon from './models/pokemon';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonEdit from './pages/pokemon-edit';
import PageNotFound from './pages/page-not-found';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';


const App: FunctionComponent = () => {
    
 return (
    <Router>
         <div>
             <nav>
                 <div className="nav-wrapoer teal">
                    <Link to="/" className="brand-logo center"> Pokedex </Link>
                 </div>
             </nav>
             <Switch>
                 <PrivateRoute exact path='/' component={PokemonList} />
                 <Route exact path='/login' component={Login} />
                 <PrivateRoute exact path='/pokemons' component={PokemonList} />
                 <PrivateRoute exact path='/pokemons/add' component={PokemonAdd} />
                 <PrivateRoute exact path='/pokemons/edit/:id' component={PokemonEdit} />
                 <PrivateRoute exact path='/pokemons/:id' component={PokemonsDetail} />
                 <Route component={PageNotFound} />
             </Switch>
         </div>
    </Router>
 )
}
  
export default App;


// composants avec class sont plus long à écrire OU Statefull components
// tu peux gérer le state 
// ils sont plus performants

// composants de fonction plus concis et plus lisible OU stateless component
// tu commence avec des composants de fonction puis tu les transforme en gestion de class

// pour répondres à ce problème les Hooks ont été créé par les créateurs de REACT
// Function components + Hooks > Class component
// Hooks permette de bénéficier d'un state et de la gestion des cycle de vie sans créer de class component
// le hook pour le state -> use State