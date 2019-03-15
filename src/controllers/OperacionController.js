'use strict'
//var  gcds = require('@google-cloud/datastore');

const {Storage} = require('@google-cloud/storage');

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.



function operate(req, res){
    var params = req.body;
    //console.log("entro a post");
    console.log(params);
    if(params.Nombre !==""){
        res.status(200).send({message:"entro a post"});
       
        const {Datastore} = require('@google-cloud/datastore');
        async function quickStart() {
            // Your Google Cloud Platform project ID
            const projectId = 'cloudit4data';
            // Creates a client
            const datastore = new Datastore({
            projectId: projectId,
        });
        // The kind for the new entity
        const kind = 'Task2';
        // The name/ID for the new entity
        const name = 'sampletask1';
        // The Cloud Datastore key for the new entity
        const taskKey = datastore.key([kind, name]);
        // Prepares the new entity
        const task = {
            key: taskKey,
            data: {
                Apellido: 'Irungaray',
                Edad:36,
                Nombre: 'Juan',
                Telefono:'42142727'
            },
        };

        // Saves the entity
        await datastore.save(task);
        console.log(`Saved ${task.key.name}: ${task.data.description}`);
        }
        quickStart().catch(console.error);


    }
    else{
        res.status(200).send({message:"no entro a post"});
    }
    

}
module.exports = {
    operate
};