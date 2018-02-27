/*
 curl http://localhost:3000 -X POST -H "Content-Type: application/json" -d '{"key1":"value1", "key2":"value2"}' -v

*/

var http = require('http');
var url = require('url');
 var id=0; 
 var ris={id:null,esisto:""};
 var garanzie=[
     {nome:"Furto",codice:1111,prezzo:100},
     {nome:"Incendio",codice:2222,prezzo:100},
     {nome:"Mini Kasko",codice:3333,prezzo:300},
     {nome:"Cristalli",codice:4444,prezzo:200}
    ];
var records = {
 
};

http.createServer(function (req, res) {
    // let chunk = [];
    let body = '';
    console.log(req.url);
    if (req.method === 'POST') {
        req.on('data', ( data ) =>
        {
            body += data;
            
        });
        switch(req.url)
        {
            case "/salva":
            req.on('end', ( data ) => 
            {
                console.log(body);
                var rec = JSON.parse(body);
    
                records[id] = rec;
                //records.push(rec);
                console.log(records);
                ris.id=id;
                ris.esisto="il salvataggio e andato a buon fine";
                id++;
                res.end(JSON.stringify(ris));
            });
            break;

            case"/calcolaPreventivo":
            req.on('end', ( data ) => 
            {
                var polizza = JSON.parse(body);
                polizza.prezzo = polizza.veicolo.cilindrata / 10;
                var data = new Date();
                if (polizza.persona.anniPatente <= 3)
                    polizza.prezzo += 200;
                else if (polizza.persona.anniPatente >= 10)
                    polizza.prezzo += 50;
                else if (polizza.persona.anniPatente > 3 && polizza.persona.anniPatente < 10)
                    polizza.prezzo += 100;
                if (data.getFullYear() - polizza.veicolo.annoImm <= 5)
                    polizza.prezzo += 200;
                else if (data.getFullYear() - polizza.veicolo.annoImm > 5 && data.getFullYear() - polizza.veicolo.annoImm <= 10)
                    polizza.prezzo += 150;
                else if (data.getFullYear() - polizza.veicolo.annoImm > 10)
                    polizza.prezzo += 100;
                for(let i=0; i<polizza.garanzie.length; i++)
                {
                    polizza.prezzo+=polizza.garanzie[i].prezzo;
                }  
                console.log(polizza.prezzo);                  
                polizza.iva=(polizza.prezzo*22)/100;
                res.end(JSON.stringify({prezzo:polizza.prezzo,iva:polizza.iva}));
            });
                break;
            default:
        }

    }
    else if (req.method === 'GET' )
    {
	     var query = url.parse(req.url,false).query;
	   // console.log("prova"+req.url.split("?")[0]);
    //var record = records[query.id];
        if(req.url.split("?")[0]==="/garanzie")
        {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(garanzie));
            res.end();
        }
    }

}).listen(3000);

