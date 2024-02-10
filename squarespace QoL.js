document.addEventListener('DOMContentLoaded', function() {
    const viewportHeight = window.innerHeight;
    const sectionElement = document.querySelector('[data-section-id="65c61903a7a3934c939e42c7"]');
    sectionElement.style.height = `${viewportHeight}px`;
    const sectionElement2 = document.querySelector('[data-section-id="65c621049686cd62e620a808"]');
    sectionElement2.style.height = `${viewportHeight}px`;

    const sectionElementTrigger = document.querySelector('[data-section-id="65c61903a7a3934c939e42cb"]');
    const divElement = document.createElement('div');
    divElement.id = 'trigger-point';
    sectionElementTrigger.appendChild(divElement);
});

window.onload = function () {
    const videoElement = document.querySelector('video');
    videoElement.removeAttribute('loop');
};
    
 