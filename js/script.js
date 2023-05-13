let doc = document
let sec = doc.querySelectorAll('input')
let in1 = doc.querySelectorAll('.in')
let but = doc.querySelector('.but')
let r1 = doc.querySelectorAll('.r1')
let need = doc.querySelectorAll('.need')
let t = doc.querySelectorAll('.t')
let n3 = doc.querySelector('.n3')
let n4 = doc.querySelector('.n4')
let d = doc.querySelector('.d')
console.log(sec);

console.log(d.value);

let r = 0
let l = 12
but.onclick = (event) => {
    event.preventDefault()
    let r2 = []
    let r3 = []


    for (let i of sec) {
        if (i.value != "") {
            r2.push(i)
            r = r2.length
            n3.innerHTML = r

        }

        else {
            r3.push(i)
            l = r3.length
            console.log(r3.length);
            n4.innerHTML = l
        }
    }

    for (let i of in1) {
        if (i.value != "") {
            i.style.borderColor = 'blue'
            for (let i of r1) {
                i.style.color = 'blue'
                console.log(i);
            }
            // for (let it of need) {
            //     i.style.display = 'block'
            // }
            // for(let it of t){
            //     it.style.display = 'none'
            // }
        }
        else {
            for (let i of r1) {
                i.style.color = 'red'
                console.log(i);
            }
            i.style.borderColor = 'red'
            // for (let i of need) {
            //     i.style.display = 'none'
            // }
            // for(let i of t){
            //     i.style.display = 'block'
            // }
        }
    }

}





function i() {
    for (let i of sec) {
        if (sec.values != '') {
            in1.classList.add('active')
        }
    }
}
