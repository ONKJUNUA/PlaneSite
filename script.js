let container = document.querySelector('.container1');
for(let j = 1; j<=4; j++){
    if (j===2) container = document.querySelector('.container2');
    else if (j===3) container = document.querySelector('.container3');
    else if (j===4) container = document.querySelector('.container4');

    for (let i = 1; i<= 100; i++){
        let dot = document.createElement('div');
        if (j===1){
            dot.classList.add('element')
            if (i%10===0 || i%10===1 || i<10 || i>90) dot.classList.add('el2');
            else if (i>33 && i<38 || i>43 && i<48 || i>53 && i<58 || i>63 && i<68) dot.classList.add('el');
            else dot.classList.add('el1');
        }
        if (j===2){
            dot.classList.add('element2')
            if (i%10===0 || i%10===1 || i<10 || i>90) dot.classList.add('el4');
            else if (i>33 && i<38 || i>43 && i<48 || i>53 && i<58 || i>63 && i<68) dot.classList.add('el');
            else dot.classList.add('el3');
        }
        if (j===3){
            dot.classList.add('element3')
            if (i%10===0 || i%10===1 || i<10 || i>90) dot.classList.add('el6');
            else if (i>33 && i<38 || i>43 && i<48 || i>53 && i<58 || i>63 && i<68) dot.classList.add('el');
            else dot.classList.add('el5');
        }
        if (j===4){
            dot.classList.add('element4')
            if (i%10===0 || i%10===1 || i<10 || i>90) dot.classList.add('el8');
            else if (i>33 && i<38 || i>43 && i<48 || i>53 && i<58 || i>63 && i<68) dot.classList.add('el');
            else dot.classList.add('el7');
        }
        container.appendChild(dot);
    }
}

let dotAll = document.querySelectorAll('.element');
let dotAll2 = document.querySelectorAll('.element2');
let dotAll3 = document.querySelectorAll('.element3');
let dotAll4 = document.querySelectorAll('.element4');

let animation = anime.timeline({
    targets: dotAll,
    easing: 'easeInOutExpo',
    loop:true,
    delay: anime.stagger(100,{grid:[10,10],from: 'center'})
})
animation.add({
    rotateZ: 180,
    translateY: anime.stagger(-20, {grid:[10,10], from: 'center', axis:'y'}),
    translateX: anime.stagger(-20, {grid:[10,10], from: 'center', axis:'x'}),
    borderRadius: 50,
})
.add({
    borderRadius: 0,
})
.add({
    scale: 0.2,
    opacity: 0.8,
})
animation.add({
    rotateZ: 180,
    translateY: anime.stagger(0, {grid:[10,10], from: 'center', axis:'y'}),
    translateX: anime.stagger(0, {grid:[10,10], from: 'center', axis:'x'}),
    opacity: 1,
})
.add({
    scale: 1,
    borderRadius: 0,
})

let animation2 = anime.timeline({
    targets: dotAll2,
    easing: 'easeInOutExpo',
    loop:true,
    delay: anime.stagger(100,{grid:[10,10],from: 'center'})
})
animation2.add({
    rotateZ: 180,
    translateY: anime.stagger(-20, {grid:[10,10], from: 'center', axis:'y'}),
    translateX: anime.stagger(-20, {grid:[10,10], from: 'center', axis:'x'}),
})
.add({
    borderRadius: 50,
})
.add({
    scale: 0.2,
    opacity: 0.8,
})
animation2.add({
    rotateZ: 180,
    translateY: anime.stagger(0, {grid:[10,10], from: 'center', axis:'y'}),
    translateX: anime.stagger(0, {grid:[10,10], from: 'center', axis:'x'}),
    opacity: 1,
})
.add({
    scale: 1,
    borderRadius: 0,
})

let animation3 = anime.timeline({
    targets: dotAll3,
    easing: 'easeInOutExpo',
    loop:true,
    delay: anime.stagger(100,{grid:[10,10],from: 'center'})
})
animation3.add({
    rotateZ: 180,
    translateY: anime.stagger(-20, {grid:[10,10], from: 'center', axis:'y'}),
    translateX: anime.stagger(-20, {grid:[10,10], from: 'center', axis:'x'}),
})
.add({
    borderRadius: 50,
})
.add({
    scale: 0.2,
    opacity: 0.8,
})
animation3.add({
    rotateZ: 180,
    translateY: anime.stagger(0, {grid:[10,10], from: 'center', axis:'y'}),
    translateX: anime.stagger(0, {grid:[10,10], from: 'center', axis:'x'}),
    opacity: 1,
})
.add({
    scale: 1,
    borderRadius: 0,
})

let animation4 = anime.timeline({
    targets: dotAll4,
    easing: 'easeInOutExpo',
    loop:true,
    delay: anime.stagger(100,{grid:[10,10],from: 'center'})
})
animation4.add({
    rotateZ: 180,
    translateY: anime.stagger(-20, {grid:[10,10], from: 'center', axis:'y'}),
    translateX: anime.stagger(-20, {grid:[10,10], from: 'center', axis:'x'}),
})
.add({
    borderRadius: 50,
})
.add({
    scale: 0.2,
    opacity: 0.8,
})
animation4.add({
    rotateZ: 180,
    translateY: anime.stagger(0, {grid:[10,10], from: 'center', axis:'y'}),
    translateX: anime.stagger(0, {grid:[10,10], from: 'center', axis:'x'}),
    opacity: 1,
})
.add({
    scale: 1,
    borderRadius: 0,
})