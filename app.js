const reviews = [
{
id: 1,
img:"https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg",
job:"Enviromentalist",
name:"Letitia Jameson",
text:"I am thrilled to recommend this software developer! They are a true asset to any team and bring a unique level of excitement and energy to their work. Their coding skills are top-notch, and they are always eager to take on new challenges and learn new technologies. They have a great attention to detail and they always aim to deliver high-quality work. I have had the pleasure of working with them on several projects, and I can confidently say that they have exceeded my expectations every time. I can't wait to see what they will achieve in the future!"
},
{
id: 2,
img:"https://images.pexels.com/photos/2668240/pexels-photo-2668240.jpeg",
job:"Doctor",
name:"Mina Inahowe",
text:"This software developer demonstrates exceptional abilities, consistently addressing and resolving issues while implementing new features with a high level of professionalism and attention to detail. Their coding skills are exceptional and they approach their work with patience and diligence. I highly recommend them."
},
{
id: 3,
img:"https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg",
job:"Student",
name:"Cindy Butterfield",
text:"This software developer is a true asset to any team, with a unique blend of technical expertise and problem-solving skills. They have a track record of delivering high-quality work, whether it's fixing bugs, adding new features, or optimizing performance. Their work is characterized by their professionalism, attention to detail, and ability to navigate complex projects with ease. I highly recommend them for any development project."
},
{
id: 4,
img:"https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg",
job:"Researcher",
name:"Amarachi Uzoloma",
text:"This software developer is a real go-getter, never one to shy away from a challenge. They have a knack for finding creative solutions to complex problems and a passion for delivering top-notch code. Their enthusiasm for their work is matched only by their attention to detail, making them a valuable asset to any team. I wholeheartedly recommend them for any project that requires a developer with a can-do attitude"
},
{
id: 5,
img:"https://images.pexels.com/photos/9872021/pexels-photo-9872021.jpeg",
job:"Artist",
name:"Coby Ranks",
text:"In my experience, the role of a software developer is not just about writing code, it's about solving problems and building solutions. This developer has a strong understanding of the craft, but I believe that they could benefit from a more philosophical approach to their work. They should be more curious about the why behind the what they are building, constantly questioning the status quo, and seeking to innovate. With a more philosophical mindset, they could be capable of creating truly exceptional software."
},
{
id: 6,
img:"https://images.pexels.com/photos/5213896/pexels-photo-5213896.png",
job:"Songwriter",
name:"Makelele Johnson",
text:"This software developer has room for improvement, particularly in the areas of problem solving and attention to detail. However, they have a good foundation in coding skills and a willingness to learn. With some guidance and more experience, they have the potential to become a valuable asset to any team."
},
{
id: 7,
img:"https://images.pexels.com/photos/4450376/pexels-photo-4450376.jpeg",
job:"Polictian",
name:"Queeneth Escatoria",
text:"I have had the opportunity to work with this software developer on several projects, and while they have some strong technical skills, I have also observed some areas of improvement. Their problem solving abilities and attention to detail have been inconsistent, and they have struggled to deliver projects on time. That being said, they have shown a willingness to learn and improve, and with more experience and guidance, they may be able to overcome these challenges. It's worth considering them, but with some reservations."
},
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const text = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentReview = 1;

function reviewController(index) {
    const item = reviews[index];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', function(){
    reviewController(currentReview);
});

nextBtn.addEventListener('click', function(){
    currentReview++;
    if (currentReview > reviews.length - 1){
        currentReview = 0;
    }
    reviewController(currentReview);
});

prevBtn.addEventListener('click', function(){
    currentReview--;
    if (currentReview < 0){
        currentReview = reviews.length - 1;
    }
    reviewController(currentReview);
});

function randomReview() {
    return Math.floor(Math.random() * reviews.length);
}

randomBtn.addEventListener('click', function(){
currentReview = randomReview();
reviewController(currentReview);
    console.log(randomReview());
});