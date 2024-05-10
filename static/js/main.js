class BeforeAfter {
	constructor(enteryObject) {

			const beforeAfterContainer = document.querySelector(enteryObject.id);
			const before = beforeAfterContainer.querySelector('.bal-before');
			const handle = beforeAfterContainer.querySelector('.bal-handle');
			var widthChange = 0;

			beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
			window.onresize = function () {
					beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
			}
			before.setAttribute('style', "width: 50%;");
			handle.setAttribute('style', "left: 50%;");

			//mouse move event listener
			beforeAfterContainer.addEventListener('mousemove', (e) => {
					let containerWidth = beforeAfterContainer.offsetWidth;
					widthChange = e.offsetX;
					let newWidth = widthChange * 100 / containerWidth;

					if (e.offsetX > 20 && e.offsetX < beforeAfterContainer.offsetWidth - 20) {
							before.setAttribute('style', "width:" + newWidth + "%;");
							handle.setAttribute('style', "left:" + newWidth + "%;");
					}
			})
	}
}
