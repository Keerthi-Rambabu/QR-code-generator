import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
    .prompt([
        {
            message:"Type in your URL",
            name:"URL",
        }
    ])
    .then((answers) =>{
        const url = answers.URL;
        var qr_sbg = qr.image(url);
        qr_sbg.pipe(fs.createWriteStream("img.png"));

        fs.writeFile("URL.txt",url,(err) =>{
            if(err) throw err;
            console.log("The file has saved!");
        });
    })
    .catch((error) => {
        if(error.isTtyError){

        }
        else{

        }
    })

