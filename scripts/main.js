// #####-|-NAVBAR-|-#####

let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
let menuMore = document.getElementById('menu-more');
let backBtn = document.getElementById('back-btn');

let temp = 0;
let toggleMenu = ()=>{
    menuMore.classList.toggle('active');
    menu.classList.toggle('toX');
    
    if(temp == 0){
        document.body.style.overflow = 'hidden';
        nav.style.backgroundImage = 'none';
        if(backBtn){
            backBtn.style.display = 'none';
        }
        temp = 1;
    }else{
        document.body.style.overflow = 'auto';
        nav.style.backgroundImage = 'linear-gradient(rgb(0,7,51), transparent)';
        if(backBtn){
            backBtn.style.display = 'block';
        }
        temp = 0;
    }
}

menu.addEventListener('click', ()=>{toggleMenu();});
for(let i = 0; i < menuMore.children.length; i++){
    menuMore.children[i].addEventListener('click', ()=>{toggleMenu();});
}
if(backBtn){backBtn.addEventListener('click', ()=>{
    history.back();
});}
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    location.reload();
  }
});











// #####-|-SCROLL-BUTTON-|-#####
let nextScroll = (id, sum)=>{
    const el = document.getElementById(id);
    el.scrollBy({ left:sum, behavior:"smooth"});
};

let tglElem = (id, cl)=>{
    const el = document.getElementById(id);
    el.classList.toggle(cl);
};








// #####-|-ADD-CHAPTER-|-ADD-MATERI-|-#####

let addCh = (id, judul, desk, chId)=>{
    const parent = document.getElementById(id);
    parent.insertAdjacentHTML("beforeend",
    `
    <div class="item fadeInline">
      <div class="materi-parent" id="${chId}">
        <div class="ch-header">
          <h1 class="txt-wth">${judul}</h1>
          <p class="txt-wth">${desk}</p>
        </div>
      </div>
    </div>
    `);
}

let addMateri = (chId, judul, desk, matLink)=>{
    const parent = document.getElementById(chId);
    parent.insertAdjacentHTML("beforeend",
    `
    <div class="materi">
        <h1 class="txt-wth">${judul}</h1>
        <p class="txt-wth">${desk}</p>
        <a class="txt-wth" onclick="selectMat('${matLink}')" href="materi.html">Pelajari</a>
    </div>
    `);
}

