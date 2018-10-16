const mongoose = require('mongoose');
mongoose.connect('mongodb://brother:brobro1@ds133113.mlab.com:33113/hired');

const Schema = mongoose.Schema;

const JobSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  section: String,
  jobTitle: String,
  company: String,
  location: String,
  url: String,
  status: String,
  created: {
    type: Date,
    default: Date.now
  },
  deadline: String,
});

const Job = mongoose.model('Job', JobSchema);

const postNewJob = (fields, callback) => {
  const job = new Job({
    section: fields.section,
    jobTitle: fields.jobTitle,
    company: fields.company,
    location: fields.location,
    url: fields.url,
    status: fields.status,
    deadline: fields.deadline,
    _id: mongoose.Types.ObjectId(),
  });
  job.save(callback);
}

const getAllJobs = (callback) => {
  Job.find({section: 'todos'}, (err, todos) => {
    if (err) console.log('ERR 1' + err);
    Job.find({section: 'inProgs'}, (err2, inProgs) => {
      if (err2) console.log('ERR 2' + err2);
      Job.find({section: 'completeds'}, (err3, completeds) => {
        if (err3) console.log('ERR 3' + err3);
        callback(null, {todos, inProgs, completeds});
      });
    });
  });
}

const deleteJob = (id, callback) => {
  Job.findByIdAndDelete(id, callback);
}

const updateJob = (id, update, callback) => {
  Job.findByIdAndUpdate(id, update, callback);
}

module.exports = {
  postNewJob: postNewJob,
  getAllJobs: getAllJobs,
  deleteJob: deleteJob,
  updateJob: updateJob,
}