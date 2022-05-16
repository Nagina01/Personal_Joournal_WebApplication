const express = require('express');
const router = express.Router();

const data = require('../data/data.json');
router.get('/', (req,res)=>{

});
router.get('/view/:id', (req, res) => {
    const user = data.find(user => bookingHistory.id === parseInt(req.params.id));
    res.render('', {
        title: 'BookingHistory: ' + user.first_name, user_Id, user_date,
        user: user,
        nextUser: user.id + 1 <= data.length ? user.id + 1 : null,
        back: req.headers['referer']
    });
});

router.get('view/id', (req, res)=>{
    const BookingHistory = data.find(bookingHistory=>BookingHistory.id === parseInt(req.params.id));
    res.render('',{
        title:'BookingHistory'+ user.revenue, 
        


        
    });

    router.post('update/:id', (req, res) => {
        res.redirect('/users');
    });


    router.post('edit/:id', (req,res)=>{
        res.redirect('/BookingHistory');
    });

    router.post('cancel/id', (req, res)=>
    {
        res.redirect('/BookingHistory');
    });

})



