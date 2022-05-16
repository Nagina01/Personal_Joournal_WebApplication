const express = require('express');
const router = express.Router();

/**
 * defines the path of the page as well as some of the content that is displayed on the page
 */
router.get('/',  (req, res) => {
    res.render('index', {
        title: 'Venues',
        content: 'Find the perfect venue',
        username: res.locals.username


    });
});

const data = require('../data/data.json');
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const start = (page - 1) * limit;
    const end = parseInt(start) + limit;
    const sortBy = req.query.sortBy || 'id';
    const sortOrder = req.query.sortOrder || 'asc';
    const total = data.length;
    const sortedData = data.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
            return a[sortBy] < b[sortBy] ? 1 : -1;
        }
    });
    const userData = sortedData.slice(start, end);
    const pages = Math.floor(total / limit);

    res.render('Venues', {
        title: 'Venues',
        content: 'Welcome to the venues page',
        username: res.locals.username,
        users: userData,
        page: page,
        pages: pages,
        nextPage: page < pages ? page + 1 : null,
        prevPage: page > 1 ? page - 1 : null,
        sortBy: sortBy,
        sortOrder: sortOrder,
        limit: limit,
        startNum: start + 1,
        endNum: end,
        total: total
    });
});




// define the path for update, view, edit, delete venues information.


router.post('update/:id', (req, res) => {
    res.redirect('/users');
});



router.post('create/:id',(req,res) =>{
res.redirect('venues');
});


router.post('update/:id', (req,res)=>{
    res.redirect('venues');

});

router.post('delete/id', (req, res)=>{
    res.redirect('venues');
});




module.exports = router;