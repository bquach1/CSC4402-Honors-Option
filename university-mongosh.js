mongosh
show dbs
use university
db

db.createCollection("department", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["dept_name", "building", "budget"],
      properties: {
        dept_name: {
          bsonType: "string",
          maxLength: 20,
          description: "must be a string and is required"
        },
        building: {
          bsonType: "string",
          maxLength: 10,
          description: "must be a string and is required"
        },
        budget: {
          bsonType: "int",
          maximum: 9999999,
          minimum: 0,
          description: "must be a numeric value and is required"
        }
      }
    }
  }
})
db.department.createIndex({ dept_name: 1 }, { unique: true })
db.department.insertMany([
  {
    "dept_name": "Biology",
    "building": "Watson",
    "budget": 90000
  },
  {
    "dept_name": "Comp. Sci.",
    "building": "Taylor",
    "budget": 100000
  },
  {
    "dept_name": "Elec. Eng.",
    "building": "Taylor",
    "budget": 85000
  },
  {
    "dept_name": "Finance",
    "building": "Painter",
    "budget": 120000
  },
  {
    "dept_name": "History",
    "building": "Painter",
    "budget": 50000
  },
  {
    "dept_name": "Music",
    "building": "Packard",
    "budget": 80000
  },
  {
    "dept_name": "Physics",
    "building": "Watson",
    "budget": 70000
  }
])

db.createCollection("instructor", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["ID", "name", "dept_name", "salary"],
      properties: {
        ID: {
          bsonType: "string",
          maxLength: 5,
          description: "must be a string and is required"
        },
        name: {
          bsonType: "string",
          maxLength: 20,
          description: "must be a string and is required"
        },
        dept_name: {
          bsonType: "string",
          maxLength: 20,
          description: "must be a string and is required"
        },
        salary: {
          bsonType: "int",
          maximum: 999999,
          minimum: 0,
          description: "must be a numeric value and is required"
        }
      }
    }
  }
});
db.instructor.createIndex({ ID: 1 }, { unique: true })
db.instructor.insertMany([
  {
    "ID": "10101",
    "name": "Srinivasan",
    "dept_name": "Comp. Sci.",
    "salary": 65000
  },
  {
    "ID": "12121",
    "name": "Wu",
    "dept_name": "Finance",
    "salary": 90000
  },
  {
    "ID": "15151",
    "name": "Mozart",
    "dept_name": "Music",
    "salary": 40000
  },
  {
    "ID": "22222",
    "name": "Einstein",
    "dept_name": "Physics",
    "salary": 40000
  },
  {
    "ID": "32343",
    "name": "El Said",
    "dept_name": "History",
    "salary": 60000
  },
  {
    "ID": "33456",
    "name": "Gold",
    "dept_name": "Physics",
    "salary": 87000
  },
  {
    "ID": "45565",
    "name": "Katz",
    "dept_name": "Comp. Sci.",
    "salary": 75000
  },
  {
    "ID": "58583",
    "name": "Califieri",
    "dept_name": "History",
    "salary": 62000
  },
  {
    "ID": "76543",
    "name": "Singh",
    "dept_name": "Finance",
    "salary": 80000
  },
  {
    "ID": "76766",
    "name": "Crick",
    "dept_name": "Biology",
    "salary": 72000
  },
  {
    "ID": "83821",
    "name": "Brandt",
    "dept_name": "Comp. Sci.",
    "salary": 92000
  },
  {
    "ID": "98345",
    "name": "Kim",
    "dept_name": "Elec. Eng.",
    "salary": 80000
  }
])

