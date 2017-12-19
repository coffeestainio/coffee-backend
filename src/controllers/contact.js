const Contact = require('../models/contact'); 
const sgMail = require('@sendgrid/mail');



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
                sendEmail(contact)
                res.status(200).send({ Result: 'Success' })
            }
        });
    }
        
        catch(err){
            res.status(500).send(err);
        }
    }
}

const sendEmail = (contact)=>{

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log(process.env.SENDGRID_API_KEY);
    const msg = {
        to: contact.email,
        from: {
            name: 'Pablo at CoffeStain',
            email: 'pcalvo@coffeestain.io',
          },
        subject: 'Thanks for submitting your info',
        html: '<strong>Hi</strong></br><p>I just got your contact information. I will try to contact you personally as soon as possible.</p>',
      };
      sgMail.send(msg);
}

module.exports = {
    addContact
}