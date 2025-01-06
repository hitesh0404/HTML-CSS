pro = new Promise((resolve,reject)=>{
    if (3>1){
        setTimeout(()=>{
            if(2>1){
                resolve( new Promise((resolve,reject)=>{
                    if (3>1){
                        setTimeout(()=>{
                            if(2>1){
                                resolve('Hello we did it')
                                return 100;
                            }
                            else
                            reject('no we can\'t')}
                       ,2000)  
                    }    
                    return 100;
                        })
                )
                // return 100;
            }
            else
            reject('no we can\'t')}
       ,2000)  
       return 100;
            }    
        })

async function myfun(){
   return pro
   
}
console.log(
 myfun()
.then(console.log)
.then(console.log))





