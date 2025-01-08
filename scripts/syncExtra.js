import fs from 'fs/promises';
import allExtraRpcs from 'chainlist/constants/extraRpcs.js';

async function syncExtra() {
    await fs.writeFile('./extraRpcs.json', JSON.stringify(allExtraRpcs, null, 2));

    console.log('Wrote extraRpcs.json');
}

syncExtra();