const handlebars = require('handlebars');

function plus(item, level) {  
  if(!level) level = 1;
  var str = "";
  for (let i = 0; i < level; i++) str += "+";
  str += handlebars.templates.item({ item: item });
  item.sub.forEach((o) => {
    str = str + this.buildObject(o, level+1);
  });
  return new handlebars.SafeString(str);
}