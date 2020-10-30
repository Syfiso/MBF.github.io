console.clear();

const app = (() => {
    let body;
    let menu;
    let menuItems;

    const init = () => {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.nav__list-item');

        applyListeners();
    };

    const applyListeners = () => {
        menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
    };

    const toggleClass = (element, stringClass) => {
        if (element.classList.contains(stringClass))
            element.classList.remove(stringClass);
        else element.classList.add(stringClass);
    };

    init();
})();

let mainPosts = document.querySelectorAll('.main-post');
let posts = document.querySelectorAll('.post');

let i = 0;
let postIndex = 0;
let currentPost = posts[postIndex];
let currentMainPost = mainPosts[postIndex];

let progressInterval = setInterval(progress, 100); // 180

function progress() {
    if (i === 100) {
        i = -5;
        // reset progress bar
        currentPost.querySelector('.progress-bar__fill').style.width = 0;
        document.querySelector(
            '.progress-bar--primary .progress-bar__fill'
        ).style.width = 0;
        currentPost.classList.remove('post--active');

        postIndex++;

        currentMainPost.classList.add('main-post--not-active');
        currentMainPost.classList.remove('main-post--active');

        // reset postIndex to loop over the slides again
        if (postIndex === posts.length) {
            postIndex = 0;
        }

        currentPost = posts[postIndex];
        currentMainPost = mainPosts[postIndex];
    } else {
        i++;
        currentPost.querySelector('.progress-bar__fill').style.width = `${i}%`;
        document.querySelector(
            '.progress-bar--primary .progress-bar__fill'
        ).style.width = `${i}%`;
        currentPost.classList.add('post--active');

        currentMainPost.classList.add('main-post--active');
        currentMainPost.classList.remove('main-post--not-active');
    }
}

$('.counter').counterUp({
    delay: 5,
    time: 3000
});

$(".countdown")
    .countdown("2022/01/01", function(event) {
        $(this).html(
            event.strftime('<div>%w <span>Weeks</span></div>  <div>%D <span>Days</span></div>  <div>%H<span>Hours</span></div> <div>%M<span>Minutes</span></div> <div>%S<span>Seconds</span></div>')
        );
    });