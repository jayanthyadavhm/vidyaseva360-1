//========================= swiper section 

let swiper = new Swiper(".mySwiper",{
    slidesPerView:6,
    spaceBetween:5,
})


//=========================== window scroll 

window.addEventListener('scroll',()=>{
    document.querySelector('.proflie-popup').style.display='none'
    document.querySelector('.add-post-popup').style.display='none'
    document.querySelector('.theme-customize').style.display='none'
    document.querySelector('.notification-box').style.display='none'
    document.querySelector('.add-answer-popup').style.display='none';
    document.querySelector('.view-answer-popup').style.display='none';
    document.querySelector('.settings-popup').style.display='none';
})


//============================ popup section 


// profile popup 

document.querySelectorAll('#my-profile-picture').forEach(AllProfile =>{
    AllProfile.addEventListener('click',()=>{
        document.querySelector('.proflie-popup').style.display='flex';
    })
});


document.querySelectorAll('.close').forEach(AllCloser=>{
    AllCloser.addEventListener('click',()=>{
        document.querySelector('.proflie-popup').style.display='none';
        document.querySelector('.add-post-popup').style.display='none';
        document.querySelector('.theme-customize').style.display='none';
        document.querySelector('.add-answer-popup').style.display='none';
        document.querySelector('.view-answer-popup').style.display='none';
        document.querySelector('.settings-popup').style.display='none';
    })
});

document.querySelector('#profile-upload').addEventListener('change',()=>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg =>{
        AllMyProfileImg.src= URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
});


// view answer popup 


// add answer popup
document.querySelectorAll('#answer-pop').forEach(Allans=>{
    Allans.addEventListener('click',()=>{
        document.querySelector('.add-answer-popup').style.display='flex';
    })
});

document.querySelector('#answer-pic-upload').addEventListener('change',()=>{
    document.querySelector('#answerImg').src=URL.createObjectURL(document.querySelector('#answer-pic-upload').files[0]);
});

// add post popup
document.querySelector('#crate-lg').addEventListener('click',()=>{
    document.querySelector('.add-post-popup').style.display='flex';
});


document.querySelector('#feed-pic-upload').addEventListener('change',()=>{
    document.querySelector('#postImg').src=URL.createObjectURL(document.querySelector('#feed-pic-upload').files[0]);
})


//add story popup

document.querySelector('#add-story').addEventListener('change',()=>{
    document.querySelector('.story img').src = URL.createObjectURL(document.querySelector('#add-story').files[0]);
    document.querySelector('.add-story').style.display='none';
});

// highlight post input

document.querySelector('.mini-button').addEventListener('click',() => {
    document.querySelector('.input-post').classList.add('boxshadow1')
    setTimeout(() => {
        document.querySelector('.input-post').classList.remove('boxshadow1')
    }, 600);
});

// post likes 

document.querySelectorAll('.action-button span:first-child i').forEach(liked=>{
    liked.addEventListener('click',()=>{
        liked.classList.toggle('liked');
    })
});



let menuItem = document.querySelectorAll('.menu-item');

menuItem.forEach(item=>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');
        document.querySelector('.notification-box').style.display='none'
        document.querySelector('.middle-container').style.display='block';
        document.querySelector('.doubt-section').style.display='none';
        document.querySelector('.shopping-section').style.display='none';
    })
})

const removeActive =()=>{
    menuItem.forEach(item=>{
        item.classList.remove('active')
    })
}

document.querySelector('#notify-box').addEventListener('click',()=>{
    document.querySelector('.notification-box').style.display='block'
    document.querySelector('#ntCounter1').style.display='none'
})

document.querySelector('#doubt-section').addEventListener('click',()=>{
    document.querySelector('.middle-container').style.display='none';
    document.querySelector('.doubt-section').style.display='block';
})

document.querySelector('#message-menu').addEventListener('click',()=>{
    document.querySelector('#ntCounter2').style.display='none';
    document.querySelector('.messages').classList.add('boxshadow1')
    setTimeout(() => {
        document.querySelector('.messages').classList.remove('boxshadow1')
    }, 600);
})

//freind request

let accept = document.querySelectorAll('#accept');
let reject = document.querySelectorAll('#reject');

accept.forEach(accept=>{
    accept.addEventListener('click',()=>{
        accept.parentElement.style.display='none'
        accept.parentElement.parentElement.querySelector('.alert').style.display='block'
    })
});

reject.forEach(reject=>{
    reject.addEventListener('click',()=>{
        reject.parentElement.parentElement.style.display='none'
    })
});


// theme customization 


// color custom 

document.querySelector('#theme').addEventListener('click',()=>{
    document.querySelector('.theme-customize').style.display='flex'
})

const removeActiveColor = ()=>{
    colorpallete.forEach(color=>{
        color.classList.remove('active')
    })
}

let colorpallete = document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root');

colorpallete.forEach(color =>{
    color.addEventListener('click',()=>{
        let primaryhue;
        removeActiveColor();
        color.classList.add('active')
        if(color.classList.contains('color-1')){
            hue = 252;
        }else if(color.classList.contains('color-2')){
            hue = 52;
        }else if(color.classList.contains('color-3')){
            hue = 352;
        }else if(color.classList.contains('color-4')){
            hue = 152;
        }else if(color.classList.contains('color-5')){
            hue = 202;
        }
        root.style.setProperty('--primary-color-hue',hue) 
    })
})


// bg custom 

let bg1 = document.querySelector('.bg1');
let bg2 = document.querySelector('.bg2');


let lightColorLightTheme;
let whiteColorLightTheme;
let darkColorLightTheme;

const changBg = ()=>{
    root.style.setProperty('--color-dark-dark-theme',darkColorLightTheme);
    root.style.setProperty('--color-light-dark-theme',lightColorLightTheme);
    root.style.setProperty('--color-white-dark-theme',whiteColorLightTheme);
}

bg2.addEventListener('click',()=>{
    lightColorLightTheme = '5%';
    whiteColorLightTheme = '10%';
    darkColorLightTheme = '95%';
    // add active class 
    bg2.classList.add('active')
    bg1.classList.remove('active');
    changBg();
    bgicon();
});


bg1.addEventListener('click',()=>{
    // add active class 
    bg1.classList.add('active')
    bg2.classList.remove('active');

    window.location.reload()
});


// document.querySelector('#view-ans-pop').addEventListener('click',()=>{
//     document.querySelector('.view-answer-popup').style.display='flex';
// });


document.querySelectorAll('#view-ans-pop').forEach(Allview=>{
    Allview.addEventListener('click',()=>{
        document.querySelector('.view-answer-popup').style.display='flex';
    })
});


document.querySelector('#settings-aside').addEventListener('click',()=>{
    document.querySelector('.settings-popup').style.display='flex';
});

document.querySelector('#shop-btn').addEventListener('click',()=>{
    document.querySelector('.middle-container').style.display='none';
    document.querySelector('.doubt-section').style.display='none';
    document.querySelector('.shopping-section').style.display='block';
});


document.querySelector('.bg2').addEventListener('click',()=>{
    document.querySelector('.menu-item-1 i').style.color='white';
    document.querySelector('.menu-item-2 i').style.color='white';
    document.querySelector('.menu-item-3 i').style.color='white';
    document.querySelector('.menu-item-4 i').style.color='white';
    document.querySelector('.menu-item-5 i').style.color='white';
    document.querySelector('.menu-item-6 i').style.color='white';
    document.querySelector('.menu-item-7 i').style.color='white';
});

