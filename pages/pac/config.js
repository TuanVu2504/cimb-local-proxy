function FindProxyForURL(url, host) {
    if ( 
      shExpMatch(url, "*whatsapp*")
    ){
        return "PROXY 127.0.0.1:60000";
    } else {
        return "DIRECT";
    }
}
