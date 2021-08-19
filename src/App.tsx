import React from 'react'
import { MainPage } from '@pages'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

const App: React.FC = () => (
  <div className="min-h-screen text-2xl text-black bg-ivory duration-500 dark:bg-eerie dark:text-white">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App
