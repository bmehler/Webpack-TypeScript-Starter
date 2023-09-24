import { sum } from "./sum";

export const MySumComponent = () => {
    const summe = sum(2, 2);
    const div = document.createElement('div');
    const render = '<h3>' +
                        '<p>' +
                        '<span>The Sum is: </span>' +
                        '<span class="sum">' + summe + '</span>' +
                        '</p>'
                    '</h3>';

    div.innerHTML = render;
    return div;
}