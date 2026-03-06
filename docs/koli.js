let img1 = document.getElementById('img-1');
let img2 = document.getElementById('img-2');
let img3 = document.getElementById('img-3');
let img4 = document.getElementById('img-4');
let img5 = document.getElementById('img-5');
let img6 = document.getElementById('img-6');
let img7 = document.getElementById('img-7');
//----
let section = document.getElementById('section');
let heading1 = document.getElementById('h1');
//-----
let p0 = document.getElementsByTagName('p')[0];
let p1 = document.getElementsByTagName('p')[1];
let p2 = document.getElementsByTagName('p')[2];

addEventListener('scroll', () => {

    let value = scrollY;
    img1.style.left = value + 'px';
    img2.style.top = value + 'px';
    img2.style.display = 'block';
    document.body.style.backgroundColor = '#000622';
    heading1.style.display = 'none';
    //section-2
    if (scrollY >= 80) {
        heading1.style.display = 'block';
        let value2 = scrollY;
        heading1.style.bottom = value2 * 2 + 'px';
    }
    //section-3
    if (scrollY > 150) {
        document.body.style.backgroundColor = '#3d3d98ff';

    }
    if (scrollY > 296) {
        img2.style.display = 'none';
    };
    //section-4

    let value1 = scrollY;
    img5.style.left = value1 - 2 + 'px';
    img6.style.right = value1 - 2 + 'px';
    //img-7
    let valueson = scrollY;
    img7.style.bottom = valueson + 'px';
});