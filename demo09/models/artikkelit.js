const fetch = require("node-fetch");
const xml2js = require("xml2js");

let haeaArtikkelit = (url) => {

    return new Promise((resolve, reject) => {

        fetch(url).then((response) => {
    
            response.text().then((dataXML) => {
    
                xml2js.parseString(dataXML, (err, dataJSON) => {
                    
                    if (err) {

                        reject("Palvelimelta saatu data ei ole XML-muodossa");

                    } else {

                        console.log(dataJSON.rss.channel[0]);

                        let kaikkiArtikkelit = [];

                        dataJSON.rss.channel[0].item.forEach((item) => {

                            let artikkeliObj = {
                                                "otsikko" : item.title[0],
                                                "julkaistu" : new Date(item.pubDate[0]).toLocaleString(),
                                                "ingressi" : item["content:encoded"][0]
                                               }

                            kaikkiArtikkelit.push(artikkeliObj);

                        });


                        resolve(kaikkiArtikkelit);
                    }
                   

                });          
    
            });   
    
        }).catch((err) => {
    
            reject("Palvelimeen ei saada yhteyttä");
    
        });


    });

}

module.exports = {

    "haeKaikki" : (callback) => {

        let url = "https://read.xamk.fi/feed/";

        haeArtikkelit(url).then((artikkelit) => {

            callback(null, artikkelit);

        }).catch((err) => {

            callback(err, null);            

        });

    }

}