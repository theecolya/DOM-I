const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const nav = Array.from(document.querySelectorAll('nav a'))

nav[0].textContent = 'Services'
nav[1].textContent = 'Product'
nav[2].textContent = 'Vision'
nav[3].textContent = 'Features'
nav[4].textContent = 'About'
nav[5].textContent = 'Contact'

nav.forEach(item => item.classList.add('italic'))

//logo img
document.querySelector('.logo').setAttribute('src','http://localhost:9000/img/logo.png')

//cta img
document.querySelector('#cta-img').setAttribute('src','http://localhost:9000/img/cta.png')

//cta h1
document.querySelector('div.cta-text h1').textContent = 'DOM Is Awesome'

//cta button
document.querySelector('div.cta-text button').textContent = 'Get Started'

//features
document.querySelector('div.top-content').childNodes[1].childNodes[1].textContent = 'Features'

document.querySelector('div.top-content').childNodes[1].childNodes[3].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//about
document.querySelector('div.top-content').childNodes[3].childNodes[1].textContent = 'About'

document.querySelector('div.top-content').childNodes[3].childNodes[3].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//middle img
document.querySelector('img.middle-img').setAttribute('src','http://localhost:9000/img/accent.png')

//services
document.querySelector('div.bottom-content').childNodes[1].childNodes[1].textContent = 'Services'
document.querySelector('div.bottom-content').childNodes[1].childNodes[3].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//product
document.querySelector('div.bottom-content').childNodes[3].childNodes[1].textContent = 'Product'

document.querySelector('div.bottom-content').childNodes[3].childNodes[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//vision
document.querySelector('div.bottom-content').childNodes[5].childNodes[1].textContent = 'Vision'
document.querySelector('div.bottom-content').childNodes[5].childNodes[3].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//contact
document.querySelector('.contact').childNodes[1].textContent = 'Contact'

document.querySelector('.contact').childNodes[3].textContent = '123 Way 456 Street Somewhere, USA'

document.querySelector('.contact').childNodes[5].textContent = '1 (888) 888-8888'

document.querySelector('.contact').childNodes[7].textContent = 'sales@greatidea.io'

//footer
document.querySelector('footer a').textContent = 'Copyright Great Idea! 2021'
document.querySelector('footer a').classList.add('bold')