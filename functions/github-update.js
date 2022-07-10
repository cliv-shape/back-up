console.log('updating..')

require("child_process").exec("git pull", (error, stdout) => {
    if (error) {
        console.log(`❌`);
        return console.log(error);
    }

    console.log(`✅`);
    return console.log(stdout);
});