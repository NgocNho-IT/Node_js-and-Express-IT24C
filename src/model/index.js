const fs = require('fs').promises;
const path = require('path');
const dbPath = path.join(__dirname, 'database.json')
async function writeBookToDB(bookData) {
    await fs.writeFile(dbPath, JSON.stringify(bookData, null, 2));
    return true;
}

module.exports = {
    writeBookToDB,
}