db.createCollection("course", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["course_id", "title", "dept_name", "credits"],
      properties: {
        course_id: {
          bsonType: "string",
          maxLength: 8,
          description: "must be a string and is required"
        },
        title: {
          bsonType: "string",
          maxLength: 50,
          description: "must be a string and is required"
        },
        dept_name: {
          bsonType: "string",
          maxLength: 20,
          description: "must be a string and is required"
        },
        credits: {
          bsonType: "string",
          maxLength: 1,
          description: "must be a string and is required"
        }
      }
    }
  },
});
db.course.createIndex({ course_id: 1 }, { unique: true });
db.course.insertMany([
    { course_id: 'BIO-101', title: 'Intro. to Biology', dept_name: 'Biology', credits: '4' },
    { course_id: 'BIO-301', title: 'Genetics', dept_name: 'Biology', credits: '4' },
    { course_id: 'BIO-399', title: 'Computational Biology', dept_name: 'Biology', credits: '3' },
    { course_id: 'CS-101', title: 'Intro. to Computer Science', dept_name: 'Comp. Sci.', credits: '3' },
    { course_id: 'CS-190', title: 'Game Design', dept_name: 'Comp. Sci.', credits: '4' },
    { course_id: 'CS-315', title: 'Robotics', dept_name: 'Comp. Sci.', credits: '3' },
    { course_id: 'CS-319', title: 'Image Processing', dept_name: 'Comp. Sci.', credits: '3' },
    { course_id: 'CS-347', title: 'Database System Concepts', dept_name: 'Comp. Sci.', credits: '3' },
    { course_id: 'EE-181', title: 'Intro. to Digital Systems', dept_name: 'Elec. Eng.', credits: '3' },
    { course_id: 'FIN-201', title: 'Investment Banking', dept_name: 'Finance', credits: '3' },
    { course_id: 'HIS-351', title: 'World History', dept_name: 'History', credits: '3' },
    { course_id: 'MU-199', title: 'Music Video Production', dept_name: 'Music', credits: '3' },
    { course_id: 'PHY-101', title: 'Physical Principles', dept_name: 'Physics', credits: '4' }
]);

db.createCollection("section", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "course_id", "sec_id", "semester", "year", "building", "room_number", "time_slot_id" ],
         properties: {
            course_id: {
               bsonType: "string",
               maxLength: 8,
               description: "must be a string and is required"
            },
            sec_id: {
               bsonType: "string",
               maxLength: 1,
               description: "must be a string and is required"
            },
            semester: {
               bsonType: "string",
               maxLength: 10,
               description: "must be a string and is required"
            },
            year: {
               bsonType: "string",
               maxLength: 4,
               description: "must be a string and is required"
            },
            building: {
               bsonType: "string",
               maxLength: 10,
               description: "must be a string and is required"
            },
            room_number: {
               bsonType: "string",
               maxLength: 5,
               description: "must be a string and is required"
            },
            time_slot_id: {
               bsonType: "string",
               maxLength: 2,
               description: "must be a string and is required"
            }
         }
      }
   },
})
db.section.createIndex({course_id: 1, sec_id: 1, semester: 1, year: 1}, {unique: true});
db.section.insertMany([
  { course_id: "BIO-101", sec_id: "1", semester: "Summer", year: "2017", building: "Painter", room_number: "514", time_slot_id: "B" },
  { course_id: "BIO-301", sec_id: "1", semester: "Summer", year: "2018", building: "Painter", room_number: "514", time_slot_id: "A" },
  { course_id: "CS-101", sec_id: "1", semester: "Fall", year: "2017", building: "Packard", room_number: "101", time_slot_id: "H" },
  { course_id: "CS-101", sec_id: "1", semester: "Spring", year: "2018", building: "Packard", room_number: "101", time_slot_id: "F" },
  { course_id: "CS-190", sec_id: "1", semester: "Spring", year: "2017", building: "Taylor", room_number: "3128", time_slot_id: "E" },
  { course_id: "CS-190", sec_id: "2", semester: "Spring", year: "2017", building: "Taylor", room_number: "3128", time_slot_id: "A" },
  { course_id: "CS-315", sec_id: "1", semester: "Spring", year: "2018", building: "Watson", room_number: "120", time_slot_id: "D" },
  { course_id: "CS-319", sec_id: "1", semester: "Spring", year: "2018", building: "Watson", room_number: "100", time_slot_id: "B" },
  { course_id: "CS-319", sec_id: "2", semester: "Spring", year: "2018", building: "Taylor", room_number: "3128", time_slot_id: "C" },
  { course_id: "CS-347", sec_id: "1", semester: "Fall", year: "2017", building: "Taylor", room_number: "3128", time_slot_id: "A" },
  { course_id: "EE-181", sec_id: "1", semester: "Spring", year: "2017", building: "Taylor", room_number: "3128", time_slot_id: "C" },
  { course_id: "FIN-201", sec_id: "1", semester: "Spring", year: "2018", building: "Packard", room_number: "101", time_slot_id: "B" },
  { course_id: "HIS-351", sec_id: "1", semester: "Spring", year: "2018", building: "Painter", room_number: "514", time_slot_id: "C" },
  { course_id: "MU-199", sec_id: "1", semester: "Spring", year: "2018", building: "Packard", room_number: "101", time_slot_id: "D" },
  { course_id: "PHY-101", sec_id: "1", semester: "Fall", year: "2017", building: "Watson", room_number: "100", time_slot_id: "A" }
]);

