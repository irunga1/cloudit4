'use strict'
//var  gcds = require('@google-cloud/datastore');


const {
    Storage
} = require('@google-cloud/storage');

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.



function operate(req, res) {
    var params = req.body;
    console.log(params);
    if ((params.Nombre !== "") && (params.Apellido !== "") && (params.Telefono !== "") && (params.Edad !== "")) {
        var btoa = require('btoa');
        const {
            Datastore
        } = require('@google-cloud/datastore');
        async function quickStart(data1) {
            // Your Google Cloud Platform project ID
            const projectId = 'cloudit4data';
            // Creates a client
            const datastore = new Datastore({
                projectId: projectId,
            });
            // The kind for the new entity
            const kind = 'Task2';
            // The name/ID for the new entity
            var a = new Date();
            var b = btoa(a);
            const name = b;
            // The Cloud Datastore key for the new entity
            const taskKey = datastore.key([kind, name]);
            const task = {
                key: taskKey,
                data: data1
            };

            // Saves the entity
            await datastore.save(task);
            console.log(`Saved ${task.key.name}: ${task.data.description}`);
        }
        quickStart(params).catch(console.error);
        //res.status(200).send({message:"entro a post"});
        var path = require('path');
        var utileria = require("../libs/utileria");
        var utObject = new utileria;
        var ndirname = utObject.removeLastString(__dirname);
        //console.log(ndirname);
        res.sendFile(path.join(ndirname + 'views/redirect.html'));

    } else {
        //res.status(200).send({message:"no entro a post"});
        var path = require('path');
        var utileria = require("../libs/utileria");
        var utObject = new utileria;
        var ndirname = utObject.removeLastString(__dirname);
        //console.log(ndirname);
        res.sendFile(path.join(ndirname + 'views/error.html'));
    }

}
module.exports = {
    operate
};