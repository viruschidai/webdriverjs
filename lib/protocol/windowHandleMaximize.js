module.exports = function windowHandleMaximize (window_handle, callback) {

    var requestOptions = {
        path:"/session/:sessionId/window/" +  (window_handle || 'current') + "/maximize",
        method:"POST"
    };

    this.requestHandler.create(requestOptions,{},callback);

};
