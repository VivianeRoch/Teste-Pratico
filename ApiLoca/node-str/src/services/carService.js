function createCar(car){
    // tratamento de excessão
    if(car.placa == null)
        return ("placa não informada");
    else if(car.cor == null)    
        return ("cor não informada");
    else if(car.marca == null)    
        return ("marca não informada");
    else{
        carModel.createCar(car);
        return ("caro criado: 200_OK");
    }    
}

function retrieveCar(id){
    if(id == null)
        return carModel.retrieveAll();
    else{
        return carModel.retrieveCarId(id);
    }    
}

function updateCar(car){
    if(car == null){
        return ("caro não informado");
    }else{
        carModel.updateCar(car);
    }
}

function deleteCar(id){
    if(id){
        return ("id não informado");
    }else{
        carModel.deleteCar(id);
    }
}

