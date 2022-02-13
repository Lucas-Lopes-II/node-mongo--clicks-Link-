const Link = require('../models/Link');

const redirect = async (req, res, next) => {
    let title = req.params.title;
    try{
        let doc = await Link.findOne({ title });
        if(doc){
            res.redrect(doc.url);
        }else{
            next();
        }
    }catch(err){
        res.send(err.message);
    }
};

module.exports = { redirect };