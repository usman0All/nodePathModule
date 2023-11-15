// //path module
const path=require("path");
// console.log(path.basename("E:\nodePracticle\Pathmodule\index.html"));
// console.log(path.dirname("E:\nodePracticle\Pathmodule\index.html"));
// //extname()- return file extension
// console.log(path.extname("E:\nodePracticle\Pathmodule\index.html"));
// console.log(path.extname("E:\nodePracticle\Pathmodule\index.css"));
// console.log(path.extname("E:\nodePracticle\Pathmodule\index"));
// //join()- join path segment
// console.log(path.join('/search','opps','inheritance','single'));
// console.log(path.join('/search','opps','inheritance','single','python','java','..'));//ek level up tak hi path  create karega and last wala chor dega
// console.log(path.join('/search','opps','inheritance','single','python','java','..','..'));

//normalize()
// console.log(path.normalize('c\\temp\\cat\\\\\\bin\\global'));
// console.log(path.normalize('c\\temp\\cat\\\\\\bin\\global\\..'));
// console.log(path.normalize('c\\temp\\cat\\//bin\\//global\\..'));

//parse()- return a object which has element of path
console.log(path.parse(__filename));
console.log(path.parse(__filename).name)
console.log(path.parse(__filename).root)