let addChMat = ()=>{
    addCh("js-chP","CHAPTER 1","Pengenalan Javascript","js-ch1");
    addMateri("js-ch1","Sejarah dan pengertian","Pelajari bagaimana javascript dapat terbentuk","js-mat-1");
    addMateri("js-ch1","Meletakkan Script Javascript","Pelajari berbagai cara meletakkan Script Javascript","js-mat-2");
    addMateri("js-ch1","Menampilkan Output","Pelajari berbagai cara menampilkan output program pada Javascript","js-mat-3");
    
    addCh("js-chP","CHAPTER 2","Dasar-Dasar Javascript","js-ch2");
    addMateri("js-ch2","Variabel","Pelajari bagaimana cara mendeklarasikan variabel di Javascript","js-mat-4");
    addMateri("js-ch2","Tipe data","Pelajari berbagai tipe data di Javascript","js-mat-5");
    addMateri("js-ch2","Operator","Pelajari berbagai macam operator dalam Javascript","js-mat-6");
    
    addCh("js-chP","CHAPTER 3","Percabangan dan Perulangan di Javascript","js-ch3");
    addMateri("js-ch3","Percabangan if","Pelajari bagaimana membuat percabangan if dalam Javascript","js-mat-7");
    addMateri("js-ch3","Percabangan if else","Pelajari bagaimana membuat percabangan if else dalam Javascript","js-mat-8");
    addMateri("js-ch3","Perulangan","Pelajari bagaimana membuat perulangan while dalam Javascript","js-mat-9");
    
    addCh("js-chP","CHAPTER 4","Function, popup dan array di Javascript","js-ch4");
    addMateri("js-ch4","Function","Pelajari fungsi dalam Javascript","js-mat-10");
    addMateri("js-ch4","Popup","Pelajari apa itu Popup dalam Javascript","js-mat-11");
    addMateri("js-ch4","Array","Pelajari apa itu Array dalam Javascript","js-mat-12");
    
    
    
    addCh("cpp-chP", "CHAPTER 1", "Instalasi dan Persiapan Lingkungan Pemrograman C++ di Visual Studio Code", "cpp-ch1");
addMateri("cpp-ch1", "Instalasi", "Pelajari cara menginstal C++", "cpp-mat-1");
addMateri("cpp-ch1", "Struktur dasar", "Pelajari bagaimana struktur dasar pemrograman C++", "cpp-mat-2");
addCh("cpp-chP", "CHAPTER 2", "Dasar pemrograman C++", "cpp-ch2");
addMateri("cpp-ch2", "Variabel dan tipe data", "Pelajari berbagai variabel dan tipe data di C++", "cpp-mat-3");
addMateri("cpp-ch2", "Operator", "Pelajari berbagai operator di C++", "cpp-mat-4");
addCh("cpp-chP", "CHAPTER 3", "Percabangan dan perulangan", "cpp-ch3");
addMateri("cpp-ch3", "Percabangan", "Pelajari apa itu percabangan pada C++", "cpp-mat-5");
addMateri("cpp-ch3", "Perulangan for", "Pelajari perulangan for pada C++", "cpp-mat-6");
addMateri("cpp-ch3", "Perulangan while", "Pelajari perulangan while pada C++", "cpp-mat-7");
addMateri("cpp-ch3", "Perulangan do while", "Pelajari perulangan do while pada C++", "cpp-mat-8");
addCh("cpp-chP", "CHAPTER 4", "Array, class dan object", "cpp-ch4");
addMateri("cpp-ch4", "Array", "Pelajari Array pada C++", "cpp-mat-9");
addMateri("cpp-ch4", "Class dan Object", "Pelajari class dan object pada C++", "cpp-mat-10");

    
    
    addCh("py-chP", "CHAPTER 1", "Sejarah awal dan instalasi python", "py-ch1");
    addMateri("py-ch1", "Sejarah python", "Pelajari bagaimana python dapat terbentuk", "py-mat-1");
    addMateri("py-ch1", "Instalasi python", "Pelajari cara menginstal python", "py-mat-2");
    addMateri("py-ch1", "Run python", "Pelajari cara menjalankan program python", "py-mat-3");
    
    addCh("py-chP", "CHAPTER 2", "Fundamental python", "py-ch2");
    addMateri("py-ch2", "Penulisan program dalam python", "Pelajari aturan penulisan code python", "py-mat-4");
    addMateri("py-ch2", "Variabel", "Pengenalan variabel pada python", "py-mat-5");
    addMateri("py-ch2", "Menampilkan output", "Pelajari bagaimana cara menampilkan output pada python", "py-mat-6");
    addMateri("py-ch2", "Program numerik", "Mengerjakan program dengan tipe data numerik", "py-mat-7");
    
    addCh("py-chP", "CHAPTER 3", "Operator dan fungsi", "py-ch3");
    addMateri("py-ch3", "Operator", "Pelajari operator apa itu python", "py-mat-8");
    addMateri("py-ch3", "Fungsi", "Membuat Fungsi pada Python", "py-mat-9");
    addMateri("py-ch3", "Fungsi dan argumen", "Memanggil Fungsi dan Mengenal Argumen", "py-mat-10");
    addMateri("py-ch3", "Variabel dalam Fungsi", "Pelajari variabel dalam fungsi di python", "py-mat-11");
    
    addCh("py-chP", "CHAPTER 4", "User input pada python", "py-ch4");
    addMateri("py-ch4", "Input", "Pelajari apa itu input pada python", "py-mat-12");
    addMateri("py-ch4", "String dan Numerik", "Pelajari hasil input pada python", "py-mat-13");
    addMateri("py-ch4", "Perulangan", "Pelajari perulangan ada python", "py-mat-14");
}










// #####-|-CHAPTER-SELECTION-|-#####

let chArr = [
document.getElementById("js-ch-list"),
document.getElementById("py-ch-list"),
document.getElementById("cpp-ch-list")
];

let selectCh = (trgt)=>{sessionStorage.setItem("ch-select",`${trgt}`);};

let doSelectCh = ()=>{
    let target = parseInt(sessionStorage.getItem("ch-select"));
    for(let i = 0; i < chArr.length; i++){
        if(i == target){
            chArr[i].style.display = "flex";
        }
    }
};

let chOnload = ()=>{
    doSelectCh();
    addChMat();
}







// #####-|-DATA-MATERI-|-#####

//#################################################################
// di dalam file dataMateri.js
//#################################################################










//#####-|-SET-MATERI-|-#####

let selectSoal = (target)=>{sessionStorage.setItem("soal-select",`${target}`);};

