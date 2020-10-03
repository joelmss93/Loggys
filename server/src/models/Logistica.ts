const mongoose  =  require ('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const LogisticaSchema = new mongoose.Schema({

    remetente:{
        type: String,
        required: true,
    },

    destino:{
        type: String,
        required: true,
    },

    localOrigem:{
        type: String,
        required: true,
    },

    localDestino:{
        type: String,
        required: true,
    },

    localAtual:{
        type: String,
        required: true,
    },

    dataEnvio:{
        type: String,
        required: true,
    },

    dataAtual:{
        type: String,
        required: true,
    },

});

LogisticaSchema.plugin(mongoosePaginate);
mongoose.model('Logistica', LogisticaSchema);
