const hamburger = document.querySelector('.hamburger_img');
const closeHamburgerBtn = document.querySelector('.close_hamburger');
const modalMenuContainer = document.querySelector('.modal_menu_container');
const menuOption = document.querySelectorAll('.menu_option');
const speakersSection = document.querySelector('.speakers_article_box');

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
    name: 'Emeka Emmanuel',
    translatedName: 'Emekaz Emma',
    institution: 'Harvard Law School Professor',
    description: 'Focusing on a common approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Marianepedia.',
    image: './speaker_01.png',
    source: '(Main publications: Wealth of Networks Penguin and Levidon)',
  },

  {
    id: 1,
    name: 'Ekpez Naza',
    translatedName: 'Ekpere Naza',
    institution: 'Korea Advanced Institute of Science and Technology (KAIST) Emeritus Professor',
    description: "It opened the Internet era in earnest by developing Asia's first internet protocol network SDN.",
    image: './speaker_02.png',
    source: 'Internet connection in 1990.',
  },

  {
    id: 2,
    name: ' Adaeze Onoja',
    translatedName: 'Adaezee Onojaa',
    institution: 'Art Center Nabi Director, MP Korea Director',
    description: "As the author of <Digital Art, Art of Our Time>, he opened 'Art Center Nabi', the first digital art institution in Korea in 2000, and is currently in office.",
    image: './speaker_03.png',
    source: '',
  },

  {
    id: 3,
    name: 'Kamsi Austin',
    translatedName: 'Kams Austin',
    institution: 'Representative of the Young Peoples of Europe',
    description: "European integration and young people's participation in politics and democracy online are major concerns.",
    image: './speaker_04.png',
    source: '',
  },

  {
    id: 4,
    name: 'Kosi Aruom',
    translatedName: 'Kosi Aruo',
    institution: 'Secretary General of the Marianemedia Foundation',
    description: 'Layla Treticov is the Executive Director of the Marianemedia Foundation, a non-profit organization that runs Marianepedia.',
    image: './speaker_05.png',
    source: '',
  },

  {
    id: 5,
    name: 'Peter Klaver',
    translatedName: 'Peter Klaver',
    institution: ' Mariane Hikes CEO, former Mariane Foundation COO',
    description: 'He led the open source project at the Mariane Foundation and joined the MP CEO in 2014.',
    image: './speaker_06.png',
    source: '',
  },
];

let displayCard = '';
for (let i = 0; i < speakersData.length; i += 1) {
  displayCard += `
  
  <article class="speakers_article" index=${speakersData[i]}>
  <div class="speakers_article_mobile show1" index=${speakersData[i]}>
      <figure class="speaker_mobile_figure">
          <img src=${speakersData[i].image} alt="">
          <div>
              <h3>${speakersData[i].name}</h3>
              <h4>${speakersData[i].translatedName}</h4>
              <h5>${speakersData[i].institution}</h5>
          </div>
      </figure>
      <p>${speakersData[i].description}</p>
  </div>

  <div class="speakers_article_desktop show2" index=${speakersData[i]}>
      <figure class="speaker_desktop_figure">
          <img src=${speakersData[i].image} alt="">
          <div>
              <h3>${speakersData[i].name}</h3>
              <h4>${speakersData[i].translatedName}</h4>
              <h5>${speakersData[i].institution}</h5>
              <p>${speakersData[i].description}</p>
          </div>
      </figure> 
  </div>

</article>

  `;
}

speakersSection.innerHTML = '';
speakersSection.innerHTML = displayCard;
