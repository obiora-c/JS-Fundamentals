

const args = process.argv.slice(2);

function checkArguments(...A){

    if(A.length === 0){
        console.log("No argument");

    } else if (A.length === 1){
        console.log("Argument found");
    }else {
        console.log("Arguments found");
    }

}

checkArguments();
checkArguments("Hello");
checkArguments("Tunde" , "Fola");