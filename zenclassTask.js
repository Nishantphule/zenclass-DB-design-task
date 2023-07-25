// Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors


users: [
    {
        _id: 1,
        mentee: "Arvind",
        email: "arvind@gmail.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 4, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 1, status: "Not submitted" }, { $ref: 'tasks', _id: 5, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "present" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "absent" }, { date: "2023-10-19", status: "present" },],
        codekata: 13,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 2, }, { $ref: 'company_drives', _id: 5, },],
    },
    {
        _id: 2,
        mentee: "Raj",
        email: "raj@gmail.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 5, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "Not submitted" }, { $ref: 'tasks', _id: 1, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "present" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "absent" }, { date: "2023-10-19", status: "absent" },],
        codekata: 13,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 3, }, { $ref: 'company_drives', _id: 4, },],
    },
    {
        _id: 3,
        mentee: "Priya",
        email: "priya@gmail.com",
        mentor: { $ref: 'mentors', _id: 2, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 5, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "Not submitted" }, { $ref: 'tasks', _id: 2, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "absent" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "present" }, { date: "2023-10-19", status: "absent" },],
        codekata: 13,
        company_drives_attended: [{ $ref: 'company_drives', _id: 2, }, { $ref: 'company_drives', _id: 3, }, { $ref: 'company_drives', _id: 5, },],
    },
    {
        _id: 4,
        mentee: "Nishant",
        email: "nishant@gmail.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 5, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "Not submitted" }, { $ref: 'tasks', _id: 3, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "absent" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "present" }, { date: "2023-10-19", status: "present" },],
        codekata: 13,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 3, }, { $ref: 'company_drives', _id: 5, },],
    },
    {
        _id: 5,
        mentee: "Shubham",
        email: "shubham@gmail.com",
        mentor: { $ref: 'mentors', _id: 2, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 5, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "Not submitted" }, { $ref: 'tasks', _id: 2, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "present" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "absent" }, { date: "2023-10-19", status: "present" },],
        codekata: 13,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 3, },],
    },
    {
        _id: 6,
        mentee: "Suresh",
        email: "suresh@yahoo.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "Not submitted" }, { $ref: 'tasks', _id: 5, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "absent" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "present" }, { date: "2023-10-19", status: "present" },],
        codekata: 23,
        company_drives_attended: [{ $ref: 'company_drives', _id: 2, }, { $ref: 'company_drives', _id: 3, },],
    },
    {
        _id: 7,
        mentee: "Nancy",
        email: "nancy@gamil.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "Not submitted" }, { $ref: 'tasks', _id: 5, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "present" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "absent" }, { date: "2023-10-19", status: "absent" },],
        codekata: 13,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 3, },],
    },
    {
        _id: 8,
        mentee: "Alexander",
        email: "alexander@gmail.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "Not submitted" }, { $ref: 'tasks', _id: 5, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "present" }, { date: "2023-10-20", status: "absent" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "absent" }, { date: "2023-10-19", status: "present" },],
        codekata: 17,
        company_drives_attended: [{ $ref: 'company_drives', _id: 2, }, { $ref: 'company_drives', _id: 3, }, { $ref: 'company_drives', _id: 5, },],
    },
    {
        _id: 9,
        mentee: "Danielle",
        email: "danielle@yahoo.<EMAIL>",
        mentor: { $ref: 'mentors', _id: 2, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "Not submitted" }, { $ref: 'tasks', _id: 5, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "absent" }, { date: "2023-10-20", status: "absent" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "present" }, { date: "2023-10-19", status: "present" },],
        codekata: 16,
        company_drives_attended: [{ $ref: 'company_drives', _id: 2, }, { $ref: 'company_drives', _id: 3, }, { $ref: 'company_drives', _id: 5, },],
    },
    {
        _id: 10,
        mentee: "Alex",
        email: "alex@gmail.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "Not submitted" }, { $ref: 'tasks', _id: 5, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "present" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "absent" }, { date: "2023-10-19", status: "present" },],
        codekata: 15,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 4, }, { $ref: 'company_drives', _id: 5, },],
    },
    {
        _id: 11,
        mentee: "Johnson",
        email: "johnson@hotmail.coom",
        mentor: { $ref: 'mentors', _id: 2, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 5, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "Not submitted" }, { $ref: 'tasks', _id: 3, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "present" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "absent" }, { date: "2023-10-19", status: "absent" },],
        codekata: 12,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 3, }, { $ref: 'company_drives', _id: 2, },],
    },
    {
        _id: 12,
        mentee: "Smith",
        email: "smith@yahoo.<EMAIL>",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 5, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "Not submitted" }, { $ref: 'tasks', _id: 2, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "absent" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "absent" }, { date: "2023-10-19", status: "absent" },],
        codekata: 42,
        company_drives_attended: [{ $ref: 'company_drives', _id: 2, }, { $ref: 'company_drives', _id: 3, }, { $ref: 'company_drives', _id: 5, },],
    },
    {
        _id: 13,
        mentee: "Jones",
        email: "jones@gmail.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 5, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "Not submitted" }, { $ref: 'tasks', _id: 2, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "present" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "absent" }, { date: "2023-10-19", status: "present" },],
        codekata: 23,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 4, }, { $ref: 'company_drives', _id: 5, },],
    },
    {
        _id: 14,
        mentee: "Johnso",
        email: "johnson@hotmail.co.in",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "Not submitted" }, { $ref: 'tasks', _id: 5, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "absent" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "present" }, { date: "2023-10-19", status: "present" },],
        codekata: 12,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 3, }, { $ref: 'company_drives', _id: 4, },],
    },
    {
        _id: 15,
        mentee: "Supriya",
        email: "sup@gmail.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 5, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "Not submitted" }, { $ref: 'tasks', _id: 1, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "absent" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "present" }, { date: "2023-10-19", status: "present" },],
        codekata: 15,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 3, }, { $ref: 'company_drives', _id: 5, },],
    },
    {
        _id: 16,
        mentee: "Riya ",
        email: "riya@gmail.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 4, status: "submitted" }, { $ref: 'tasks', _id: 5, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 1, status: "Not submitted" }, { $ref: 'tasks', _id: 2, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "absent" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "absent" }, { date: "2023-10-18", status: "present" }, { date: "2023-10-19", status: "present" },],
        codekata: 11,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 4, }, { $ref: 'company_drives', _id: 5, },],
    },
    {
        _id: 17,
        mentee: "siddharth ",
        email: "sid@yahoo.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 5, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "Not submitted" }, { $ref: 'tasks', _id: 1, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "absent" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "present" }, { date: "2023-10-19", status: "absent" },],
        codekata: 17,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 3, }, { $ref: 'company_drives', _id: 4, },],
    },
    {
        _id: 18,
        mentee: "Archita",
        email: "archi@hotmail.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "Not submitted" }, { $ref: 'tasks', _id: 5, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "absent" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "absent" }, { date: "2023-10-19", status: "present" },],
        codekata: 18,
        company_drives_attended: [{ $ref: 'company_drives', _id: 2, }, { $ref: 'company_drives', _id: 3, }, { $ref: 'company_drives', _id: 5, },],
    },
    {
        _id: 19,
        mentee: "Rahul",
        email: "rahul@gmail.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 4, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 1, status: "Not submitted" }, { $ref: 'tasks', _id: 5, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "absent" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "absent" }, { date: "2023-10-19", status: "present" },],
        codekata: 13,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 3, }, { $ref: 'company_drives', _id: 5, },],
    },
    {
        _id: 20,
        mentee: "Sam",
        email: "sam@yahoo.com",
        mentor: { $ref: 'mentors', _id: 1, },
        tasks: [{ $ref: 'tasks', _id: 1, status: "submitted" }, { $ref: 'tasks', _id: 2, status: "submitted" }, { $ref: 'tasks', _id: 3, status: "submitted" }, { $ref: 'tasks', _id: 4, status: "Not submitted" }, { $ref: 'tasks', _id: 5, status: "Not submitted" }],
        attendance: [{ date: "2023-10-02", status: "present" }, { date: "2023-10-20", status: "present" }, { date: "2023-10-12", status: "present" }, { date: "2023-10-18", status: "absent" }, { date: "2023-10-19", status: "absent" },],
        codekata: 20,
        company_drives_attended: [{ $ref: 'company_drives', _id: 1, }, { $ref: 'company_drives', _id: 3, }, { $ref: 'company_drives', _id: 4, },],
    },
];


