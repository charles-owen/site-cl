import './lazy.scss';

console.log('Lazy loaded');

let Lazy = function() {
    console.log('lazy');
}

export default Lazy;
