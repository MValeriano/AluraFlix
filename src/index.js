import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './components/pages/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import CadastroVideo from './components/pages/cadastro/Video';
import CadastroCategoria from './components/pages/cadastro/Categoria';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact/>
        <Route path="/cadastro/video" component={ CadastroVideo } />
        <Route path="/cadastro/categoria" component={CadastroCategoria}/>
        <Route component={()=><h1>404 - Page not Found</h1>}/>
      </Switch>
    </BrowserRouter>,
  
  document.getElementById('root')
);

