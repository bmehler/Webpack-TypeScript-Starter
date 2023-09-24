import { User } from "./user";
import { UserAccount } from "./userAccount";

export const MyUser = () => {

    const div = document.createElement('div');
    const user: User = new UserAccount("Murphy", 1);

    console.log('user', user.id);
    console.log('user', user.getName());

    let render = '<header><h2>Do something with Objects:</h2></header>';
    render += '<h3>Id:<span class="id">' + user.getId() + '</span></h3>';
    render += '<h3>Name:<span class="name">' + user.getName() + '</span></h3>';
    
    div.innerHTML = render;
    return div;
}