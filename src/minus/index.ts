import { minus } from "./minus";

export const MySubstractionComponent = () => {
    const substraction = minus(4, 2);
    const div = document.createElement('div');
    const render = '<h3>' +
                        '<p>' +
                        '<span>The Substraction is: </span>' +
                        '<span class="minus">' + substraction + '</span>' +
                        '</p>'
                    '</h3>';

    div.innerHTML = render;
    return div;
}