class CarouselLink {
    constructor(carouselElement) {
        this.carousel = carouselElement;

        this.images = this.carousel.querySelectorAll('img');

        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        
        this.index = 0;

        this.images[this.index].style.display = 'flex';

        this.leftButton.addEventListener('click', () => this.leftClick());
        this.rightButton.addEventListener('click', () => this.rightClick());
    }

    leftClick() {
        this.images[this.index].style.display = 'none';
        this.index--;
        if(this.index < 0) {
            this.index = this.images.length - 1;
        }
        this.images[this.index].style.display = 'flex';
    }

    rightClick() {
        this.images[this.index].style.display = 'none';
        this.index++;
        if(this.index >= this.images.length) {
            this.index = 0;
        }
        this.images[this.index].style.display = 'flex';
    }
}

let carousel = document.querySelector('.carousel');
let myCarousel = new CarouselLink(carousel);
