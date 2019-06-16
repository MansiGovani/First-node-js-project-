var http = require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'});
    response.end("bhojani bov vaydi che... jiju nu name keti nathi...bov vache toi em jjj kye eliiiiii aaje to fail jj thais.. pan mark aave tyare highest mark ma ramti hoi ... ee em kye me kai vachyu nathi ee sambhdine ame pan na vachie ane ame rai jai pachad ne ben vai jai aagad");


}).listen(8081);
console.log('server running at http://127.0.0.1:8081/');
