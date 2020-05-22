const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/bugCollection"
);

const bugSeed = [
  {
    title: "Nothing works",
    author: "Dru",
    description:
      "Lorizzle ipsizzle i'm in the shizzle sizzle dawg, consectetuer adipiscing bizzle. Nullizzle pizzle velizzle, check it out gizzle, suscipit quizzle, gravida vizzle, arcu. Ghetto ghetto tortizzle. Sizzle erizzle. Funky fresh izzle dolizzle gangster turpizzle tempus sizzle. Maurizzle pellentesque nibh izzle da bomb. Break it down i saw beyonces tizzles and my pizzle went crizzle nizzle. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle pizzle rhoncus dang. That's the shizzle hizzle shut the shizzle up dictumst. Go to hizzle dapibizzle. Bling bling tellus urna, pretizzle bow wow wow, mattis izzle, ghetto vitae, . Fo shizzle suscipit. Integizzle shizzlin dizzle sheezy sizzle check out this.",
    date: new Date(Date.now()),
    assigned: "unassigned",
    inProgress: false,
    needHelp: false,
    completed: false
  },
  {
    title: "I am hungry",
    author: "Nick",
    description:
      "Lorizzle ipsizzle i'm in the shizzle sizzle dawg, consectetuer adipiscing bizzle. Nullizzle pizzle velizzle, check it out gizzle, suscipit quizzle, gravida vizzle, arcu. Ghetto ghetto tortizzle. Sizzle erizzle. Funky fresh izzle dolizzle gangster turpizzle tempus sizzle. Maurizzle pellentesque nibh izzle da bomb. Break it down i saw beyonces tizzles and my pizzle went crizzle nizzle. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle pizzle rhoncus dang. That's the shizzle hizzle shut the shizzle up dictumst. Go to hizzle dapibizzle. Bling bling tellus urna, pretizzle bow wow wow, mattis izzle, ghetto vitae, . Fo shizzle suscipit. Integizzle shizzlin dizzle sheezy sizzle check out this.",
    date: new Date(Date.now()),
    assigned: "Kayla",
    inProgress: true,
    needHelp: false,
    completed: false
  },
  {
    title: "Nick sux",
    author: "Anthony",
    description:
      "Lorizzle ipsizzle i'm in the shizzle sizzle dawg, consectetuer adipiscing bizzle. Nullizzle pizzle velizzle, check it out gizzle, suscipit quizzle, gravida vizzle, arcu. Ghetto ghetto tortizzle. Sizzle erizzle. Funky fresh izzle dolizzle gangster turpizzle tempus sizzle. Maurizzle pellentesque nibh izzle da bomb. Break it down i saw beyonces tizzles and my pizzle went crizzle nizzle. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle pizzle rhoncus dang. That's the shizzle hizzle shut the shizzle up dictumst. Go to hizzle dapibizzle. Bling bling tellus urna, pretizzle bow wow wow, mattis izzle, ghetto vitae, . Fo shizzle suscipit. Integizzle shizzlin dizzle sheezy sizzle check out this.",
    date: new Date(Date.now()),
    assigned: "Nick",
    inProgress: true,
    needHelp: true,
    completed: false
  },
  {
    title: "I made it work to well",
    author: "Kayla",
    description:
      "Lorizzle ipsizzle i'm in the shizzle sizzle dawg, consectetuer adipiscing bizzle. Nullizzle pizzle velizzle, check it out gizzle, suscipit quizzle, gravida vizzle, arcu. Ghetto ghetto tortizzle. Sizzle erizzle. Funky fresh izzle dolizzle gangster turpizzle tempus sizzle. Maurizzle pellentesque nibh izzle da bomb. Break it down i saw beyonces tizzles and my pizzle went crizzle nizzle. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle pizzle rhoncus dang. That's the shizzle hizzle shut the shizzle up dictumst. Go to hizzle dapibizzle. Bling bling tellus urna, pretizzle bow wow wow, mattis izzle, ghetto vitae, . Fo shizzle suscipit. Integizzle shizzlin dizzle sheezy sizzle check out this.",
    date: new Date(Date.now()),
    assigned: "Anthony",
    inProgress: false,
    needHelp: false,
    completed: true
  },
  {
    title: "I'm allergic to bees",
    author: "Dru",
    description:
      "Lorizzle ipsizzle i'm in the shizzle sizzle dawg, consectetuer adipiscing bizzle. Nullizzle pizzle velizzle, check it out gizzle, suscipit quizzle, gravida vizzle, arcu. Ghetto ghetto tortizzle. Sizzle erizzle. Funky fresh izzle dolizzle gangster turpizzle tempus sizzle. Maurizzle pellentesque nibh izzle da bomb. Break it down i saw beyonces tizzles and my pizzle went crizzle nizzle. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle pizzle rhoncus dang. That's the shizzle hizzle shut the shizzle up dictumst. Go to hizzle dapibizzle. Bling bling tellus urna, pretizzle bow wow wow, mattis izzle, ghetto vitae, . Fo shizzle suscipit. Integizzle shizzlin dizzle sheezy sizzle check out this.",
    date: new Date(Date.now()),
    assigned: "unassigned",
    inProgress: false,
    needHelp: false,
    completed: false
  }
];

db.Bug
  .remove({})
  .then(() => db.Bug.collection.insertMany(bugSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
