let message = {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}
// let newmessage = {...message};
// newmessage.glossary = "MOHD AQIB KHAN";
// console.log(newmessage);
// console.log(message);
// function fun(mess){
//     let obj3 = new Object();
//     let obj4 = new Object();
//     for(let x in mess){
//         if(typeof mess[x]=="object"){
//             obj4 = {...obj3,...fun(x)};
//         }       
//         else{
//             obj3[x] = mess[x];
//         }
//     }
//     return {...obj3,...obj4}; 
// }
// let obj2 = fun(message);
// console.log(obj2);
obj2 = Object.assign({...message});
obj2.glossary.GlossDiv = "dgdfg";
console.log(obj2);
console.log(message); 