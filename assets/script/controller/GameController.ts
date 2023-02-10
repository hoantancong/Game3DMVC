import { _decorator, Component, Node, resources, Prefab, instantiate } from 'cc';
import { ResouceUtils } from '../../utils/ResouceUtils';
import { GameModel } from '../model/GameModel';
import { WinUI } from '../ui/WinUI';
import { LevelController } from './LevelController';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property(GameModel)
    private gameModel:GameModel;
    //
    private currentLevel:number = 1;
    start() {
        //load level hien tai ra
        //set callback
        this.nextLevel();
    }
    private nextLevel(){
        //
        this.gameModel.lbGameLevel.string = 'Level '+ this.currentLevel;
        ResouceUtils.loadPrefab('level/lv'+this.currentLevel,(lvPrefab)=>{
            //
            let newLevel = instantiate(lvPrefab);
            newLevel.getComponent(LevelController).setUp(()=>{
                //win level event
                this.winLevel();
            })
            this.gameModel.gamePlayNode.addChild(newLevel);
        })
    }
    private winLevel(){
        //
        let winUI = instantiate(this.gameModel.winUIPrefab);
        winUI.getComponent(WinUI).setUp(()=>{
            //onNext Level
            this.currentLevel++;
            this.nextLevel();
        })
        this.gameModel.canvasUI.addChild(winUI);
    }
    update(deltaTime: number) {
        
    }
}


