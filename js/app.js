let servicesInfo=[
    {
        "imgUrl": "https://img.icons8.com/nolan/64/web.png",
        "heading": "Web Development",
        "description": "Our Developers offer full fledged support for the website you imagine, brought to life. We give you top quality performance in prices so affordable you can't believe",
        "linkText": "Get your own Website now →", 
        "id": "web"


    },
    {
        "imgUrl": "https://img.icons8.com/nolan/64/adobe-illustrator.png",
        "heading": "Designing",
        "description" : "We help you deal with talented designers whether it be graphics or UI/UX designs. Make your project stand out and power up your brand, with our effective and quality services.",
        "linkText": "Get an awesome design →",
        "id": "design"

    },
    {
        "imgUrl": "https://img.icons8.com/nolan/64/pen.png",
        "heading": "Content Writing",
        "description" : "Content that moves people, Yes please. We make content that makes you stand out and presence known.Discuss your next project for the best engaging writings.",
        "linkText": "Get Content Writer →",
        "id": "cntwrt"

    }
]


let scards = document.getElementById("scards")

function displayCard(){
    servicesInfo.forEach(item=> {
scards.innerHTML += `<div class="col "  data-aos="fade-up" >
<div class="card" id=${item.id}  >
<img src=${item.imgUrl} loading="lazy" alt=${item.heading} />
<h4> ${item.heading} </h4>
<p> ${item.description} </p>
<a href="#contactus" class="nav-link p-0 m-0"><h6>${item.linkText}</h6></a>
</div>
</div>`
    })
}

displayCard()