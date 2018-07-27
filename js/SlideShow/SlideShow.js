/**
 * @file
 * Javascript Object that manages a slide show
 */

/**
 * Object that manages a slide show
 * @param path Path to the first slide
 * @param first Index to first slide
 * @param last Index to last slide
 * @param id ID for the slide display img tag
 * @return void
 */
export let SlideShow = function(element) {

    let regex = /^(.*)(\.[a-zA-Z0-9]*)$/;
    let result = regex.exec(element.getAttribute('data-src'));
    if(result === null) {
        return;
    }

    let baseName = result[1];
    let ext = result[2];

    let fm = +element.getAttribute('data-fm');
    let to = +element.getAttribute('data-to');
    let slide = fm;

    let slideImg, previewDiv;

    let start = function() {
        //
        // The image
        //
        slideImg = document.createElement('IMG');

        element.innerHTML = '';
        element.appendChild(slideImg);

        // The transport controls
        createTransport(slideImg);

        // And the preview
        createPreview();

        setSlide(fm);

    }

    function createPreview() {
        previewDiv = document.createElement('DIV');
        previewDiv.classList.add('cl-preview');
        element.appendChild(previewDiv);

        for(let s=fm; s<=to; s++) {
            let button = document.createElement('BUTTON');
            previewDiv.appendChild(button);

            let img = document.createElement('IMG');
            setImage(img, s);
            button.appendChild(img);

            button.onclick = (event) => {
                event.preventDefault();
                setSlide(s);
            }
        }
    }

    function createTransport(img) {
        let transportDiv = document.createElement('DIV');
        transportDiv.classList.add('cl-transport');
        element.appendChild(transportDiv);


        a = createTransportButton('trans-start.png', 'First Slide');
        a.classList.add('cl-narrow');
        transportDiv.appendChild(a);
        a.onclick = (event) => {
            event.preventDefault();
            setSlide(fm);
        }

        let a = createTransportButton('trans-prev.png', 'Previous Slide');
        transportDiv.appendChild(a);
        a.onclick = (event) => {
            event.preventDefault();
            if(slide > fm) {
                setSlide(slide-1);
            }
        }

        a = createTransportButton('trans-next.png', 'Next Slide');
        transportDiv.appendChild(a);
        a.onclick = (event) => {
            event.preventDefault();
            if(slide < to) {
                setSlide(slide+1);
            }
        }


        a = createTransportButton('trans-end.png', 'Last Slide');
        a.classList.add('cl-narrow');
        transportDiv.appendChild(a);
        a.onclick = (event) => {
            event.preventDefault();
            setSlide(to);
        }

    }

    function createTransportButton(image, alt) {
        let a = document.createElement('BUTTON');
        let img = document.createElement('IMG');
        img.src = Site.root + '/vendor/cl/site/img/' + image;
        img.alt = alt;
        a.appendChild(img);

        return a;
    }

    function setSlide(s) {
        slide = s;
        setImage(slideImg, slide);
    }

    function setImage(img, imageNum) {
        slide = imageNum;
        img.src = baseName + slide + ext;
        img.alt = 'Slide ' + slide;

        for(let i=0; i<previewDiv.children.length; i++) {
            let child = previewDiv.children[i];
            if(i+fm === slide) {
                child.classList.add('cl-selected');
            } else {
                child.classList.remove('cl-selected');
            }
        }
    }


    start();





    //		$dot = strrpos($path, '.');
//		$path1 = substr($path, 0, $dot);
//		$ext = substr($path, $dot, strlen($path) - $dot);
//		$slide1 = $path1 . $first . $ext;
//		$libroot = Course::get()->get_libroot();

    let html = `<br>
<a class="first"><img src="/vendor/cl/site/img/trans-start.png" width="25" height="25" alt="First Slide" class="transport"></a>
<a class="prev"><img src="/vendor/cl/site/img/trans-prev.png" width="25" height="25" alt="Previous Slide" class="transport"></a>
<a class="next"><img src="/vendor/cl/site/img/trans-next.png" width="25" height="25" alt="Next Slide" class="transport"></a>
<a class="last"><img src="/vendor/cl/site/img/trans-end.png" width="25" height="25" alt="Last Slide" class="transport"></a>`;

  //  element.innerHTML = html;

    // var that = this;
    //
    // var sel = '#' + id;
    // var dot = path.lastIndexOf('.');
    // this.path = path.substr(0, dot);
    // this.ext = path.substr(dot + 1, path.length - dot - 1);
    // this.first = first;
    // this.last = last;
    // this.id = id;
    // this.current = first;
    //
    // $(document).ready(function() {
    //     $(sel + ' .first').click(function(event) {
    //         that.moveTo(event, first);
    //     });
    //
    //     $(sel + ' .prev').click(function(event) {
    //         that.move(event, -1);
    //     });
    //
    //     $(sel + ' .next').click(function(event) {
    //         that.move(event, 1);
    //     });
    //     $(sel + ' .last').click(function(event) {
    //         that.moveTo(event, last);
    //     });
    //
    // });
}

/** @brief Move to another slide
 * @param event HTML event
 * @param dist Positive or negative distance to move */
SlideShow.prototype.move = function(event, dist) {
    event.preventDefault();
    this.current += dist;
    if(this.current < this.first) {
        this.current = this.first;
    } else if(this.current > this.last) {
        this.current = this.last;
    }

    $("#" + this.id + ">img").attr('src', this.path + this.current + '.' + this.ext);
};

/** @brief Move to a slide
 * @param event HTML event
 * @param slide Slide to move to
 */
SlideShow.prototype.moveTo = function(event, slide) {
    event.preventDefault();
    this.current = slide;
    $("#" + this.id + ">img").attr('src', this.path + this.current + '.' + this.ext);
};


