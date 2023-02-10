import { _decorator, Component, Node, resources, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ResouceUtils')
export class ResouceUtils extends Component {
    public static loadPrefab(path,callback){
        // load Prefab
        resources.load(path, Prefab, (err, prefab) => {
            if(!err)
            callback(prefab);
        });
    }
}


