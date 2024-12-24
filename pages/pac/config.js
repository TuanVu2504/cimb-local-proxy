function FindProxyForURL(url, host) {
    var domainList = [
        "*whatsapp*",
        "*outlook*"
    ];
    for (var i = 0; i < domainList.length; i++) {
        if ( shExpMatch(url, domainList[i])){
            return "PROXY 127.0.0.1:60000";
        }
    }
    
    return "DIRECT";
}
