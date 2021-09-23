const https = require('https');
const http = require('http');

export function getHttps(link,type){
    return new Promise((resolve, reject) => { 
        https.get(link, (resp) => {
            let data = '';
        
            // A chunk of data has been received.
            resp.on('data', (chunk) => {
              data += chunk;
            });
        
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
              try{
                //console.log(JSON.parse(data).id);
                
                //let getUser = await getUserInfo(JSON.parse(data).id);
                var j = JSON.parse(data);
                var e = { d: j, t:type};
                resolve(e);
              }catch(e){
                console.log("token failed");
                resolve("");
              }
            });
        
          }).on("error", (err) => {
            console.log("Error: " + err.message);
          });
        });
}

export function getHttp(link,type,jBool){
    return new Promise((resolve, reject) => { 
        http.get(link, (resp) => {
            let data = '';
        
            // A chunk of data has been received.
            resp.on('data', (chunk) => {
              data += chunk;
            });
        
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
              try{
                //console.log(JSON.parse(data).id);
                
                //let getUser = await getUserInfo(JSON.parse(data).id);
                if(jBool){
                    var j = JSON.parse(data);
                    var e = { d: j, t:type};
                    resolve(e);
                }else{
                    var e = { d: data, t:type};
                    resolve(e);
                }
                
              }catch(e){
                console.log("token failed");
                resolve("");
              }
            });
        
          }).on("error", (err) => {
            console.log("Error: " + err.message);
          });
        });
}


export async function getMultiHttps(link,v){
  var data = await getHttps(link,v);
  return data;
}


export async function getMultiHttp(link,v,j){
    var data = await getHttp(link,v,j);
    return data;
  }