db.createCollection("teaches", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "ID", "course_id", "sec_id", "semester", "year" ],
         properties: {
            ID: {
               bsonType: "string",
               maxLength: 5,
               description: "must be a string and is required"
            },
            course_id: {
               bsonType: "string",
               maxLength: 8,
               description: "must be a string and is required"
            },
            sec_id: {
               bsonType: "string",
               maxLength: 1,
               description: "must be a string and is required"
            },
            semester: {
               bsonType: "string",
               maxLength: 10,
               description: "must be a string and is required"
            },
            year: {
               bsonType: "string",
               maxLength: 4,
               description: "must be a string and is required"
            }
         }
      }
   }
})
db.teaches.createIndex({ID: 1, course_id: 1, sec_id: 1, semester: 1, year: 1}, {unique: true});
db.teaches.insertMany([
  {ID: '10101', course_id: 'CS-101', sec_id: '1', semester: 'Fall', year: '2017'},
  {ID: '10101', course_id: 'CS-315', sec_id: '1', semester: 'Spring', year: '2018'},
  {ID: '10101', course_id: 'CS-347', sec_id: '1', semester: 'Fall', year: '2017'},
  {ID: '12121', course_id: 'FIN-201', sec_id: '1', semester: 'Spring', year: '2018'},
  {ID: '15151', course_id: 'MU-199', sec_id: '1', semester: 'Spring', year: '2018'},
  {ID: '22222', course_id: 'PHY-101', sec_id: '1', semester: 'Fall', year: '2017'},
  {ID: '32343', course_id: 'HIS-351', sec_id: '1', semester: 'Spring', year: '2018'},
  {ID: '45565', course_id: 'CS-101', sec_id: '1', semester: 'Spring', year: '2018'},
  {ID: '45565', course_id: 'CS-319', sec_id: '1', semester: 'Spring', year: '2018'},
  {ID: '76766', course_id: 'BIO-101', sec_id: '1', semester: 'Summer', year: '2017'},
  {ID: '76766', course_id: 'BIO-301', sec_id: '1', semester: 'Summer', year: '2018'},
  {ID: '83821', course_id: 'CS-190', sec_id: '1', semester: 'Spring', year: '2017'},
  {ID: '83821', course_id: 'CS-190', sec_id: '2', semester: 'Spring', year: '2017'},
  {ID: '83821', course_id: 'CS-319', sec_id: '2', semester: 'Spring', year: '2018'},
  {ID: '98345', course_id: 'EE-181', sec_id: '1', semester: 'Spring', year: '2017'}
])

