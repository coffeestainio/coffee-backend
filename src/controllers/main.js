/*
* En caso de utilizar algún ORM importar modelos aqui
*/ 

const main = async (req, res) => {
    response = "This is Pablillos backend"; //Default response from the webhook to show it's working
  
    res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
    res.send(JSON.stringify({ "speech": response, "displayText": response 
    //"speech" is the spoken version of the response, "displayText" is the visual version
    }));
}

module.exports = {main}
