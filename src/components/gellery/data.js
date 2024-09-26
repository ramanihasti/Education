const classes = [
    {
        id:1,
        img:"/img/c1.jpg"
    },
    {
        id:2,
        img:"/img/c2.jpg"
    },
    {
        id:3,
        img:"/img/c3.jpg"
    },
    {
        id:4,
        img:"/img/c4.jpg"
    },
];

const ai = [
    {
        id:1,
        img:"/img/a1.jpg"
    },
    {
        id:2,
        img:"/img/a2.jpg"
    },
    {
        id:3,
        img:"/img/a3.jpg"
    },
    {
        id:4,
        img:"/img/a4.jpg"
    },
];

const app = [
    {
        id:1,
        img:"/img/w1.jpg"
    },
    {
        id:2,
        img:"/img/w2.jpg"
    },
    {
        id:3,
        img:"/img/w3.jpg"
    },
    {
        id:4,
        img:"/img/w4.jpg"
    },
];

const all = app.concat(ai, classes);

export const images = {
    1:all,
    2:classes,
    3:ai,
    4:app,

}