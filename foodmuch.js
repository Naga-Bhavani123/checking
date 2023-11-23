//for nav bar
let item = document.getElementById("embargor");
let links = document.getElementById("links");


item.addEventListener("click", (event) => {
    event.target.classList.toggle("fa-bars");
    event.target.classList.toggle("fa-times");
    links.classList.toggle("hide");

})
//navbar embergaer icon ended.............................................

let section2 = document.getElementById("section"); //section2 element
let Home = document.getElementById("home");

// for view menu..............................................................................

function adding_item_into_cart(foodItem) {
    itemsInCart.push(foodItem);
    console.log(itemsInCart)
    let parsed = JSON.stringify(itemsInCart);
    localStorage.setItem("itemsInCart", parsed);
    superText.textContent = itemsInCart.length;
}


let menu = {
    non_veg_staters: [{
            image: "https://img.freepik.com/free-photo/side-view-deep-fried-fish-fillet-with-red-onion-sauce-slice-lemon-plate_141793-4876.jpg?w=1060&t=st=1698071572~exp=1698072172~hmac=9c1d885555003fd9e442d7a7917a2f6638d4fceb8eaae068839143cba9f577cd",
            discount: 20,
            hotelName: "Hilton Restaurant",
            name: "Deep fried fish fillet with red onion sauce and slice of lemon on a plate",
            cost: 260,
            code: 1
        }, {
            image: "https://img.freepik.com/free-photo/meat-dish-with-vegetables_144627-18115.jpg?w=1060&t=st=1698072176~exp=1698072776~hmac=581467b66fd11134211662cd53c52754b29f63c92020bdf33c0c01941a510624",
            discount: 15,
            hotelName: "Grand Restaurant",
            name: "Meat dish with vegetables",
            cost: 250,
            code: 2
        },
        {
            image: "https://img.freepik.com/free-photo/chicken-bbq_1203-8932.jpg?w=1060&t=st=1698072332~exp=1698072932~hmac=dba2596de318e64678c9f80324f41cf7de403f55e543d5a195dd45b6d6a9fa32",
            discount: 15,
            hotelName: "Mughlai Dastarkhwan Multi Cuisine Restaurant",
            name: "Chicken bbq",
            cost: 150,
            code: 3
        }, {
            image: "https://img.freepik.com/free-photo/lamb-kebab-lavash-onion-greens-tomato-lettuce-pepper-top-view_141793-3151.jpg?w=826&t=st=1698072481~exp=1698073081~hmac=cb4e18c7f261ed10f83d5ab5910d342009964ce8b86619fdf870fddc0bdd05db",
            discount: 5,
            hotelName: "Silver Salt",
            name: "Lamb kebab on lavash onion greens tomato lettuce pepper top view",
            cost: 300,
            code: 4
        },
        {
            image: "https://img.freepik.com/premium-photo/tunde-ke-kabab-also-known-as-buffalo-chicken-meat-galouti-kebab-is-soft-dish-made-out-minced-meat-which-is-popular-india_466689-79399.jpg?w=1060",
            discount: 10,
            hotelName: "Kritunga",
            name: "Chicken or meat galouti kebab, is a soft dish made out of minced meat which is popular in india",
            cost: 300,
            code: 5
        }
    ],
    veg_staters: [{
            image: "https://img.freepik.com/premium-photo/paneer-tikka-kabab-red-sauce-is-indian-dish-made-from-chunks-cottage-cheese_466689-67096.jpg?w=1060",
            discount: 10,
            hotelName: "Kinara Grand",
            name: "Paneer tikka kabab in red sauce is an indian dish made from chunks of cottage cheese",
            cost: 200,
            code: 6
        }, {
            image: "https://img.freepik.com/premium-photo/papri-papdi-chat-also-known-as-sev-batata-puri-popular-indian-snacks-street-food-selective-focus_466689-20381.jpg?w=360",
            discount: 15,
            hotelName: "Blue Fox",
            name: "Papri or papdi chat also known as sev batata puri - popular indian snacks or street food, selective focus",
            cost: 150,
            code: 7
        },
        {
            image: "https://img.freepik.com/free-photo/top-view-tasty-bell-peppers-delicious-cooked-meal-with-meat-greens-seasonings-dark-surface-dish-dinner-meal-food_140725-118336.jpg?w=1060&t=st=1698073019~exp=1698073619~hmac=2a8a18b99cf12ed61d2e730926cad91c160a0b8cc395e1b544b13359a29bbdbf",
            discount: 30,
            hotelName: "Tasty Foods",
            name: "Tasty bell-peppers delicious cooked meal with meat greens and seasonings on the dark surface dish dinner meal food",
            cost: 150,
            code: 8
        }, {
            image: "https://img.freepik.com/free-photo/top-view-delicious-mushrooms-meal-with-fresh-greens-tomatoes-dark-floor-dish-dinner-meal-cooking-mushroom_140725-117826.jpg?w=1060&t=st=1698073132~exp=1698073732~hmac=a7e6dfaa6df1b3eb672a708b9c728b10b8b2abebcd620bbcb8607ba2d9de6594",
            discount: 5,
            hotelName: "Silver Salt",
            name: "Delicious mushrooms meal with fresh greens and tomatoes on dark floor dish dinner meal cooking mushroom",
            cost: 200,
            code: 9
        },
        {
            image: "https://img.freepik.com/free-photo/baked-eggplant-with-tomatoes-garlic-paprika_2829-8506.jpg?w=1060&t=st=1698073208~exp=1698073808~hmac=a3663dcb640848603c1ee8fcb022c8f85edf9f35b354dceac675f215d289ef59",
            discount: 10,
            hotelName: "Sri Ruchi Restaurant",
            name: "Baked eggplant with tomatoes, garlic and paprika",
            cost: 130,
            code: 10
        },
        {
            image: "https://img.freepik.com/free-photo/top-view-baked-potatoes-with-minced-meat-greens-inside-plate-with-bread-dark-blue-desk_140725-49973.jpg?w=1060&t=st=1698073303~exp=1698073903~hmac=233fafcfc41667b48dee1b4e9bc8eb15c1c037cb9792c36caa596e49e331b6f5",
            discount: 10,
            hotelName: "The Grand Plaza Hotel",
            name: "Baked potatoes with greens inside plate with bread on dark-blue desk.",
            cost: 130,
            code: 11
        }
    ],
    soups: [{
            image: "https://img.freepik.com/free-photo/tomato-soup-with-green-table_140725-2447.jpg?w=996&t=st=1698073440~exp=1698074040~hmac=1e88be6e18ed77790e349ed4d2bfe71620e07304d52707d5d3a4bf37ad116b48",
            discount: 10,
            hotelName: "Ohri's Ming's Court",
            name: "Tomato soup with green on the table",
            cost: 120,
            code: 12
        }, {
            image: "https://img.freepik.com/free-photo/lentil-soup-with-mixed-ingredients-herbs-white-bowl-with-spoon_114579-3083.jpg?w=1060&t=st=1698073543~exp=1698074143~hmac=00595c30582636ca07a5aaa212f1124b7ae7afbbbaf32c55bedf3bde1e80cf33",
            discount: 15,
            hotelName: "Blue Fox",
            name: "Lentil soup with mixed ingredients and herbs in a white bowl with a spoon.",
            cost: 150,
            code: 13
        },
        {
            image: "https://img.freepik.com/free-photo/meat-soup-with-vegetables-served-with-onion-barberry-herbs_140725-7983.jpg?w=740&t=st=1698073587~exp=1698074187~hmac=38bcced8d517fcafac5d4ecbd0b14951d11f9eb1f80004410c3fa4db44703dac",
            discount: 30,
            hotelName: "",
            name: "Meat soup with vegetables served with onion barberry and herbs",
            cost: 150,
            code: 14
        }, {
            image: "https://img.freepik.com/free-photo/bean-paste-soup-korean-style_1150-42954.jpg?w=360&t=st=1698073648~exp=1698074248~hmac=8dff8940ec5248d8ce22cbdde1323cc3033d1c9b337875699ef91f7082751000",
            discount: 5,
            hotelName: "Silver Salt",
            name: "Bean paste soup in korean style",
            cost: 200,
            code: 15
        },
        {
            image: "https://img.freepik.com/free-photo/minestrone-soup-table_140725-7401.jpg?w=740&t=st=1698073715~exp=1698074315~hmac=a837713168fc7ac034a7957f68d643002f0c14c4e01c4e5fc705cb2119b7bda6",
            discount: 10,
            hotelName: "Sri Ruchi Restaurant",
            name: "Minestrone soup",
            cost: 230,
            code: 16
        },
        {
            image: "https://img.freepik.com/free-photo/miso-soup-with-mushrooms-table_140725-5328.jpg?w=826&t=st=1698073770~exp=1698074370~hmac=6c411434d07ac4b5ffac544cb018156c8f8ed301acf7685a8174ef75d08c4da1",
            discount: 10,
            hotelName: "The Grand Plaza Hotel",
            name: "Miso soup with mushrooms on the table",
            cost: 130,
            code: 17
        }
    ],
    sea_food: [{
            image: "https://img.freepik.com/free-photo/fried-shrimp-squid-with-spicy-sauce_1150-35475.jpg?w=1060&t=st=1698073855~exp=1698074455~hmac=f4e468d3ca84e96636cba2e1da1654f0a809769288835d4952adc67d8506cdd1",
            discount: 10,
            hotelName: "Angeethi Asli Dhaba",
            name: "Fried shrimp and squid with spicy sauce",
            cost: 220,
            code: 18
        }, {
            image: "https://img.freepik.com/free-photo/side-view-fried-shrimps-sauce-with-tomatoes-herbs_141793-4920.jpg?w=1060&t=st=1698074005~exp=1698074605~hmac=5b6f15d531514baca9f204605b9342e5579682f7980d99f7bececd470de4d916",
            discount: 15,
            hotelName: "Mehfil",
            name: "Fried shrimps in sauce with tomatoes and herbs",
            cost: 150,
            code: 19
        },
        {
            image: "https://img.freepik.com/free-photo/grilled-fish-onion-tomato-calamary-green-salad-top-view_141793-3742.jpg?w=1060&t=st=1698074093~exp=1698074693~hmac=f58a1aadc6e2254498c1be21b1834062ec46a2f41637e7c936de50fb8c044d8f",
            discount: 30,
            hotelName: "Blue Diamond",
            name: "Grilled fish onion tomato calamary green salad top view",
            cost: 150,
            code: 20
        }, {
            image: "https://img.freepik.com/free-photo/delicious-oysters-with-lemon_23-2150301987.jpg?t=st=1698074217~exp=1698077817~hmac=772f14fdadabd92a6977f8304252c568a49c3933efae851242cc31e36ebcf6b9&w=360",
            discount: 5,
            hotelName: "Silver Salt",
            name: "Delicious oysters with lemon",
            cost: 250,
            code: 21
        }
    ],
    main_course: [{
            image: "https://img.freepik.com/free-photo/grilled-seafood-paella-gourmet-healthy-meal-generated-by-ai_188544-39253.jpg?t=st=1698074336~exp=1698077936~hmac=2cfd5158b462f7e3051e3ff5c8e16cca0604cd813b676683e442587d431d216c&w=1380",
            discount: 10,
            hotelName: "Hotel Sohail",
            name: "Grilled seafood paella a gourmet healthy meal",
            cost: 420,
            code: 22
        }, {
            image: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1698074470~exp=1698078070~hmac=8c6f43ded6a9bfdf0a82ea20007dacc2856648c51c990a1f21e13330552e0952&w=1380",
            discount: 15,
            hotelName: "Blue Fox",
            name: "Gourmet chicken biryani with steamed basmati rice",
            cost: 150,
            code: 23
        },
        {
            image: "https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?w=1060&t=st=1698074522~exp=1698075122~hmac=4a9656c52c14d2bd2259f107e78af79bf34114e570fb635ae2156e8c08a0597c",
            discount: 15,
            hotelName: "Rayalaseema Ruchulu",
            name: "Stewed beef meat on a plate",
            cost: 350,
            code: 24
        }, {
            image: "https://img.freepik.com/free-photo/close-up-view-rice-with-pea-corn-topped-with-cherry-tomato_140725-11803.jpg?w=360&t=st=1698074667~exp=1698075267~hmac=e166de97ab2c70f1e6b16ec52427f5c6b5c4608e6a5a4c19c4be65d7ccae6cf7",
            discount: 5,
            hotelName: "Silver Salt",
            name: "Rice with pea and corn topped with cherry tomato",
            cost: 200,
            code: 25
        },
        {
            image: "https://img.freepik.com/free-photo/top-view-rice-with-carrot-cooked-with-lamb-served-with-yogurt-salad_141793-2449.jpg?w=1060&t=st=1698074759~exp=1698075359~hmac=005e49eba7dc615a20316067a6f6e593d107c0c1da510f532ed2400b39afaf83",
            discount: 10,
            hotelName: "Sri Ruchi Restaurant",
            name: "Rice with carrot cooked with lamb served with yogurt and salad",
            cost: 300,
            code: 26
        },
        {
            image: "https://img.freepik.com/free-photo/indian-traditional-dish-with-rice-lemon-tomato-coriander-leaf-cutlery-wooden-tray_613910-21740.jpg?w=1060&t=st=1698074817~exp=1698075417~hmac=057142984793e700355e0b32b3b11e9839ee4fbba45b99207b7393a965ad6446",
            discount: 10,
            hotelName: "The Grand Plaza Hotel",
            name: "Indian traditional dish with rice, lemon, tomato coriander leaf and cutlery on wooden tray.",
            cost: 430,
            code: 27
        }
    ],
    noodels: [{
            image: "https://img.freepik.com/free-photo/stir-fried-pork-vegetables-plate-with-chopsticks-generated-by-ai_188544-55572.jpg?t=st=1698072583~exp=1698076183~hmac=78a66ea8b35c701705da8ec3edab45161e2ecf996624195e2b4cad3100f68c10&w=1380",
            discount: 10,
            hotelName: "Angeethi Asli Dhaba",
            name: "Stir fried pork and vegetables on a plate with chopsticks",
            cost: 220,
            code: 28
        }, {
            image: "https://img.freepik.com/free-photo/fried-noodles-plate_1339-2157.jpg?w=1060&t=st=1698074948~exp=1698075548~hmac=9891a0e37c779b334caf01e158d629247fe21a88a1b5feb6d8f2d1a4fc0310de",
            discount: 15,
            hotelName: "Mehfil",
            name: "Fried noodles",
            cost: 150,
            code: 29
        },
        {
            image: "https://img.freepik.com/free-photo/gourmet-ramen-noodles-steaming-bowl-generated-by-ai_188544-22769.jpg?t=st=1698075001~exp=1698078601~hmac=b62fe4acec6d2607c5ea3aa3ec4ff06162ee0e292aa020d9b8dc1a6bddaba67a&w=1380",
            discount: 30,
            hotelName: "Blue Diamond",
            name: "Gourmet ramen noodles in a steaming bowl generated by AI",
            cost: 280,
            code: 30
        }, {
            image: "https://img.freepik.com/free-photo/spaghetti-black-cup-with-tomatoes-lettuce_1150-23167.jpg?w=360&t=st=1698075159~exp=1698075759~hmac=475d1edfec2fd24a49e8d177e3c6db3b2f7896c18d8ecd1871763e0df7803948",
            discount: 5,
            hotelName: "Silver Salt",
            name: "Spaghetti in a black cup with tomatoes and lettuce.",
            cost: 250,
            code: 31
        }
    ],
    salads: [{
            image: "https://img.freepik.com/free-photo/top-view-fresh-vegetables-white-flower-wooden-hammer-delicious-vegan-salad-dark-color-background_179666-47261.jpg?w=1060&t=st=1698075263~exp=1698075863~hmac=0a736829d9d9aaad9f7c0c64daa9d4997a95d6e661b1c9c530223fe15354fd97",
            discount: 10,
            hotelName: "Angeethi Asli Dhaba",
            name: "Fresh vegetables white flower wooden hammer and delicious vegan salad on dark color background",
            cost: 220,
            code: 32
        }, {
            image: "https://img.freepik.com/free-photo/vegetable-roka-salad-with-feta-white-cheese-green-salad-tomatoes-olives_114579-793.jpg?w=740&t=st=1698075597~exp=1698076197~hmac=734acc7a20e906c3c3446ebf49c4e024ce3a28f40d54f12c6c049fdd8bdba190",
            discount: 15,
            hotelName: "Mehfil",
            name: "Vegetable roka salad with feta white cheese, green salad, tomatoes and olives.",
            cost: 150,
            code: 33
        },
        {
            image: "https://img.freepik.com/free-photo/fresh-chicken-salad-grapefruit-lettuce-honey-mustard-dressing-dietary-menu-proper-nutrition-top-view_2829-19946.jpg?w=1060&t=st=1698075662~exp=1698076262~hmac=577640b758a49e27f3c5c18cf81c5766be771d156b3d61bb4cffd2a312e940ff",
            discount: 30,
            hotelName: "Blue Diamond",
            name: "Chicken salad, grapefruit, lettuce and honey mustard dressing. dietary menu. proper nutrition",
            cost: 280,
            code: 34
        }, {
            image: "https://img.freepik.com/free-photo/greek-salad-with-fresh-tomato-cucumber-red-onion-basil-feta-cheese-black-olives-italian-herbs_2829-4480.jpg?w=1060&t=st=1698075724~exp=1698076324~hmac=595bb267368751d90f61985af1aca6ae5b6090d0b2b32b987f8ab1ad7dcad208",
            discount: 5,
            hotelName: "Silver Salt",
            name: "Fresh tomato, cucumber, red onion, basil, feta cheese, black olives and italian herbs",
            cost: 250,
            code: 35
        }
    ],
    desserts: [{
            image: "https://img.freepik.com/free-photo/chocolate-brownie-cake-with-scoop-ice-cream_155003-433.jpg?w=740&t=st=1698075829~exp=1698076429~hmac=8706399ebad251b38c132149a700ae47a5ce91d864953867a57e4abdf48b205c",
            discount: 10,
            hotelName: "Angeethi Asli Dhaba",
            name: "Chocolate brownie cake with a scoop of ice cream.",
            cost: 220,
            code: 36
        }, {
            image: "https://img.freepik.com/free-photo/plate-with-chocolate-topping-ice-cream-cups_23-2148505921.jpg?w=900&t=st=1698075904~exp=1698076504~hmac=e24ae21df1b2e8f4e93fe928842f67f1a2c3a36b281c52770c65df15b706de32",
            discount: 15,
            hotelName: "Mehfil",
            name: "Chocolate topping for ice cream cups",
            cost: 150,
            code: 37
        },
        {
            image: "https://img.freepik.com/free-photo/slice-chocolate-brownie-with-walnut-vanilla-ice-cream_114579-778.jpg?w=740&t=st=1698075962~exp=1698076562~hmac=6cde2356e559189e6f25ad11ad8d1fca242d5f678933dbd60cb7d5da42918fb2",
            discount: 30,
            hotelName: "Blue Diamond",
            name: "Slice of chocolate brownie with walnut and vanilla ice cream.",
            cost: 280,
            code: 38
        }, {
            image: "https://img.freepik.com/free-photo/chocolate-ice-cream-dessert_144627-8363.jpg?w=1060&t=st=1698076024~exp=1698076624~hmac=930b5368d4ae0117c06559652ac87c7cb563e376d7e6359a3fb4b2b1769730f6",
            discount: 5,
            hotelName: "Silver Salt",
            name: "Chocolate ice cream dessert",
            cost: 250,
            code: 39
        }
    ]
}

