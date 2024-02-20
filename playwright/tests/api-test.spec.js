import { test, expect } from "@playwright/test";

test.describe.serial("API TESTS",()=>{
test("Testing Api method get", async ({ request }) => {
  let result = await request.get("/users");
  console.log(await result.json());
  expect(result.status()).toBe(200);
});

test("Get user name", async ({ request }) => {
  let result = await request.get("/users/2");
  let data = await result.json();
  expect(result.ok()).toBeTruthy();
  expect(data.data.name).toEqual(expect.stringContaining("Tim"));
});

test("Create user, post method", async ({ request }) => {
  let response = await request.post("/users", {
    data: {
      id: "3",
      name: "Bertran",
    },
    headers: {
      Accept: "application/json",
    },
  });
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

    test("Delete user",async ({request})=>{
        let result = await request.delete("/user/3")
        expect(result.status()).toBe(200)
        console.log(await result.json());
    });
});