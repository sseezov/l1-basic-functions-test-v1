// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';
import * as functions from '../index.js';

test('task1', () => {
  assert.equal(functions.sumTwoIntegers(1, 2), 3);
  assert.equal(functions.sumTwoIntegers(123121, 0), 123121);
  assert.equal(functions.sumTwoIntegers(-121, 21), -100);
});

test('task2', () => {
  assert.equal(functions.unsafeDivision(10, 2), 5);
  assert.equal(functions.unsafeDivision(123121, 0), 'the universe collapsed!');
});

test('task3', () => {
  const castBoolean = functions.castBoolean;
  assert.equal(functions.castBoolean(1, 2), true)
  assert.equal(functions.castBoolean(0), false);
  assert.equal(functions.castBoolean(console.log), true);
  assert.equal(functions.castBoolean(castBoolean(castBoolean)), 'already boolean');
});

test('task4', () => {
  assert.equal(functions.sortByLength('a', 'bcd', 'yz'), 'a yz bcd');
  assert.equal(functions.sortByLength('let', 'ex', 'H'), 'H ex let');
});

test('task5', () => {
  assert.equal(functions.encrypt('Hexlet', 'e', 'e'), 'eeeeee');
  assert.equal(functions.encrypt('Hello, world!', '!', '*'), '************!');
});
