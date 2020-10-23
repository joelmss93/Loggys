const mongoose  =  require ('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const timeZone = require('mongoose-timezone');

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

}, { timestamps: { createdAt: 'dataEnvio', updatedAt: 'dataAtual' } });

// LogisticaSchema.plugin(timeZone);
// LogisticaSchema.plugin(mongoosePaginate);
mongoose.model('Logistica', LogisticaSchema);
