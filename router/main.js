module.exports = (app) => {
  app.get('/', (req,res) => {
    res.render('index.html');
  });
  app.get('/typography', (req,res) => {
    res.render('index.html?page=typography');
  });
}