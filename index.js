require('./functions/fs-extra.js')

require('./functions/github-update.js')

let cfg = require('./cfg.js');

try {
if(!cfg.timeToNextBackUp || !cfg.pathTo || !cfg.deleteOldBackups || !cfg.CyclesToDeleteOldBackups) return console.error('[config] don\'t exist timeToNextBackUp, pathTo, deleteOldBackups or CyclesToDeleteOldBackups');
if(typeof(cfg.timeToNextBackUp) != 'number') return console.error('[config] type timeToNextBackUp != number');
if(typeof(cfg.pathTo) != 'string') return console.error('[config] type pathTo != string');
if(cfg.pathTo === `D:\\testFolder`) return new Error('default path, please check configs')
if(typeof(cfg.deleteOldBackups) != 'boolean') return console.error('[config] deleteOldBackups != boolean');
if(typeof(cfg.CyclesToDeleteOldBackups) != 'number') return console.error('[config] CyclesToDeleteOldBackups != number');
} catch(e) {
    console.log(e)

    process.exit(1)
}
console.log('[PASS] config checks');

require('./functions/main.js')()