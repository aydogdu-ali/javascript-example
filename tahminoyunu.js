// tahmin oyunu

// hak ==5
// rastgele sayi tut 
// kullanıcıdan tahnim iste 
// hak = hak-1
// eğer (tahmin == sayıya esitse)
//     yazdır çıkış yap.
// değilse tahmini arrttır ya da azalt
// hakkı büyükse o dan  tahmin iste
// hakkı bitti ise üzgünüz kaybettiniz.


let playstart = confirm("Do you want to play estimation game: ")

if(playstart==true){
    let playContinue = true;

    do{
        let qualitiy = 5;
        let estimation;
        let number = Math.round(Math.random()*100);
        console.log(number);
    
        do {
            estimation = Number(prompt("please enter between 0 and 100 estimation: "));
            qualitiy -=1;
            if(estimation===number){
                console.log(`Perfect  you guessed ${5-qualitiy} time`);
                   let play= confirm("Do you play again game"); 
                   if(play!=true){
    
                    playContinue = false;
                    break;
                } else{
                     number = Math.round(Math.random()*100);
                     qualitiy=5;
                     console.log(number);
                }      
                
            
            }else if(estimation<number){
                console.log("go to up")
            } else{
                console.log("go to down")
            }
        } while(qualitiy>0);
    
        if(estimation!==number){ 
        console.log("sorry your lost")
    
        let playContinueResult = confirm("Do you play again game"); 
    
        if(playContinueResult!=true){
    
            playContinue = false;
        }     
        
    
    
    
        }
        }while(playContinue === true);
       
} else {
    console.log("Thank You Answer")
}

