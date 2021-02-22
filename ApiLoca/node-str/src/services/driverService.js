function createDriver(driver){
    // tratamento de excessão
    if(driver.nome == null)
        return ("nome não informado");
    else if(driver.cpf == null)    
        return ("cpf não informado");
    else{
        driverModel.createDriver(driver);
        return ("motorista criado: 200_OK");
    }    
}

function retrieveDriver(id){
    if(id == null)
        return driverModel.retrieveAll();
    else{
        return driverModel.retrieveDriverId(id);
    }    
}

function updateDriver(driver){
    if(driver == null){
        return ("motorista não informado");
    }else{
        driverModel.updateDriver(driver);
    }
}

function deleteDriver(id){
    if(id){
        return ("id não informado");
    }else{
        driverModel.deleteDriver(id);
    }
}

