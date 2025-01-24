import * as fs from 'fs';

import { addresses } from './address';

function cleanAddress(address: string): string {
  // Combine geocodes into a single regex pattern
  const geocodePattern = new RegExp(`\\s*(공|구|답|대|도|유|임|잡|장|전|제|종|주|차|창|천|철|학)$`);

  // Match geocodes and remove them
  if (geocodePattern.test(address)) {
    address = address.replace(geocodePattern, '').trim();
  }

  // Remove trailing numeric suffix for road addresses
  const numericPattern = /\s\d+(?:-\d+)?$/;
  if (numericPattern.test(address)) {
    address = address.replace(numericPattern, '').trim();
  }

  return address;
}

// Clean addresses
const cleanedAddresses = addresses.map(cleanAddress);

// Save to JSON
function saveToJSONFile(data: any, fileName: string): void {
  fs.writeFileSync(fileName, JSON.stringify(data, null, 2), 'utf-8');
}

// Save cleaned addresses to a file
const outputFileName = './cleanedAddresses.json';
saveToJSONFile(cleanedAddresses, outputFileName);

console.log(`Cleaned addresses saved to ${outputFileName}`);
