//开始游戏界面
class StartUI extends BaseWindow {
    //构造函数
    constructor() {
        super();
        this.view = fairygui.UIPackage.createObject("StartUI", "StartUI").asCom;
        this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        this.starBtn = this.view.getChild("startGameBtn").asButton;
    }
    //点击开始游戏
    onStartButtonClick() {
        MenuManager.GetInstance().OpenWindow(WindowType.GameUI);
    }
    Show(windowParams) {
        super.Show(windowParams);
        this.starBtn.onClick(this, this.onStartButtonClick);
    }
    Hide() {
        super.Hide();
        this.starBtn.offClick(this, this.onStartButtonClick);
    }
}
//# sourceMappingURL=StartUI.js.map