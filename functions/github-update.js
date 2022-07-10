console.log('updating..')

require("child_process").exec("git pull", (error, stdout) => {
    if (error) {
        return console.log(error);
    }
    return console.log(stdout);
});