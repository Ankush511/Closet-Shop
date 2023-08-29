const webpackConfig = {
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      })
    ],
  };
