const hamburger = document.querySelector('.hamburger_img');
const closeHamburgerBtn = document.querySelector('.close_hamburger');
const modalMenuContainer = document.querySelector('.modal_menu_container');
const menuOption = document.querySelectorAll('.menu_option');

const toggleMobileMenu = (e) => {
  e.preventDefault();
  modalMenuContainer.classList.toggle('hide1');
};

hamburger.addEventListener('click', toggleMobileMenu);
closeHamburgerBtn.addEventListener('click', toggleMobileMenu);

menuOption.forEach((e) => {
  e.onclick = () => {
    modalMenuContainer.classList.toggle('hide1');
  };
});

const speakersData = [
    {
      id: 0,
      name: "Yohai Benkler",
      translatedName:"Yochai Benkler",
      institution:"Harvard Law School Professor",
      description:"Focusing on a common approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.",
      source:"(Main publications: Wealth of Networks Penguin and Levidon)",
    },
  
    {
      id: 1,
      name: "Gilnam Jeon",
      translatedName:"Kilnam Chon",
      institution:"Korea Advanced Institute of Science and Technology (KAIST) Emeritus Professor",
      description:"It opened the Internet era in earnest by developing Asia's first internet protocol network SDN and leading the nation's first dedicated line",
      source:"Internet connection in 1990.",
    },

    {
      id: 2,
      name: "Soyoung Noh",
      translatedName:"Sohyeong Noh",
      institution:"Art Center Nabi Director, CC Korea Director",
      description:"As the author of <Digital Art, Art of Our Time>, he opened 'Art Center Nabi', the first digital art institution in Korea in 2000, and is currently in office.",
      source:"",
    },
        
    {
      id: 3,
      name: "Julia Leda",
      translatedName:"Julia Reda",
      institution:"Representative of the Young Pirates of Europe",
      description:"European integration and young people's participation in politics and democracy online are major concerns, and he has published a report that will potentially affect the revision of the European Union's copyright law in July.",
      source:"",
    },

    {
      id: 4,
      name: "Lyla Treticov",
      translatedName:"Lila Tretikov",
      institution:"Secretary General of the Wikimedia Foundation",
      description:"Layla Treticov is the Executive Director of the Wikimedia Foundation, the non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​each month to over 100 million people, nearly half of the world's population.",
      source:"",
    },    

    {
      id: 5,
      name: "Ryan Merkly",
      translatedName:"Ryan Merkly",
      institution:" Creative Commons CEO, former Mozilla Foundation COO",
      description:"He led the open source project at the Mozilla Foundation and joined the CC CEO in 2014. He has been active in open movements such as open government and open source.",
      source:"",
    },        
  ];















  // 
  // 
  // 





  
let displayCard = '';
for (let i = 0; i < cardsData.length; i += 1) {
  displayCard += `
  
  <article class="works_article bg_color7">

            <figure class="figure1">

                <a href="#"><img src="${cardsData[i].image[0]}" alt="Tonic_img"></a>

            </figure>

            <figure class="figure2">

                <a href="#"><img src="${cardsData[i].image[1]}" alt="Nature_img"></a>

            </figure>

            <div class="works_articlediv show1">

                <h3><a class="textdecoration font1" href="#">${cardsData[i].name[0]}</a></h3> 

                <ul>

                    <li><a class="textdecoration font2" href="#">CANOPY</a></li>
                    <li><a class="textdecoration" href="#"><img src="../img/mid_dot.jpg" alt="mit_dot"></a></li>
                    <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
                    <li class="textdecoration"><a href="#"><img src="../img/mid_dot.jpg" alt="mit_dot"></a></li>
                    <li><a class="textdecoration font3" href="#">2015</a></li>


                </ul> 


                <p>${cardsData[i].description[0].substring(0, 85)}</p>

                <ul class="gridbox1">

                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologies[0]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologies[1]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologies[3]}</a></li>

                </ul>

                <button class="font5 textdecoration seepopup" type="button" index=${cardsData[i].id}>See Project</button>

            </div>

            <div class="works_articlediv show2">

                <h3><a class="textdecoration font1" href="#">${cardsData[i].name[0]}</a></h3>

                <ul class="ul1">

                    <li><a class="textdecoration font2" href="#">CANOPY</a></li>
                    <li><a class="textdecoration" href="#"><img src="../img/mid_dot.jpg" alt=""></a></li>
                    <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
                    <li><a class="textdecoration" href="#"><img src="../img/mid_dot.jpg" alt=""></a></li>
                    <li><a class="textdecoration font3" href="#">2015</a></li>


                </ul>

                <p>${cardsData[i].description[1]}</p>

                <ul class="gridbox1">

                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[0]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[1]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[2]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[3]}</a></li>

                </ul>

                <button class="font5 textdecoration seepopup" type="button" index=${cardsData[i].id}>See Project</button>

            </div>

        </article>

  `;
}

worksSection.innerHTML = '';
worksSection.innerHTML = displayCard;