function solucao(peso1, peso2) {
    // seu codigo aqui

    if(peso1<55 && peso2<55){
        return "PODEM LUTAR"
    }

    if((peso1>=55 && peso1<65 ) && (peso2>=55 && peso2<65)){
        return "PODEM LUTAR"
    }

    if((peso1>=65 && peso1<75 ) && (peso2>=65 && peso2<75)){
        return "PODEM LUTAR"
    }

    
    if((peso1>=75 && peso1<85 ) && (peso2>=75 && peso2<85)){
        return "PODEM LUTAR"
    }

    if((peso1>=75 && peso1>=85 ) && (peso2>=75 && peso2>=85)){
        return "PODEM LUTAR"
    }

    else{
        return "NAO PODEM LUTAR"
    }

}

console.log(solucao(75,55))