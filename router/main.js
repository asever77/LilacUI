module.exports = (app) => {
  app.get('/', (req,res) => {
    res.render('index.html');
  });
  app.get('/:id', (req,res) => {
    res.render('index.html');
  });

 

}