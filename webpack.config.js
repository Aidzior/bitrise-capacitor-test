const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "mfe1": "http://localhost:3000/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    ...['@angular/core', '@angular/common', '@angular/router', '@angular/common/http']
  },

/*  name: 'app1',
  library: { type: 'var', name: 'app1' },
  filename: 'remoteEntry.js',
  exposes: {
    './AuthService': './src/app/auth.service.ts',
  },*/
});

