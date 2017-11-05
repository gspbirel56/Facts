var gmExt = {};

(function(ctx0) {var buttonsAvailable = null;
    var DEFAULT_HZ_MS=250;
    
    function HardButtonManager() {
        var ctx = this;
        var valid = false;
        var subscription = {};
        var o = null;
        ctx.isValid = function() {
            return valid
        };
        var isSubscription = function(key) {
            if (Object.keys(subscription).length ===
                0) return true;
            return subscription[key] === true
        };
        var sendButtonClick = function(key) {
            var translated = translateKey(key);
            destroyKey(key);
            if (isSubscription(translated)) {
                if (ctx.action.onKeyUp !== undefined) ctx.action.onKeyUp(translated);
                if (ctx.action.onKeyClick !== undefined) ctx.action.onKeyClick(translated)
            }
        };
        ctx.getWatchButtonsHandle = function() {
            return ctx.gmWatcherID
        };
        ctx.finish = function() {
            if (ctx.gmWatcherID === null) return;
            for (var key in ctx.buttonCache) destroyKey(key);
            valid = false;
            ctx.buttonCache = null;
            gm.info.clearButtons(ctx.gmWatcherID);
            ctx.gmWatcherID = null
        };
        var onTimeout = function(key) {
            var translated = translateKey(key);
            if (isSubscription(translated)) ctx.action.onLongPress(translated)
        };
        var setNextLongPressNotification = function(key) {
            ctx.buttonCache[key] = setInterval(function() {
                onTimeout(key)
            }, ctx.action.interval)
        };
        var destroyKey = function(key) {
            if (!(key in ctx.buttonCache)) return;
            if (ctx.buttonCache[key] !== true) clearInterval(ctx.buttonCache[key]);
            delete ctx.buttonCache[key]
        };
        var translateKey = function(key) {
            if (isSubscription(key)) return key;
            switch (key) {
                case "SWC_NEXT":
                case "SWC_UP":
                case "SB_NEXT":
                    return "BTN_NEXT";
                    break;
                case "SWC_PREV":
                case "SB_PREV":
                case "SWC_DOWN":
                    return "BTN_PREV";
                    break;
                default:
                    return key;
                    break
            }
        };
        var watcherSuccessCallback = function(keyList) {
            var key;
            if (keyList.length == 0) {
                for (key in ctx.buttonCache) sendButtonClick(key);
                return
            }
            for (var i = 0; i < keyList.length; i++)
                if (!(keyList[i] in ctx.buttonCache)) {
                    ctx.buttonCache[keyList[i]] = true;
                    if (ctx.action.onLongPress !== undefined) setNextLongPressNotification(keyList[i]);
                    if (ctx.action.onKeyDown !==
                        undefined) {
                        key = translateKey(keyList[i]);
                        if (isSubscription(key)) ctx.action.onKeyDown(key)
                    }
                }
            for (key in ctx.buttonCache) {
                var found = false;
                for (var i = 0; i < keyList.length; i++)
                    if (keyList[i] === key) {
                        found = true;
                        break
                    }
                if (!found) sendButtonClick(key)
            }
        };
        var watcherFailureCallback = function() {
            console.log("hello world");
            if (ctx.action.onFailure) ctx.action.onFailure(new Error("Init error: Framework failed to watch buttons"));
            valid = false;
            ctx.finish()
        };
        if (arguments.length < 1) return;
        ctx.action = arguments[0];
        if (ctx.action.interval ===
            undefined) ctx.action.interval = DEFAULT_HZ_MS;
        if (arguments.length > 1) o = arguments[1];
        if (o)
            for (var i = 0; i < o.length; i++) subscription[o[i]] = true;
        if (!ctx.action.onKeyDown && (!ctx.action.onKeyUp && (!ctx.action.onKeyClick && !ctx.action.onLongPress))) return;
        ctx.buttonCache = [];
        ctx.gmWatcherID = gm.info.watchButtons(watcherSuccessCallback, watcherFailureCallback);
        valid = true
    }
    ctx0.newHardButtonManager = function(i, o) {
        var obj = new HardButtonManager(i, o);
        if (obj.isValid()) return obj;
        return null
    }
})(gmExt);