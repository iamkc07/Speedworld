// *** Footer Javascript===================
const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
    <div class="container">
    <div class="row">
        <div class="footer-col">
            <h4>Bikes</h4>
            <ul>
                <li><a href="#">Popular Bike</a></li>
                <li><a href="#">Latest Bike</a></li>
                <li><a href="#">Upcoming Bike</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Brand</h4>
            <ul>
                <li><a href="#">Royal Enfield</a></li>
                <li><a href="#">KTM</a></li>
                <li><a href="#">Ducati</a></li>
                <li><a href="#">Kawasaki</a></li>
                <li><a href="#">BMW</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Category</h4>
            <ul>
                <li><a href="#">Sport Bikes</a></li>
                <li><a href="#">Cruiser Bikes</a></li>
                <li><a href="#">Adventure Bikes</a></li>
                <li><a href="#">Naked Bikes</a></li>
            </ul>
        </div>
        <div class="footer-col">
        <a href="#" class="brand-logo">Speed<span>World</span></a>
        </div>
    </div>
</div>`;
}

createFooter();
// *** End Footer Javascript===================