//id disini berupa id materi
let setMateri = (id)=>{
    const header = document.getElementById("materiHeader");
    const content = document.getElementById("materiContent");
    const matBtn = document.getElementById("materi-btn");
    let index;
    
    for(let i = 0; i < dataMateri.length; i++){
        if(dataMateri[i].id == id){
            index = i;
        }
    }
    
    
    let title = dataMateri[index].header.title;
    let subTitle = dataMateri[index].header.subTitle;
    let contentList = dataMateri[index].content;
    
    header.children[0].innerHTML = title;
    header.children[1].innerHTML = subTitle;
    
    matBtn.addEventListener("click", ()=>{selectSoal(id);});
    
    for(let i = 0; i < contentList.length; i++){
        let type = contentList[i].type;
        if(type == "p"){
            content.insertAdjacentHTML("beforeend",`
            <p class="txt-wth">${contentList[i].content}</p>
            `
            );
        }else if(type == "c"){
            let specialId = Math.floor(Math.random()*99999);
            content.insertAdjacentHTML("beforeend",
            `
            <div class="code-box">
              <h1 class="txt-wth">
                ${contentList[i].title}
              </h1>
              <div class="code" id="${specialId}"></div>
            </div>
            `
            );
            
            let code = document.getElementById(specialId);
            let codeList = contentList[i].content
            
            for(let i = 0; i < codeList.length; i++){
                code.insertAdjacentHTML("beforeend",
                `
                <p class="txt-wth">${codeList[i]}</p>
                `);
            }
        }else if(type == "t"){
            content.insertAdjacentHTML("beforeend",`<h1 class="txt-wth">${contentList[i].content}</h1>`);
        }
    }
}










//#####-|-MATERI-SELECTION-|-#####

let shortDM = [];


if(!localStorage.getItem('shortDM')){
    let temp = [];
    for(let i = 0; i < dataMateri.length; i++){
        let tempo = {
            'id' : dataMateri[i].id,
            'isVisited' : dataMateri[i].isVisited
        }
        temp.push(tempo);
    }
    localStorage.setItem('shortDM',JSON.stringify(temp));
    
}else{
    shortDM = JSON.parse(localStorage.getItem('shortDM'));
    //alert(JSON.stringify(shortDM));
}

//localStorage.clear();


let allProg = {
    js: 0,
    cpp: 0,
    py: 0
}

let nowProg = {
    js: 0,
    cpp: 0,
    py: 0
}


//set allProg nowprog
for(let i = 0; i < dataMateri.length; i++){
    if(dataMateri[i].type == 'JS'){
        allProg.js += 1;
        if(shortDM[i].isVisited == 1){
            nowProg.js += 1;
        }
    }else if(dataMateri[i].type == 'CPP'){
        allProg.cpp += 1;
        if(shortDM[i].isVisited == 1){
            nowProg.cpp += 1;
        }
    }else if(dataMateri[i].type == 'PY'){
        allProg.py += 1;
        if(shortDM[i].isVisited == 1){
            nowProg.py += 1;
        }
    }
}


//alert(allProg.js + ' | ' + nowProg.js);

//set progbar
let progBar = {
    py: document.getElementById('py-prog-bar'),
    js: document.getElementById('js-prog-bar'),
    cpp: document.getElementById('cpp-prog-bar')
}

//alert(progBar.js);

let setBar = (type)=>{
    let perc;
    
    if(nowProg[type] == 0 && allProg[type] == 0){
        perc = 0;
    }else{
        perc = Math.round((nowProg[type]*100)/allProg[type]);
    }
    
    progBar[type].children[0].innerHTML = `${perc}% completed`;
    progBar[type].children[1].style.width = `${perc}%`;
    return perc;
}

if(progBar.js != null || progBar.py != null || progBar.cpp != null){
    setBar('js');
    setBar('cpp');
    setBar('py');
}


let setNextPref = (id)=>{
    let prevBtn = document.getElementById('prev-materi-btn');
    let nextBtn = document.getElementById('next-materi-btn');
    
    let index;
    for(let i = 0; i < dataMateri.length; i++){
        if(dataMateri[i].id == id){
            index = i;
        }
    }
    
    //prev btn
    if(dataMateri[index-1].type == dataMateri[index].type){
        prevBtn.addEventListener('click', ()=>{
            selectMat(`${dataMateri[index-1].id}`);
            window.location.href = "materi.html";
        });
    }else{
        prevBtn.style.display = 'none';
        prevBtn.style.width = '50%';
        nextBtn.style.width = '50%';
    }
    
    //next btn
    if(shortDM[index].isVisited == 0){
        nextBtn.innerHTML = 'selesai';
        nextBtn.addEventListener('click', ()=>{
            shortDM[index].isVisited = 1;
            localStorage.setItem('shortDM',JSON.stringify(shortDM));
            selectMat(`${dataMateri[index+1].id}`);
            window.location.href = "materi.html";
        });
    }else{
        nextBtn.innerHTML = 'next';
        nextBtn.addEventListener('click', ()=>{
            selectMat(`${dataMateri[index+1].id}`);
            window.location.href = "materi.html";
        });
    }
}

