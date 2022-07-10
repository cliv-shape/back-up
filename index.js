const sleep = require('util').promisify(setTimeout);

let cfg = require('./cfg.js');

if(!cfg.timeToNextBackUp || !cfg.pathTo || !cfg.deleteOldBackups || !cfg.CyclesToDeleteOldBackups) return console.error('[config] don\'t exist timeToNextBackUp, pathTo, deleteOldBackups or CyclesToDeleteOldBackups');
if(typeof(cfg.timeToNextBackUp) != 'number') return console.error('[config] type timeToNextBackUp != number');
if(typeof(cfg.pathTo) != 'string') return console.error('[config] type pathTo != string');
if(cfg.pathTo === `D:\\testFolder`) return console.error('default path, please check configs')
if(typeof(cfg.deleteOldBackups) != 'boolean') return console.error('[config] deleteOldBackups != boolean');
if(typeof(cfg.CyclesToDeleteOldBackups) != 'number') return console.error('[config] CyclesToDeleteOldBackups != number');

console.log('[PASS] config checks');

async function start() {

    require('./functions/fs-extra.js')()

    await sleep(5000)

    require('./functions/github-update.js')

    await sleep(5000)

    require('./functions/main.js')()
}

start()