// // initialize express router
// let router = require("express").Router();

// // set default api respone
// router.get("/", function(req, res) {
//     res.json({
//         status: "API its working",
//         message: "Welcome to the programing"
//     });
// });

// // export API
// module.exports = router;

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    let a, b, c;
    a = 10;
    b = 8;
    c = a - b;

    // let loop = ["one", "two", "three", "four", "five"];

    // for (let i = 0; i < loop.length; i++) {
    //     console.log(loop[i]);
    // }

    // let n = "";
    // let s = 10;
    // for (let i = 1; i <= s; i++) {
    //     n = n + i;
    //     console.log(n);
    // }
    // function pyramid(n) {
    //     for (let i = 1; i <= n; i++) {
    //         let str = " ".repeat(n - i);

    //         let str2 = "*".repeat(i * 2 - 1);

    //         console.log(str + str2 + str);
    //     }
    // }

    // pyramid(5);

    app.post("/email", (req, res) => {
        let email = req.body.email;

        return res.send(`The email value is ${email}`);
    });

    res.send(`The value of c is ${c}`);
});

app.post("/tambah", (req, res) => {
    let x = parseInt(req.body.x);
    let y = parseInt(req.body.y);
    let z = x + y;
    res.send(`result x + y is ${z}`);
});

app.listen(3300, () => {
    console.log(`Exercise app listening on port 3300`);
});
