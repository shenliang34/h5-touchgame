class UtilTools {
    constructor() {
        
    }

    /**
     * 删除数组中的单个元素
     * @param sourceArray 数组
     * @param target 目标元素
     */
    public static Remove<T>(sourceArray:T[],target:T):boolean{
        var index = sourceArray.indexOf(target)
        var has = index>-1
        if (has) {
            sourceArray.splice(index,1);
        }
        return has
    }
}