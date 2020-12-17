'use strict';

document.addEventListener('DOMContentLoaded', function () {

	const catPopupTitle = document.querySelector('.cat-popup__title');
	const catPopupContent = document.querySelector('.cat-popup__content');
	catPopupTitle.addEventListener('click', function (e) {
		catPopupContent.classList.toggle('_active');
		catPopupTitle.classList.toggle('_active');
		if (catPopupContent.classList.contains('_active')) {
			catPopupTitle.innerHTML = '';
		} else {
			catPopupTitle.innerHTML = 'Посмотреть категории';
		}
	})

	
	const menuBtn = document.querySelector('.right-header__menu');
	const menuPopup = document.querySelector('.popup-menu');
	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('_active');
		menuPopup.classList.toggle('_active');
	})


	const bookItems = document.querySelectorAll('.book-item__img');
	bookItems.forEach(function (item) {
		item.addEventListener('mouseenter', function (e) {
			let bookHover = e.target.querySelector('.book-item__hover');
			bookHover.classList.add('_active');
		})

		item.addEventListener('mouseleave', function (e) {
			let bookHover = e.target.querySelector('.book-item__hover');
			bookHover.classList.remove('_active');
		})
	})


	const moreBtn = document.querySelector('.catalog-page__more-btn');
	const moreRow = document.querySelector('.catalog-page__row');
	moreBtn.addEventListener('click', function () {
		const newRow = document.createElement('div');
		newRow.innerHTML = moreRow.innerHTML;
		newRow.classList.add('catalog-page__row');
		document.querySelector('.catalog-page__body').append(newRow);
		let rows = document.querySelectorAll('.catalog-page__row');
		let rowsArr = Array.prototype.slice.call(rows);
		if (rowsArr.length > 3) {
			document.querySelector('.catalog-page__more').remove()
			return false;
		}
	})

	const goUp = document.querySelector('.footer__go-up');
	goUp.addEventListener('click', function () {
		window.scrollTo(0, 0)
	})
})