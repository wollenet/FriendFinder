

app.post("/api/new", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    friendsArr.push(newFriend);
    res.json(newFriend);
});

app.get("/api/friends", function(req, res) {
    res.json(friendsArr);
});


