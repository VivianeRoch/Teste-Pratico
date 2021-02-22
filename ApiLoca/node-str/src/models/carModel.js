function createCarro(car){
    entity = Util.clone(carEntity.base);
    
    create.id = carEntity.generateId();
    entity.placa = car.placa;
    entity.cor = car.cor;
    entity.marca = car.marca;

    carEntity.persist(entity);
}

function retrieveAll(){
    return carEntity.retrive(null);
}

function retrieveCarId(id){
    return carEntity.retrive(id);
}

function updateCar(car){
    carEntity.updateCar(car);
}

function deleteCar(id){
    carEntity.deleteCar(id);
}