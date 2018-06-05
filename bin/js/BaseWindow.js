class BaseWindow {
    constructor() {
    }
    Show(windowParams) {
        if (this.view) {
            fairygui.GRoot.inst.addChild(this.view);
        }
    }
    Hide() {
        if (this.view) {
            fairygui.GRoot.inst.removeChild(this.view);
        }
    }
    Destory() {
    }
    IsCloseOther() {
    }
}
//# sourceMappingURL=BaseWindow.js.map