function FindProxyForURL(url, host) {
    var domainList = [
        "*whatsapp*", "*torproject*",
        "*outlook*", "*wikipedia*",
        "*adnxs*",
        "*microsoft365*",
        "*gmail*",
        "*live*", "*coccoc*",
        "*officeapps*",
        "*youtube*", "*drools*",
        "*oracle*", "*google*",
        "*googlevideo*",
        "*telegram*","*amazonaws*",
        "*facebook.com*",
        "*fbcdn.net*",
        "*reddit*", "*gitlab*",
        "*dev.to*", "*jsdelivr*", "*postfix*",
        "*api7*", "*jenkins*", "*servanamanaged*",
        "*enterprisedb*", "*stackoverflow*",
        "*onecompiler*", "*groovyide*",
        "*cloudflare*", "*google-apis*", "*google-analytics*",
        "*yamldiff*", "*wallpapersafari*",
        "*scada.dkgas*"
    ];
    for (var i = 0; i < domainList.length; i++) {
        if ( shExpMatch(url, domainList[i])){
            return "PROXY 127.0.0.1:60000";
        }
    }
    
    return "DIRECT";
}
