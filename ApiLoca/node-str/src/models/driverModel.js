function createDriver(driver){
    entity = Util.clone(driverEntity.base);
    
    create.id = driverEntity.generateId();
    entity.nome = driver.nome;
    entity.cpf = driver.cpf;

    driverEntity.persist(entity);
}

function retrieveAll(){
    return driverEntity.retrive(null);
}

function retrieveDriverId(id){
    return driverEntity.retrive(id);
}

function updateDriver(driver){
    driverEntity.updateDriver(driver);
}

function deleteDriver(id){
    driverEntity.deleteDriver(id);
}