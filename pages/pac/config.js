function FindProxyForURL(url, host) {
    var domainList = [
        "*whatsapp*", "*torproject*",
        "*outlook*",
        "*adnxs*",
        "*microsoft365*",
        "*gmail*",
        "*live*",
        "*officeapps*",
        "*youtube*", "*drools*",
        "*oracle*",
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
        "*yamldiff*",
        "*scada.dkgas*"
    ];
    for (var i = 0; i < domainList.length; i++) {
        if ( shExpMatch(url, domainList[i])){
            return "PROXY 127.0.0.1:60000";
        }
    }
    
    return "DIRECT";
}
