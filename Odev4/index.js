const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Ashley", "salary": 2000}', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('JSON FILE SUCCESSFULLY CREATED AND DATA WRITTEN.');
});

fs.readFile('employees.json', 'utf8', (err, data) => {
    if(err) console.log(err);
    console.log(data);
    console.log('FILE READ');
});

fs.writeFile('employees.json', '{"name": "Ashley", "salary": 3000}', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('JSON FILE SUCCESSFULLY CREATED AND DATA WRITTEN.');
});

fs.unlink('employees.json', (err) => {
    if(err) console.log(err);
    console.log('FILE DELETED.');
});
