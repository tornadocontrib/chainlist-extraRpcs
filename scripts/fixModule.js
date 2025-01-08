import fs from 'fs/promises';

async function fixModule() {
    const jsonPath = 'node_modules/chainlist/package.json';
    
    await fs.writeFile(
        jsonPath,
        JSON.stringify(
            {
                ...JSON.parse(await fs.readFile(jsonPath, { encoding: 'utf8' })),
                type: 'module',
            },
            null,
            2
        )
    );
}

fixModule();