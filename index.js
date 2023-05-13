
const bluebutton = document.querySelector('.blue');
const pinkbutton = document.querySelector('.pink');
const yellowbutton = document.querySelector('.yellow');
const container = document.querySelector('.container');
const umbrellaImage = document.querySelector('.umbrella-img');
const uploadBtn = document.querySelector('.upload-btn');
const logoImage = document.querySelector('.logo_img');

const button = document.querySelectorAll('button');


const buttons = [
  {
    button: bluebutton,
    container: container,
    containerColor: '#e5f5fe',
    uploadBtnColor: '#0095e3',
    imageSrc: './images/Blue_umbrella.png',
  },
  {
    button: pinkbutton,
    container: container,
    containerColor: '#fee5fa',
    uploadBtnColor: '#db3c91',
    imageSrc: './images/pink_umbrella.png'
  },
  {
    button: yellowbutton,
    container: container,
    containerColor: '#fefee5',
    uploadBtnColor: '#fed34c',
    imageSrc: './images/yellow_umbrella.png'
  }
];

for (let i = 0; i < buttons.length; i++) {
  const { button, container, containerColor, uploadBtnColor, imageSrc } = buttons[i];
  button.addEventListener('click', () => {
    container.style.backgroundColor = containerColor;
    uploadBtn.style.backgroundColor = uploadBtnColor;
    umbrellaImage.src = imageSrc;
  });
}



// Get the upload button element

// Add an event listener for the input element
uploadBtn.querySelector('#file-upload').addEventListener('change', function() {
  const file = this.files[0];
  const fileName = file.name;
  uploadBtn.classList.add('file-selected');
  uploadBtn.querySelector('.file-name').textContent = fileName;

  const reader = new FileReader();
  reader.addEventListener('load', () => {
      uploaded_img = reader.result;
      logoImage.src = uploaded_img;
  })

  reader.readAsDataURL(this.files[0]);
  
  // Create a close button and add an event listener
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-btn');
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', function() {
    uploadBtn.classList.remove('file-selected');
    uploadBtn.querySelector('.file-name').textContent = 'Upload logo' ;
    this.remove();
    logoImage.src = '';
  });
  
  // Add the close button to the upload button
  uploadBtn.appendChild(closeBtn);
});
