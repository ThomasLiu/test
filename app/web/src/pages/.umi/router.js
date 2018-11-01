import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import('../../layouts/index.js'), loading: require('/Users/thomas/Documents/projects/u_login_web/app/web/src/components/PageLoading/index').default }),
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": dynamic({ loader: () => import('../index.js'), loading: require('/Users/thomas/Documents/projects/u_login_web/app/web/src/components/PageLoading/index').default })
      },
      {
        "component": () => React.createElement(require('/Users/thomas/Documents/projects/u_login_web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/thomas/Documents/projects/u_login_web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
