module.exports = {
    pathTo: `D:\\testFolder`, // Path to backup:
    //  \ = \\
    // Windows: D:\\testFolder
    // Linux: /path_to/folder/
    timeToNextBackUp: 1000, // 86400000 - day, * time in ms *
    deleteOldBackups: true, 
    CyclesToDeleteOldBackups: 5, // if deleteOldBackups === false don't work
    doAutoUpdates: true,
}