module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
          ie: "11"
      },
        useBuiltIns: "usage",
        corejs: 3,
        useBuiltIns: 'entry',
        modules: false,
        shippedProposals: true
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};


