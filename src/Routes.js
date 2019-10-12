import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  Tv as TvView,
  Yayan as YayanView,
  Video as VideoView,
  Music as MusicView,
  Search as SearchView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/search"
      />
      <RouteWithLayout
        component={SearchView}
        exact
        layout={MainLayout}
        path="/search"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
   <RouteWithLayout
        component={TvView}
        exact
        layout={MainLayout}
        path="/tv"
      />
    <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
     <RouteWithLayout
        component={YayanView}
        exact
        layout={MainLayout}
        path="/yayan"
      />
    <RouteWithLayout
        component={VideoView}
        exact
        layout={MainLayout}
        path="/video"
      />
    <RouteWithLayout
        component={MusicView}
        exact
        layout={MainLayout}
        path="/music"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
    

      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
