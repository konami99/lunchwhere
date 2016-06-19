module.exports = {
  entry: [
   'script!jquery/dist/jquery.min.js',
   'script!foundation-sites/dist/foundation.min.js',
   './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Vote: 'app/components/Vote.jsx',
      Chart: 'app/components/Chart.jsx',
      Create: 'app/components/Create.jsx',
      Login: 'app/components/Login.jsx',
      UsersMock: 'app/components/UsersMock.jsx',
      PlacesMock: 'app/components/PlacesMock.jsx',
      Util: 'app/components/Util.jsx',
      LogoutButton: 'app/components/LogoutButton.jsx',
      VoteButton: 'app/components/VoteButton.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