db.createCollection("student", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "ID", "name", "dept_name", "tot_cred" ],
         properties: {
            ID: {
               bsonType: "string",
               maxLength: 5,
               description: "must be a string and is required"
            },
            name: {
               bsonType: "string",
               maxLength: 20,
               description: "must be a string and is required"
            },
            dept_name: {
               bsonType: "string",
               maxLength: 20,
               description: "must be a string and is required"
            },
            tot_cred: {
               bsonType: "string",
               maxLength: 3,
               description: "must be a string and is required"
            }
         }
      }
   }
})
db.student.createIndex({ID: 1}, {unique: true});
db.student.insertMany([
  { ID: '00128', name: 'Zhang', dept_name: 'Comp. Sci.', tot_cred: '102' },
  { ID: '12345', name: 'Shankar', dept_name: 'Comp. Sci.', tot_cred: '32' },
  { ID: '19991', name: 'Brandt', dept_name: 'History', tot_cred: '80' },
  { ID: '23121', name: 'Chavez', dept_name: 'Finance', tot_cred: '110' },
  { ID: '44553', name: 'Peltier', dept_name: 'Physics', tot_cred: '56' },
  { ID: '45678', name: 'Levy', dept_name: 'Physics', tot_cred: '46' },
  { ID: '54321', name: 'Williams', dept_name: 'Comp. Sci.', tot_cred: '54' },
  { ID: '55739', name: 'Sanchez', dept_name: 'Music', tot_cred: '38' },
  { ID: '70557', name: 'Snow', dept_name: 'Physics', tot_cred: '0' },
  { ID: '76543', name: 'Brown', dept_name: 'Comp. Sci.', tot_cred: '58' },
  { ID: '76653', name: 'Aoi', dept_name: 'Elec. Eng.', tot_cred: '60' },
  { ID: '98765', name: 'Bourikas', dept_name: 'Elec. Eng.', tot_cred: '98' },
  { ID: '98988', name: 'Tanaka', dept_name: 'Biology', tot_cred: '120' }
])

// Question 2

db.teaches.aggregate([
  { $group: {
      _id: { ID: "$ID", dept_name: "$dept_name" },
      courses: { $addToSet: "$course_id" }
  }},
  { $group: {
      _id: "$_id.ID",
      numCourses: { $sum: { $size: "$courses" } },
      courses: { $addToSet: "$courses" }
  }},
  { $unwind: "$courses" },
  { $group: {
      _id: "$_id",
      courses: { $addToSet: "$courses" },
      numCourses: { $first: "$numCourses" }
  }},
  { $match: {
      $expr: { $eq: [ "$numCourses", { $size: "$courses" } ] }
  }},
  { $lookup: {
      from: "instructor",
      localField: "_id",
      foreignField: "ID",
      as: "instructor"
  }},
  { $unwind: "$instructor" },
  { $project: {
      _id: 0,
      name: "$instructor.name",
      ID: "$instructor.ID"
  }},
  { $sort: { name: 1 } }
]);

// Question 3

db.department.find(
  {budget: {$gt: db.department.findOne({dept_name: 'Physics'}).budget}},
  {dept_name: 1, _id: 0}
).sort({dept_name: 1});

// Question 4

db.createCollection("classroom", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "building", "room_number", "capacity" ],
         properties: {
            building: {
               bsonType: "string",
               maxLength: 20,
               description: "must be a string and is required"
            },
            room_number: {
               bsonType: "string",
               maxLength: 5,
               description: "must be an integer and is required"
            },
            capacity: {
               bsonType: "int",
               maximum: 999,
               minimum: 1,
               description: "must be an integer and is required"
            }
         }
      }
   }
})

db.classroom.createIndex({building: 1, room_number: 1}, {unique: true});

db.section.aggregate([
  {$group: {_id: {building: "$building", room_number: "$room_number"}}},
  {$project: {building: "$_id.building", room_number: "$_id.room_number", _id: 0}},
  {$sort: {building: 1}},
]).forEach(function(doc) {
  db.classroom.insertOne({
    "building": doc.building,
    "room_number": doc.room_number,
    "capacity": 100 + (db.classroom.countDocuments() * 5)
  });
});

// Question 5

