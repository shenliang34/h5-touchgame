class GameUI extends BaseWindow {
    //构造函数
    constructor() {
        super();
        this.view = fairygui.UIPackage.createObject("StartUI", "GameUI").asCom;
        this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this.view);
        this.skipBtn = this.view.getChild("skipBtn").asButton;
        this.updownBtn = this.view.getChild("updownBtn").asButton;
        this.goBtn = this.view.getChild("goBtn").asButton;
    }
    Show(...windowParams) {
        super.Show(windowParams);
        this.goBtn.onClick(this, this.onGoButtonClick);
        this.skipBtn.onClick(this, this.onSkipButtonClick);
        this.updownBtn.onClick(this, this.onUpDownButtonClick);
    }
    Hide() {
        super.Hide();
        this.goBtn.offClick(this, this.onGoButtonClick);
        this.skipBtn.offClick(this, this.onSkipButtonClick);
        this.updownBtn.offClick(this, this.onUpDownButtonClick);
    }
    /**
     * 点击行走按钮
     */
    onGoButtonClick() {
        MenuManager.GetInstance().OpenWindow(WindowType.StartGameUI);
    }
    /**
     * 点击跳过按钮
     */
    onSkipButtonClick() {
    }
    /**
     * 点击上下按钮
     */
    onUpDownButtonClick() {
    }
}
//# sourceMappingURL=GameUI.js.map