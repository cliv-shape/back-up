const fs = require('fs-extra');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function main() {
    console.log('starting..');
    for(; ;) {
        let number_folder = Number(fs.readFileSync('./number_back.txt', 'utf-8'));

        if(fs.pathExistsSync(`./backups/${number_folder}`)) {
            fs.removeSync(`./backups/${number_folder}`);

            console.log('deleted old backup..');

            sleep(100);
        };

        try{
        fs.mkdir(`./backups/${number_folder}`);

        fs.writeFile('./number_back.txt', `${number_folder + 1}`.toString());
        } catch(e) {
            console.log(e);
        };

		console.log('Folder created');

        fs.copy(cfg.pathTo, `./backups/${number_folder}`);

        console.log(`backup done, time: ${new Date()}`);

		if(number_folder >= cfg.CyclesToDeleteOldBackups) {
            fs.remove(`./backups/${number_folder - cfg.CyclesToDeleteOldBackups}`);
            
            console.log(`Removed DIR ${number_folder - cfg.CyclesToDeleteOldBackups}`);
        }
        await sleep(cfg.timeToNextBackUp);
    };
    console.log('wait. what. cycle ended?')
    process.exit(1)
};