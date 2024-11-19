const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector('.gallery');

const createGalleryItems = (images) => {
  return images.map(({preview, original, description}) => {
    const liElem = document.createElement('li');
    liElem.classList.add('gallery-item');
  
    const linkElem = document.createElement('a');
    linkElem.classList.add('gallery-item');
    linkElem.href = original;
  
    const imgElem = document.createElement('img');
    imgElem.classList.add('gallery-image');
    imgElem.src = preview;
    imgElem.dataset.sourse = original;
    imgElem.alt = description;
  
    linkElem.append(imgElem)
    liElem.append(linkElem);
  
    return liElem;
  })
}

const appendGalleryItems = (items) => {
  gallery.append(...items);
}

const items = createGalleryItems(images);
appendGalleryItems(items);

gallery.addEventListener('click', (e) => {
  e.preventDefault();
  
  if(e.target.nodeName !== 'IMG') return;

  const imageSrc = e.target.dataset.sourse;
  const imageAlt = e.target.alt;
  const modalContent = createModalContent(imageSrc, imageAlt)

  const instance =  basicLightbox.create(modalContent);
  instance.show();
});

const createModalContent = (url, alt) => {
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('image-wrapper');

  const image = document.createElement('img');
  image.src = url;
  image.alt = alt;

  const title = document.createElement('h1');
  title.textContent = alt;

  contentWrapper.append(image);
  contentWrapper.append(title);

  return contentWrapper;
}