function make_menu_cart(foodItem, container) {

    //each container 

    let cart = document.createElement("div");
    cart.setAttribute("id", foodItem.code);
    cart.classList.add("cart_section2", "shadow-lg");
    container.appendChild(cart);

    //image container in cart 

    let image = document.createElement("div");
    image.style.backgroundImage = `url(${foodItem.image})`;
    image.classList.add("cart_image");
    cart.appendChild(image);

    //discount

    let para = document.createElement("p");
    para.textContent = foodItem.discount + "% OFF";
    para.classList.add("discount");
    image.appendChild(para);

    //dicription
    let con_dicription = document.createElement("div");
    con_dicription.classList.add("con_dicription");
    cart.appendChild(con_dicription);

    let hotel_name = document.createElement("h1");
    hotel_name.classList.add("hotel_name");
    hotel_name.textContent = foodItem.hotelName;

    con_dicription.appendChild(hotel_name);

    let discription_cart = document.createElement("p");
    discription_cart.classList.add("cart_discription");
    discription_cart.textContent = foodItem.name;
    con_dicription.appendChild(discription_cart);

    let price = document.createElement("p");
    price.textContent = foodItem.cost + " Rs for one";
    price.classList.add("cart_discription");
    con_dicription.appendChild(price);

    let button_cart = document.createElement("button");
    button_cart.textContent = "Add";
    button_cart.classList.add("button_cart");
    con_dicription.appendChild(button_cart);
    button_cart.onclick = function() {
        adding_item_into_cart(foodItem);
    }
}