tasks: [
    {
        _id: 1,
        name: "HTML",
        createdAt: "2023-10-02",
    },
    {
        _id: 2,
        name: "CSS",
        createdAt: "2023-10-12",
    },
    {
        _id: 3,
        name: "JavaScript",
        createdAt: "2023-10-18",
    },
    {
        _id: 4,
        name: "ReactJS",
        createdAt: "2023-10-19",
    },
    {
        _id: 5,
        name: "NodeJs",
        createdAt: "2023-10-20",
    }
]

topics: [
    {
        _id: 1,
        date: "2023-10-02",
        name: "HTML",
    },
    {
        _id: 2,
        date: "2023-10-12",
        name: "CSS",
    },
    {
        _id: 3,
        date: "2023-10-18",
        name: "JS",
    },
    {
        _id: 4,
        date: "2023-10-19",
        name: "REACT.js",
    },
    {
        _id: 5,
        date: "2023-10-20",
        name: "NODE.js",
    },
]


company_drives: [
    {
        _id: 1,
        date: "2023-10-02",
        name: "Company1",
    },
    {
        _id: 2,
        date: "2023-10-12",
        name: "Company2",
    },
    {
        _id: 3,
        date: "2023-10-18",
        name: "Company3",
    },
    {
        _id: 4,
        date: "2023-10-19",
        name: "Company4",
    },
    {
        _id: 5,
        date: "2023-10-20",
        name: "Company5",
    },
]

