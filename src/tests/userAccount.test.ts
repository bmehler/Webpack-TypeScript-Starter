import { User } from '../user/user';
import { UserAccount } from "../user/userAccount";

test('User Id and User Name equals 1 and Murphy', () => {
    const user: User = new UserAccount("Murphy", 1);
    expect(user.name).toBe("Murphy");
    expect(user.id).toBe(1);
    const id = user.getId();
    expect(id).toEqual(1);
});

test('Function getId() returns 1', () => {
    const user: User = new UserAccount("Murphy", 1);
    const id = user.getId();
    expect(id).toEqual(1);
});

test('Function getName() returns Murphy', () => {
    const user: User = new UserAccount("Murphy", 1);
    const name = user.getName()
    expect(name).toEqual('Murphy');
});

test('Function setName() returns Miller', () => {
    const user: User = new UserAccount("Murphy", 1);
    user.setName('Miller');
    const name = user.getName();
    expect(name).toEqual('Miller');
});