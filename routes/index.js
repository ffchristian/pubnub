var express = require('express');
var router = express.Router();
var pubnub = require('./../pub-nub-module');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/send-message', function(req, res, next) {

  /* ---------------------------------------------------------------------------
   Publish Messages
   --------------------------------------------------------------------------- */
  pubnub.publish({
    channel   : 'test-channel',
    message   : req.body,
    callback  : function(e) {
      console.log( "SUCCESS!", e );
      res.status(200).json({success:true, data: e});
    },
    error     : function(e) {
      console.log( "FAILED! RETRY PUBLISH!", e );
      res.status(400).json({success:true, data: e});
    }
  });


});






module.exports = router;