db.createCollection("takes", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "ID", "course_id", "sec_id", "semester", "year", "grade" ],
         properties: {
            ID: {
               bsonType: "string",
               maxLength: 5,
               description: "must be a string and is required"
            },
            course_id: {
               bsonType: "string",
               maxLength: 30,
               description: "must be a string and is required"
            },
            sec_id: {
               bsonType: "string",
               maxLength: 1,
               description: "must be a string and is required"
            },
            semester: {
               bsonType: "string",
               maxLength: 30,
               description: "must be a string and is required"
            },
            year: {
               bsonType: "string",
               maxLength: 4,
               description: "must be a string and is required"
            },
            grade: {
               bsonType: ["string", "null"],
               maxLength: 5,
               description: "must be a string and is required"
            }
         }
      }
   }
})

db.takes.createIndex({ID: 1, course_id: 1, sec_id: 1, semester: 1, year: 1}, {unique: true});

db.takes.insertMany([
   { ID: '00128', course_id: 'CS-101', sec_id: '1', semester: 'Fall', year: '2017', grade: 'A' },
   { ID: '00128', course_id: 'CS-347', sec_id: '1', semester: 'Fall', year: '2017', grade: 'A-' },
   { ID: '12345', course_id: 'CS-101', sec_id: '1', semester: 'Fall', year: '2017', grade: 'C' },
   { ID: '12345', course_id: 'CS-190', sec_id: '2', semester: 'Spring', year: '2017', grade: 'A' },
   { ID: '12345', course_id: 'CS-315', sec_id: '1', semester: 'Spring', year: '2018', grade: 'A' },
   { ID: '12345', course_id: 'CS-347', sec_id: '1', semester: 'Fall', year: '2017', grade: 'A' },
   { ID: '19991', course_id: 'HIS-351', sec_id: '1', semester: 'Spring', year: '2018', grade: 'B' },
   { ID: '23121', course_id: 'FIN-201', sec_id: '1', semester: 'Spring', year: '2018', grade: 'C+' },
   { ID: '44553', course_id: 'PHY-101', sec_id: '1', semester: 'Fall', year: '2017', grade: 'B-' },
   { ID: '45678', course_id: 'CS-101', sec_id: '1', semester: 'Fall', year: '2017', grade: 'F' },
   { ID: '45678', course_id: 'CS-101', sec_id: '1', semester: 'Spring', year: '2018', grade: 'B+' },
   { ID: '45678', course_id: 'CS-319', sec_id: '1', semester: 'Spring', year: '2018', grade: 'B' },
   { ID: '54321', course_id: 'CS-101', sec_id: '1', semester: 'Fall', year: '2017', grade: 'A-' },
   { ID: '54321', course_id: 'CS-190', sec_id: '2', semester: 'Spring', year: '2017', grade: 'B+' },
   { ID: '55739', course_id: 'MU-199', sec_id: '1', semester: 'Spring', year: '2018', grade: 'A-' },
   { ID: '76543', course_id: 'CS-101', sec_id: '1', semester: 'Fall', year: '2017', grade: 'A' },
   { ID: '76543', course_id: 'CS-319', sec_id: '2', semester: 'Spring', year: '2018', grade: 'A' },
   { ID: '76653', course_id: 'EE-181', sec_id: '1', semester: 'Spring', year: '2017', grade: 'C' },
   { ID: '98765', course_id: 'CS-101', sec_id: '1', semester: 'Fall', year: '2017', grade: 'C-' },
   { ID: '98765', course_id: 'CS-315', sec_id: '1', semester: 'Spring', year: '2018', grade: 'B' },
   { ID: '98988', course_id: 'BIO-101', sec_id: '1', semester: 'Summer', year: '2017', grade: 'A' },
   { ID: '98988', course_id: 'BIO-301', sec_id: '1', semester: 'Summer', year: '2018', grade: null }
])

db.takes.aggregate([
  {
    $group: {
      _id: {
        course_id: "$course_id",
        sec_id: "$sec_id",
        year: "$year",
        semester: "$semester"
      },
      num: { $sum: 1 }
    }
  },
  {
    $sort: { num: -1 }
  },
  {
    $limit: 1
  },
  {
    $project: {
      _id: 0,
      course_id: "$_id.course_id",
      sec_id: "$_id.sec_id",
      year: "$_id.year",
      semester: "$_id.semester",
      num: "$num"
    }
  }
])