function onEachItem(item) {
    section2.textContent = "";
    Home.classList.add("hide");
    let heading_section = document.createElement("h1");
    heading_section.textContent = "Best From Menu";
    heading_section.classList.add("section2_heading");
    section2.appendChild(heading_section);
    let array_obj = item;
    let container = document.createElement("div");
    container.classList.add("section2_container");
    section2.appendChild(container);
    //console.log(array_obj);
    for (let obj of array_obj) {
        make_menu_cart(obj, container);
    }
}


//menu elemnets 

let nonVeg = document.getElementById("nonVeg");
let vegStarters = document.getElementById("vegStarters");
let Soups = document.getElementById("soups");
let fishSeaFood = document.getElementById("fishSeaFood");
let mainCourse = document.getElementById("mainCourse");
let Noodels = document.getElementById("Noodels");
let Salads = document.getElementById("Salads");
let Desserts = document.getElementById("Desserts");

//adding event listeners
nonVeg.addEventListener("click", (event) => {
    onEachItem(menu.non_veg_staters);

});
vegStarters.addEventListener("click", (event) => {
    onEachItem(menu.veg_staters);

})
Soups.addEventListener("click", (event) => {
    onEachItem(menu.soups);

})
fishSeaFood.addEventListener("click", (event) => {
    onEachItem(menu.sea_food)
})
mainCourse.addEventListener("click", (event) => {
    onEachItem(menu.main_course);
})
Noodels.addEventListener("click", (event) => {
    onEachItem(menu.noodels);
})
Salads.addEventListener("click", (event) => {
    onEachItem(menu.salads);
})
Desserts.addEventListener("click", (event) => {
    onEachItem(menu.desserts);
})

