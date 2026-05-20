const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('../pizzastar repost.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('../pdf_content.txt', data.text);
    console.log('PDF extracted successfully to pdf_content.txt');
}).catch(err => {
    console.error('Error extracting PDF:', err);
});
