window.jQuery = window.$ =  require("jquery");

require.ensure([], function(require){
  require('./index.jsx');
});