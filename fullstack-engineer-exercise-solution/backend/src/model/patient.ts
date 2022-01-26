import mongoose from "mongoose";

/*  very confusing, better below schema
export interface ITest extends mongoose.Document {
  patientName: string;
}

export const TestSchema = new mongoose.Schema({
  patientName: String,
});

const Test = mongoose.model<ITest>("Test", TestSchema);
export default Test;
*/

const patientSchema = new mongoose.Schema({
  patient_name: { type: String, required: 'Please provide a name' },
  date: { type: String, required: true  },
  patient_age: { type: Number },
  test_result: { type: Boolean },
  test_location: {
    lat: { type: Number },
    lng: { type: Number }
  }
});

module.exports = mongoose.model('patientSchema', patientSchema);