const elasticlunr = require('elasticlunr')
require('languages/lunr.stemmer.support.js')(elasticlunr)
require('languages/lunr.it.js')(elasticlunr)
const questions = require('./questions')

const index = elasticlunr(function () {
  this.use(elasticlunr.it)

  this.setRef('id');
  this.addField('title');
  this.addField('body');
})

questions.forEach(q => {
  index.addDoc(q)
});

console.log(index.search("mutuale"))