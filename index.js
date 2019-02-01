const fs = require('fs');
const parse = require('csv-parse/lib/sync');

function linkBuyerToFacility() {
  const bamAccounts = parse(fs.readFileSync('bam-accounts.csv'), { columns: true });
  const existingAccounts = parse(fs.readFileSync('existing-accounts.csv'), { columns: true });
  
  // your solution here
}

linkBuyerToFacility();
