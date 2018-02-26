
/*
 curl http://localhost:3000 -X POST -H "Content-Type: application/json" -d '{"key1":"value1", "key2":"value2"}' -v

*/

var http = require('http');
var url = require('url');
  
var records = {
 
};

http.createServer(function (req, res) {
    // let chunk = [];
    let body = '';

    if (req.method === 'POST') {
        req.on('data', ( data ) => {
            body += data;
            
        });
        req.on('end', ( data ) => {
            console.log(body);
            var rec = JSON.parse(body);
	    var id = rec.id;
	    records[id] = rec;
//            records.push(rec);
            console.log(records);
            res.end()
        });
    }
    else if (req.method === 'GET' )
    {
	     var query = url.parse(req.url,true).query;
	    console.log(query);
	    var record = records[query.id];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(records));
        res.end();
    }

}).listen(3000);

