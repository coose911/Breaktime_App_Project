use BreakTime;


db.dropDatabase();


db.diary_entries.insertMany([
    {
        title: "I hate mondays",
        entryThoughts: "mondays suck and i love lasagne",
        date: "1-02-22",
        time: "18:34"
    },
    {
        title: "My head hurts",
        entryThoughts: "sandwiches really just dont hit the same wihtout a big glass of lovely beer",
        date: "1-02-22",
        time: "12:02"
    },{
        title: "",
        entryThoughts: "why did i have to wake up",
        date: "1-02-22",
        time: "07:16"
    }
])