let search = document.querySelector('.search');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

document.getElementById('Product-section').addEventListener('click', () => {
    document.getElementById('product').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('combo-section').addEventListener('click', () => {
    document.getElementById('combo').scrollIntoView({behavior: 'smooth'});
});


}