//showing menu completed.............................................................


//nav bar links start..........................................................................

let navHome = document.getElementById("navHome");
let navWhyChooseUs = document.getElementById("navWhyChooseUs");
let navExploreMenu = document.getElementById("navExploreMenu");
let navDeliveryPayment = document.getElementById("navDeliveryPayment");
let navFollowUs = document.getElementById("navFollowUs");

navHome.addEventListener("click", function() {
    Home.classList.remove("hide");
    section2.textContent = "";
})
navWhyChooseUs.onclick = function() {
    Home.classList.remove("hide");
    section2.textContent = "";
}
navExploreMenu.onclick = function() {
    Home.classList.remove("hide");
    section2.textContent = "";
}
navDeliveryPayment.onclick = function() {
    Home.classList.remove("hide");
    section2.textContent = "";
}
navFollowUs.onclick = function() {
    Home.classList.remove("hide");
    section2.textContent = "";
}

// nav Bar links ended.....................................................................


// cart elemnents.......................................................................
let superText = document.getElementById("superText")

function getItems() {
    let itemsInCart = localStorage.getItem("itemsInCart")
    if (itemsInCart === null) {
        return []
    } else {
        return JSON.parse(itemsInCart)
    }
}

let itemsInCart = getItems()

superText.textContent = itemsInCart.length
//console.log(itemsInCart.length)

