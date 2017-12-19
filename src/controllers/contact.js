const Contact = require('../models/contact'); 

/**
* Save a new quote
* @param {*} req
* @param {*} res
*/
const addContact = (req, res, next) => {
  
    if (!req.body.email || !req.body.phone){
        res.status(500).send({errmsg: "Missing required fields"});
    }
    else{
  
        try{
        //create quote
        var contact = new Contact();      
        contact.email = req.body.email;  
        contact.phone = req.body.phone;
        console.log(contact);

        // save the quote and check for errors
        contact.save((err) => {
            if (err) {
                return res.status(500).send(err)
            } else {
                res.status(200).send({ Result: 'Success' })
            }
        });
    }
        
        catch(err){
            res.status(500).send(err);
        }
    }
}

module.exports = {
    addContact
}