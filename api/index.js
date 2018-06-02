const photos = require('./mock-data.json');
module.exports = app => {

    app.get('/photos', (req, res) => {

        let { page, sortField, sortOrder, rows } = req.query;
        page = parseInt(page);
        rows = parseInt(rows);
        sortOrder = parseInt(sortOrder);
    
        console.log(`page: ${page}`, `rows ${rows}`, `sortField ${sortField}`, `sortOrder: ${sortOrder}`);
       
        let query = photos.slice(0);

        query.sort((a, b) => {
            if(a[sortField] > b[sortField]) return 1;
            if(a[sortField] < b[sortField]) return -1;
            return 0;
        });
        
        if(sortOrder) {
            console.log('chamará reverse');
            query.reverse();
        }

        const from = (page - 1) * rows;
        const data = query.slice(from, from + rows);
        console.log(data);
        res.json(data);
    });
    
};