mentors: [
    {
        _id: 1,
        name: "Raghav"
    },
    {
        _id: 2,
        name: "Sanjay"
    }
]



// Find all the topics and tasks which are thought in the month of October
db.topics.find({
    date: {
        $gte: "2023-10-01",
        $lte: "2023-10-31"
    }
})

db.tasks.find({
    createdAt: {
        $gte: "2023-10-01",
        $lte: "2023-10-31"
    }
})


// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({
    date: {
        $gte: "2023-10-15",
        $lte: "2023-10-31"
    }
})


// Find all the company drives and students who are appeared for the placement.
db.company_drives.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "company_drives_attended._id",
            as: "students"
        }
    },
    {
        $unwind: "$students"
    },
    {
        $group: {
            _id: "$name",
            company_drive_id: { $first: "$_id" },
            students: {
                $push: {
                    _id: "$students._id",
                    mentee: "$students.mentee",
                    email: "$students.email"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            company_name: "$_id",
            company_drive_id: 1,
            students: 1
        }
    }
])



// Find the number of problems solved by the user in codekata
db.users.find({}, { name: 1, codekata: 1 })


// Find all the mentors with who has the mentee's count more than 15
db.users.aggregate([
    {
        $group: {
            _id: "$mentor._id",
            mentorId: { $first: "$mentor._id" },
            menteeCount: { $sum: 1 }
        }
    },
    {
        $match: {
            menteeCount: { $gt: 15 }
        }
    },
    {
        $lookup: {
            from: "mentors",
            localField: "mentorId",
            foreignField: "_id",
            as: "mentorInfo"
        }
    },
    {
        $unwind: "$mentorInfo"
    },
    {
        $project: {
            _id: 0,
            mentorName: "$mentorInfo.name",
            menteeCount: 1
        }
    }
]);



// Find the number of users who are absent and task is not submitted  between 15 oct-2023 and 31-oct-2023

// users who are absent between 15 oct-2023 and 31-oct-2023
db.users.aggregate([
    {
        $unwind: "$attendance"
    },
    {
        $match: {
            "attendance.date": {
                $gte: "2023-10-15",
                $lte: "2023-10-31"
            },
            "attendance.status": "absent"
        }
    },
    {
        $group: {
            _id: null,
            count: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            count: 1
        }
    }
])

// users whos task is not submitted  between 15 oct-2023 and 31-oct-2023
db.users.aggregate([
    {
      $unwind: "$tasks"
    },
    {
      $lookup: {
        from: "tasks",
        localField: "tasks._id",
        foreignField: "_id",
        as: "taskInfo"
      }
    },
    {
      $unwind: "$taskInfo"
    },
    {
      $match: {
        "tasks.status": "Not submitted",
        "taskInfo.createdAt": {
          $gte: "2023-10-15",
          $lte: "2023-10-31"
        }
      }
    },
    {
      $group: {
        _id: null,
        count: { $sum: 1 }
      }
    },
    {
      $project: {
        _id: 0,
        count: 1
      }
    }
  ]);
  
  