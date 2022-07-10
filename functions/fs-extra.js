try {
    require('fs-extra')
} catch { 
    console.log('installing fs-extra..')
    require('child_process').exec('npm i fs-extra', (e, s) => {
        if(e) console.log(e);
        console.log(s)
    })
}