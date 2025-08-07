import { test, expect, request } from '@playwright/test';


test('GET request to fetch users', async () => {

    const apiContext = await request.newContext();
    const response = await apiContext.get('https://jsonplaceholder.typicode.com/users');
    expect(response.ok()).toBeTruthy();

    const users = await response.json();
    console.log(users);
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty('id');
    expect(users[0]).toHaveProperty('name');
    expect(users[0]).toHaveProperty('email');
    expect(users[0]).toHaveProperty('address');
    expect(users[0].address).toHaveProperty('street');
    expect(users[0].address).toHaveProperty('city');
    expect(users[0].address).toHaveProperty('zipcode');
    expect(users[0]).toHaveProperty('phone');
    expect(users[0]).toHaveProperty('website');
    expect(users[0]).toHaveProperty('company');
    expect(users[0].company).toHaveProperty('name');
    expect(users[0].company).toHaveProperty('catchPhrase');
    expect(users[0].company).toHaveProperty('bs');

    // Additional checks can be added as needed
    expect(users[0].name).toBe('Leanne Graham');
    expect(users[0].username).toBe('Bret');
    expect(users[0].email).toBe('Sincere@april.biz');
    expect(users[0].address.street).toBe('Kulas Light');
    expect(users[0].address.city).toBe('Gwenborough');
    expect(users[0].address.zipcode).toBe('92998-3874');
    expect(users[0].phone).toBe('1-770-736-8031 x56442');
    expect(users[0].website).toBe('hildegard.org');
    expect(users[0].company.name).toBe('Romaguera-Crona');
    expect(users[0].company.catchPhrase).toBe('Multi-layered client-server neural-net');
    expect(users[0].company.bs).toBe('harness real-time e-markets');
});