var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    body: {
        type: String
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    }
});

console.log(NoteSchema)
var Note = mongoose.model("Note", NoteSchema);
console.log("Notes Connected!")

module.exports = Note;