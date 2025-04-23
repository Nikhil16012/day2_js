// const prompt=require("prompt-sync")()
(function(){
    console.log("welcome to secret game")
    const CreateSceret=()=>{
        const secretNumber=6
        return ()=>secretNumber
    }
     const getSecret = CreateSceret();
    try{
    console.log(guess)
   let guess=[10,2,6]
    }
    catch(err){
      console.log("caught an err",err.message)
    }
    const guess=[10,2,6]
    const getfeedback=(guess,secret)=>{
        if(guess<secret) return "too low";
        else if(guess>secret) return "too high";
        else return 'Correct'
    }
 for( let i=0;i<3;i++){
//    const attempt=i+1
//    const userguess= parseInt(prompt(`Attempt ${attempt} :Guess Secret number(1-10):`))
const userguess=guess[i]
    console.log(`user enters ${userguess}`)
    const result= getfeedback(userguess,getSecret())
    console.log(result)
    if(result=="Correct"){
        break;
    }
 }
})();