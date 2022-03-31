function article(num){
    const content = document.getElementById("content")
    content.innerHTML = '<h1>'+ articles[num]["header"] +'</h1> <p>'+ articles[num]["bread"] +'</p>'

    const picture = document.getElementById("picture")
    console.log(picture)
    
    picture.style.backgroundImage="url("+ articles[num]["img"]+")"
    picture.style.backgroundRepeat=articles[num]["img-style"]["background-repeat"]
    picture.style.backgroundPosition=articles[num]["img-style"]["background-position"]
    picture.style.backgroundSize=articles[num]["img-style"]["background-size"]
}

var articles = { 
    1:{ 
        "header": "Article Headline",
        "bread": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione delectus quaerat, veritatis commodi laudantium tempora voluptatem temporibus praesentium. Dolorum sint eos enim labore provident, aperiam rem explicabo quis harum molestias? Dolorum incidunt odit explicabo id enim ipsum est facere laboriosam beatae delectus animi dolor, fugiat nesciunt perferendis minima dicta unde tempore accusamus magni molestiae eveniet repellat fugit. Sint, quia nemo?",
        "img": "hunting1.jpg",
        "img-style": {
                "background-repeat": "no-repeat",
                "background-position": "center left",
                "background-size": "cover"
            }
    },
    2:{
        "header":"Article Headline",
        "bread":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis officia ex vitae earum sed, dignissimos sit facilis ut aliquam illum labore consectetur commodi recusandae inventore id. Earum, nisi nemo.Maxime eveniet cupiditate accusantium cum fuga excepturi doloremque aperiam distinctio voluptatum. Soluta distinctio tempora odit eaque obcaecati cum consectetur recusandae, optio omnis commodi, modi sapiente aliquid laboriosam non expedita laudantium! Molestias vitae repellat explicabo repellendus est earum labore sint eligendi architecto quidem? Officia ipsa quidem reprehenderit quisquam error voluptatibus dolor voluptates assumenda culpa. Porro est amet nam eius deserunt sapiente.",
        "img":"hunting2.jpg",
        "img-style": {
            "background-repeat": "no-repeat",
            "background-position": "30% center",
            "background-size": "cover"
        }
    },
    3:{
        "header":"Article Headline",
        "bread":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit deserunt perferendis dolorum, consequatur laborum recusandae, quidem minima architecto amet est? Dolor quae fugit odit magnam eveniet, saepe asperiores suscipit.",
        "img":"hunting3.jpg",
        "img-style": {
            "background-repeat": "no-repeat",
            "background-position": "30% center",
            "background-size": "cover"
        }
    },
    4:{
        "header":"Article Headline",
        "bread":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem accusantium natus earum, fugiat perferendis ab asperiores odit non dolores consequatur voluptate. Atque eum accusamus possimus facilis optio dolores deleniti?Sit autem debitis expedita quam at reiciendis sunt veniam animi possimus numquam, iste quis explicabo laborum maxime impedit voluptatibus recusandae eos dolore doloremque laudantium veritatis a quidem optio voluptatem. Impedit. Blanditiis temporibus animi natus eius laudantium expedita itaque et magnam velit a dicta in quia recusandae dolore perspiciatis fuga eos, architecto, commodi hic sequi consequatur, omnis voluptas neque. Debitis, eius. Autem a expedita dolore est iure ad vitae deserunt laudantium et? Recusandae ipsum laboriosam eum vitae velit omnis expedita quibusdam. Incidunt, aspernatur sed eaque voluptatibus similique distinctio sequi tenetur blanditiis! Sapiente in deleniti nostrum blanditiis quasi cupiditate odit rerum quam sed cum aliquam, doloribus nemo illo nesciunt debitis fugiat laudantium nihil nisi commodi expedita? Modi eaque totam minima est delectus!",
        "img":"hunting4.jpg",
        "img-style": {
            "background-repeat": "no-repeat",
            "background-position": "60% center",
            "background-size": "cover"
        }
    }
    
}

document.addEventListener("DOMContentLoaded", function(){
    article(1)
})
