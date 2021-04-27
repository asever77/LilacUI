module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        target: {
            chrome: '78',
        	ie: '11'	
        },
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