function remove_item(foodItem, container) {
    let item = document.getElementById(`${foodItem.code}`);
    container.removeChild(item)
    let total = 0
    let index = itemsInCart.findIndex((obj) => {
        return obj.code === foodItem.code
    })
    itemsInCart.splice(index, 1);
    let parsed = JSON.stringify(itemsInCart);
    localStorage.setItem("itemsInCart", parsed);
    superText.textContent = itemsInCart.length;
    for (let i of itemsInCart) {
        total += i.cost
    }
    price_span.textContent = total

}

function make_cart_Items(foodItem, container) {


    //each container 

    let cart_bag = document.createElement("div");
    cart_bag.setAttribute("id", foodItem.code);
    cart_bag.classList.add("bag_cart_section2", "shadow-lg");
    container.appendChild(cart_bag);

    //image container in cart 

    let image_bag = document.createElement("div");
    image_bag.style.backgroundImage = "url(" + foodItem.image + ")";
    image_bag.classList.add("bag_cart_image");
    cart_bag.appendChild(image_bag);

    //discount

    let para_bag = document.createElement("p");
    para_bag.textContent = foodItem.discount + "% OFF";
    para_bag.classList.add("discount");
    image_bag.appendChild(para_bag);

    //dicription
    let con_dicription_bag = document.createElement("div");
    con_dicription_bag.classList.add("con_dicription")
    cart_bag.appendChild(con_dicription_bag);

    let hotel_name_bag = document.createElement("h1");
    hotel_name_bag.classList.add("hotel_bag_name");
    hotel_name_bag.textContent = foodItem.hotelName;
    con_dicription_bag.appendChild(hotel_name_bag);

    let discription_cart_bag = document.createElement("p");
    discription_cart_bag.classList.add("cart_discription");
    discription_cart_bag.textContent = foodItem.name;
    con_dicription_bag.appendChild(discription_cart_bag);

    let price_bag = document.createElement("p");
    price_bag.textContent = foodItem.cost + " Rs for one";
    price_bag.classList.add("cart_bag_discription");
    con_dicription_bag.appendChild(price_bag);

    let button_cart_bag = document.createElement("button");
    button_cart_bag.textContent = "Remove";
    button_cart_bag.classList.add("button_bag_cart");
    con_dicription_bag.appendChild(button_cart_bag);
    button_cart_bag.onclick = function() {
        remove_item(foodItem, container)
    }

}
let price_span = document.createElement("span");