let selectMat = (target)=>{sessionStorage.setItem("mat-select",`${target}`);};


let doSelectMat = ()=>{
    let target = sessionStorage.getItem("mat-select");
    setMateri(target);
    setNextPref(target);
}










// #####-|-OPSI-SOAL-|-#####

let uc = null;

let optionSelect = ()=>{
    let optionList = document.getElementById("option-parent").children;
    
    for(let i = 0; i < optionList.length; i++){
        optionList[i].addEventListener("click", ()=>{
            optionList[i].children[0].classList.toggle("selected");
            if(uc == i){
                uc = null;
            }else{
                uc = i;
            }
            for(let x = 0; x < optionList.length; x++){
                if(x != i){
                    optionList[x].children[0].classList.remove("selected");
                }
            }
        });
    }
}










//#####-|-DATA-SOAL-|-#####

//#################################################################
// di dalam file dataSoal.js
//#################################################################










//#####-|-SET-SOAL-|-SET-HASIL-|-KOREKSI-|-#####

let nowIndex = 0;
let index;

let setSoal = (id, nowIndex)=>{
    let pertanyaan = document.getElementById("pertanyaan");
    let title = document.getElementById("soal-title");
    let optionList = document.getElementById("option-parent").children;
    
    for(let i = 0; i < dataSoal.length; i++){
        if(dataSoal[i].id == id){
            index = i;
        }
    }
    
    title.innerHTML = dataSoal[index].title;
    pertanyaan.innerHTML = dataSoal[index].soal[nowIndex].pertanyaan;
    for(let i = 0; i < optionList.length; i++){
        optionList[i].children[1].innerHTML = dataSoal[index].soal[nowIndex].pilihan[i];
    }
};

let setHasil = (cond)=>{
    let hasil = document.getElementById("hasil");
    hasil.style.display = "flex";
    if(cond == "benar"){
        hasil.style.marginTop = '0';
        hasil.style.backgroundColor = "forestgreen";
        hasil.children[0].innerHTML = "Jawaban Kamu Benar!";
        setTimeout(()=>{
            hasil.style.marginTop = '600px';
        },1250);
    }else if(cond == "salah"){
        hasil.style.marginTop = '0';
        hasil.style.backgroundColor = "red";
        hasil.children[0].innerHTML = "Jawaban Kamu Kurang Tepat!";
        setTimeout(()=>{
            hasil.style.marginTop = '600px';
        },1250);
    }else if(cond == "kosong"){
        hasil.style.marginTop = '0';
        hasil.style.backgroundColor = "orange";
        hasil.children[0].innerHTML = "Kamu belum memilih jawaban";
        setTimeout(()=>{
            hasil.style.marginTop = '600px';
        },1250);
    }else if(cond == "selesai"){
        hasil.style.marginTop = '0';
        hasil.style.backgroundColor = "var(--nn-blue)";
        hasil.children[0].style.color = "var(--bg-blue)";
        hasil.children[0].innerHTML = "kamu menyelesaikan Exercise";
        let soalBtn = document.getElementById('soalBtn');
        soalBtn.innerHTML = 'SELESAI';
        soalBtn.addEventListener('click', ()=>{
            history.back();
        });
    }
}

let koreksiSoal = ()=>{
    let optionList = document.getElementById("option-parent").children;
    let jawaban = dataSoal[index].soal[nowIndex].jawaban;
    
    if(jawaban == uc){
        if(dataSoal[index].soal[nowIndex].isLast){
            setHasil("selesai");
        }else{
            uc = null;
            for(let x = 0; x < optionList.length; x++){
                optionList[x].children[0].classList.remove("selected");
            }
            setHasil("benar");
            nowIndex += 1;
            let target = sessionStorage.getItem("soal-select");
            setSoal(target, nowIndex);
        }
    }else if(uc == null){
        setHasil('kosong');
    }else if(jawaban != uc){
        setHasil("salah");
    }
}










//#####-|-SOAL-SELECTION-|-#####

//select soal di line 209

let doSelectSoal = ()=>{
    let target = sessionStorage.getItem("soal-select");
    optionSelect();
    setSoal(target, nowIndex);
}









//#####-|-INVENTOR-SELECTION-|-#####

let invArr = [
document.getElementById("brendan-inv"),
document.getElementById("bjarne-inv"),
document.getElementById("guido-inv")
];

let selectInv = (trgt)=>{sessionStorage.setItem("inv-select",`${trgt}`);};

let doSelectInv = ()=>{
    let target = sessionStorage.getItem("inv-select");
    for(let i = 0; i < invArr.length; i++){
        if(i == target){
            invArr[i].style.display = "flex";
        }
    }
};