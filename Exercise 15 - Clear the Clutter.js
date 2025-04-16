import fs from "fs/promises"
import path from "path"
import nfs from "fs"

const basepath = "D:\\BSCS\\SUMMER\\2\\SIGMA WEB DEVELOPMENT\\EXERCISE\\Exercise 15 - Clear the Clutter"

let files = await fs.readdir(basepath)

for(const item of files ){
    console.log("running for ",item)
    let ext = item.split(".")[item.split(".").length- 1]
    console.log(ext)
    if(ext !="js" && ext != "json" && item.split(".").length > 1){

        if(nfs.existsSync(path.join(basepath,ext))){
            fs.rename(path.join(basepath,item), path.join(basepath,ext,item))
        }

        else{

            await fs.mkdir(ext)
            await fs.rename(path.join(basepath,item), path.join(basepath,ext,item))
        }


    }
}

