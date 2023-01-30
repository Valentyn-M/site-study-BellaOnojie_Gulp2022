// импортируем файл functions.js и вызываем из него функцию. * - импортируем все функции из этого файла
import * as flsFunctions from "./modules/functions.js";

// вызываем функцию isWebp
flsFunctions.isWebp();

// Menu burger
const iconMenu = document.querySelector('.burger__menu');       	// выбираем нашу иконку меню
if (iconMenu) {     																	// проверяем существует ли такой объект
	const menuBody = document.querySelector('.menu__body');       	// выбираем наше меню
	iconMenu.addEventListener("click", function () {    				// событие "клик" по иконке
		iconMenu.classList.toggle('active');                        	// добавляем/удаляем класс
		menuBody.classList.toggle('active');                        	// добавляем/удаляем класс
		document.body.classList.toggle('lock');                     	// добавляем/удаляем класс для body
	});
}