/**
 * Created by Christian on 6/12/2016.
 */


var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : "pub-c-5427fd08-835a-4ef4-8c40-62c35fb80287",
    subscribe_key : "sub-c-1a61c352-30f1-11e6-9327-02ee2ddab7fe"
});

module.exports = pubnub;