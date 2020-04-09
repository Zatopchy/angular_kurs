let mongoose = require('mongoose');

const practicSchema = mongoose.Schema({
    name: {type: String, required: true},
    ruk: {type: String, required: true, default: "Неизвестный руководитель"},
    student: {type: String, required: true},
    group: {type: String, required: true},
    spec: {type: String, required: true},
    dateStart: {type: Date, required: true, default: Date.now},
    dateFinish: {type: Date, required: true},
    mark: {type: Number, required: true}
});

mongoose.model('practic', practicSchema);