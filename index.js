const fs = require('fs');
const parse = require('csv-parse/lib/sync');

function linkBuyerToFacility() {
  const samAccounts = parse(fs.readFileSync('sam-accounts.csv'), { columns: true });
  const existingAccounts = parse(fs.readFileSync('existing-accounts.csv'), { columns: true });
  
  // your solution here
}

linkBuyerToFacility();
