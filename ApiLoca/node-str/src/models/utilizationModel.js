function createUtilization(utilization){
    entity = Util.clone(utilizationEntity.base);
    
    create.id = utilizationEntity.generateId();
    entity.dtInicio = utilization.dtInicio;
    entity.dtFinal = utilization.dtFinal;
    entity.idDriver = utilization.idDriver;
    entity.idCar = utilization.idCar;
    entity.motivo = utilization.motivo;

    utilizationEntity.persist(entity);
}

function retrieveAll(){
    return utilizationEntity.retrive(null);
}

function retrieveUtilizationId(id){
    return utilizationEntity.retrive(id);
}

function updateUtilization(utilization){
    utilizationEntity.updateUtilization(utilization);
}

function deleteUtilization(id){
    utilizationEntity.deleteUtilization(id);
}