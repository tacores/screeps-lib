import { getObjectsByPrototype } from 'game/utils';
import { Creep, Flag, StructureSpawn } from 'game/prototypes';
import { MOVE, ATTACK } from 'game/constants';

var creep1, creep2;

export function loop() {
    var mySpawn = getObjectsByPrototype(StructureSpawn)[0];
    var flags = getObjectsByPrototype(Flag);
    var target1 = flags[0];
    var target2 = flags[1];

    // １tickに１個しか spawn できない？
    // （１tick内で連続してspawnすると、エラーにはならないが２個目が動作しない）
    if (!creep1) {
        creep1 = mySpawn.spawnCreep([MOVE]).object;
        console.log("spawn creep1 " + creep1)
    } else if (!creep2) {
        creep2 = mySpawn.spawnCreep([MOVE]).object;
        console.log("spawn creep2 " + creep2)
    }
    if (creep1) {
        creep1.moveTo(target1);
    }
    if (creep2) {
        creep2.moveTo(target2);
    }
}
