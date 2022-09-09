import { prototypes, utils, constants } from 'game';

function getMyCreeps() {
    return utils.getObjectsByPrototype(prototypes.Creep).find(i => i.my);
}

function spawnCreep(bodyArr) {
    mySpawn.spawnCreep(bodyArr).object;
}

function harvestOrMove(creep, source) {
    if(creep.harvest(source) == constants.ERR_NOT_IN_RANGE) {
        creep.moveTo(source);
    }
}

function transferOrMove(creep, spawn) {
    if(creep.transfer(spawn, constants.RESOURCE_ENERGY) == constants.ERR_NOT_IN_RANGE) {
        creep.moveTo(spawn);
    }
}

export function loop() {
    var creep = getMyCreeps();
    var source = utils.getObjectsByPrototype(prototypes.Source)[0];
    var spawn = utils.getObjectsByPrototype(prototypes.StructureSpawn).find(i => i.my);

    if(creep.store.getFreeCapacity(constants.RESOURCE_ENERGY)) {
        harvestOrMove(creep, source);
    } else {
        transferOrMove(creep, spawn);
    }
}
