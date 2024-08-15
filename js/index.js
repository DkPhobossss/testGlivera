(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const options = {
            elementsInsert: 4
        }
        const paginationListElements = document.querySelectorAll('.pagination__list');
        for (listElement of paginationListElements) {
            const moreElement = listElement.querySelector('.pagination__item-more');
            if (moreElement === null)
                continue;

            let start = parseInt(moreElement.previousElementSibling.textContent);
            let end = parseInt(moreElement.nextElementSibling.textContent);
            const link = '#';//link logic depends on url
            moreElement.addEventListener('click', function() {
                let numElementsInserted = Math.min(options.elementsInsert, end - start - 1);
                for (let i = start + 1, len = start + 1 + numElementsInserted ; i < len; i++) {
                    const listItemElement = document.createElement('li');
                    listItemElement.classList.add('pagination__item');
                    const linkElement = document.createElement('a');
                    linkElement.classList.add('pagination__link');
                    linkElement.href = link;
                    linkElement.textContent = i;

                    listItemElement.append(linkElement);

                    listElement.insertBefore(listItemElement, moreElement);
                }
                start += options.elementsInsert;
                if ( start >= end ) {
                    this.remove();
                }
            });
        }
    })
})();