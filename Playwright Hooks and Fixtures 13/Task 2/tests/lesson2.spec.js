/* Exercise 2 — Hooks
Create:
beforeAll
beforeEach
afterEach
afterAll
Print messages so you can observe their execution order.
Expected:
beforeAll

beforeEach
Test 1
afterEach

beforeEach
Test 2
afterEach

afterAll
*/
import {test, expect} from "@playwright/test";
test.beforeAll(async()=>{
    console.log("Before All");
});

test.beforeEach(async()=>{
    console.log("Before Each");
});
test.afterEach(async()=>{
    console.log("After Each");
});
test.afterAll(async()=>{
    console.log("afterAll")
});
test("Test 1",async()=>{
    console.log("Test 1");
});
test("Test 2",async()=>{
    console.log("Test 2");
})