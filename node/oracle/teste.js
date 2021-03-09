oracledb.getConnection(getConnectAttr, function(err,connection){
    if(err){
      res.set('content-type','application/json');
      res.status(500).send(JSON.stringify({
        status:500,
        message:"Error connection to DB",
        detailed_message:err.message
      }));
      return;
    }
      connection.execute("select * from REGISTRATION_MASTER", {}, {outFormat : oracledb.OBJECT
      },function(err, result){
        if(err){
          res.set('content-type','application/json');
      res.status(500).send(JSON.stringify({
        status:500,
        message:"Error connection the REGISTRATION",
        detailed_message:err.message
      }));
        }
        else{
          res.contentType('application/json').status(200);
          res.send(result.rows);
        }

        //Release the connection
        connection.release(
          function(err){
            if(err){
              console.error(err.message);
            }
            else{
              console.log("GET/comments : connection released")
            }
          });
      });

  });