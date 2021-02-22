function createUtilization(utilization){
    // tratamento de excessão
    if(utilization.dtInicial == null)
        return ("Data Inicial não informado");
    else if(utilization.idDriver == null)    
        return ("motorista não informado");
    else if(utilization.idCar == null)    
        return ("carro não informado");
    else if(utilization.idMotivo == null)    
        return ("motivo não informado");
    else{
        utilizationModel.createUtilization(utilization);
        return ("utilização criada: 200_OK");
    }    
}

function retrieveUtilization(id){
    if(id == null)
        return utilizationModel.retrieveAll();
    else{
        return utilizationModel.retrieveUtilizationId(id);
    }    
}

function updateUtilization(driver){
    if(driver == null){
        return ("motorista não informado");
    }else{
        utilizationModel.updateUtilization(driver);
    }
}

function deleteUtilization(id){
    if(id){
        return ("id não informado");
    }else{
        utilizationModel.deleteUtilization(id);
    }
}