function on_each_item_bag() {
    section2.textContent = "";
    Home.classList.add("hide");
    let heading_section = document.createElement("h1");
    heading_section.textContent = "Items In Cart";
    heading_section.classList.add("section2_heading");
    section2.appendChild(heading_section);
    let container = document.createElement("div");
    container.classList.add("ssection2_con_bag");
    section2.appendChild(container);
    //console.log(array_obj);
    let total = 0
    for (let obj of itemsInCart) {
        make_cart_Items(obj, container);
        console.log(itemsInCart)
        total += obj.cost

    }

    let price_con = document.createElement("div");
    price_con.classList.add("price_con")
    container.appendChild(price_con)
    let price = document.createElement("p")
    price.textContent = "Total: "
    price.classList.add("total_price")
    price_con.appendChild(price)
    price_span.textContent = total
    price_span.id = "price-span"
    price.appendChild(price_span)
    let button_price = document.createElement("button");
    button_price.textContent = "Check Out"
    button_price.classList.add("button_cart_price");
    price_con.appendChild(button_price)

}

let bag_container = document.getElementById("bag_container");

bag_container.onclick = function() {
    on_each_item_bag()
}


//Fresh food video.............................................................

let video = document.getElementById("freshVideo");

video.onclick = function() {
    Home.classList.add("hide")
    section2.textContent = ""
    let video_container = document.createElement("div")
    video_container.classList.add("embed-responsive", "embed-responsive-16by9")
    video_container.style.width = "100vw"
    video_container.style.height = "100vh"
    section2.appendChild(video_container)
    let iframe_element = document.createElement("iframe")
    iframe_element.classList.add("embed-responsive-item")
    iframe_element.src = "https://www.youtube.com/embed/PIc42oIU0Ik?rel=0"
    iframe_element.style.width = "100%"
    iframe_element.style.height = "100%"
    video_container.appendChild(iframe_element)
    iframe_element.allowfullscreen = true;
}