import { MyDescription } from "./description";
import { MySumComponent } from "./sum";
import { MySubstractionComponent } from "./minus";
import { MyUser } from "./user/index";

const App = () => {
    const div = document.createElement('div');

    // Calucation Example
    div.appendChild(MyDescription());
    div.appendChild(MySumComponent());
    div.appendChild(MySubstractionComponent());

    // User OOP Example
    div.appendChild(MyUser());

    return div;
}

document.body.appendChild(App());