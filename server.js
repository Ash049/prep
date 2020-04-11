const  express =  require('express');

const app = express();

app.use(express.static(__dirname + '/public/'));

// app.get('/',function(req,res){
// res.send('Hello ');
// });

app.listen(8888, function(){
    console.log('Server is running on port 8888.');
});