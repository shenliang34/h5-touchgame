//开始游戏界面
class StartGameUI {
    //构造函数
    constructor() {
        fairygui.UIPackage.addPackage("res/StartUI");
        this.view = fairygui.UIPackage.createObject("StartUI", "StartUI").asCom;
        this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this.view);
        this.starBtn = this.view.getChild("n8").asButton;
        this.starBtn.onClick(this, this.onStartButtonClick);
    }
    //点击开始游戏
    onStartButtonClick() {
        this.starBtn.offClick(this, this.onStartButtonClick);
        fairygui.GRoot.inst.removeChild(this.view);
    }
}
//# sourceMappingURL=StartGameUI.js.map