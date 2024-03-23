const path=require('path')

module.exports={
    mode:'development',
    entry:'./js/login.js',
    output:{
        path:path.resolve(__dirname),
        filename:'bundle.js'
    },
    watch:true
}