var pdf = require("html-pdf");
var ejs = require("ejs");
var categoria = "Javascript"

var nomeDoUsuario = "João Pedro Mata";
var curso = "node.js";

ejs.renderFile("./index.ejs",{nome: nomeDoUsuario, curso: curso, categoria: categoria},(err,html) => {

    if(err){
        console.log("error");
    }else{
        pdf.create(html,{}).toFile("./pdftest.pdf",(err,res)=>{
            if(err){
                console.log("error");
            }else{
                console.log(res);
            }
        })

    }
});



