---
title: Why I choice jest as test tool, what I think a good testing tool should have
date: 2019-05-10 10:28:21
category: Program design
---

# Fast

Remember to use these version

```json

     "jest": "22.4.4",
    "ts-jest": "22.4.4",
```

# Allow Watching

rerun test after modification of code

```
 npm run jest  --watch
```

# Allow spying and mocking

Which is necessary for unit test

## Spying

```
    jest.spyOn(catsService, 'findAll').mockImplementation(() => result);
```

## Mocking

# Allow run test on specific file

```javascript
import SoundPlayer from "./sound-player";
import SoundPlayerConsumer from "./sound-player-consumer";
jest.mock("./sound-player"); // SoundPlayer is now a mock constructor

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  SoundPlayer.mockClear();
});

it("We can check if the consumer called the class constructor", () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it("We can check if the consumer called a method on the class instance", () => {
  // Show that mockClear() is working:
  expect(SoundPlayer).not.toHaveBeenCalled();

  const soundPlayerConsumer = new SoundPlayerConsumer();
  // Constructor should have been called again:
  expect(SoundPlayer).toHaveBeenCalledTimes(1);

  const coolSoundFileName = "song.mp3";
  soundPlayerConsumer.playSomethingCool();

  // mock.instances is available with automatic mocks:
  const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
  // Equivalent to above check:
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
```

# Allow Run in parallel/sequential

It it parallel by default

sequential

```
npm test -- --runInBand
```

# Various expressive matcher

## Exact Equality

```javascript
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
```

## Object

```javascript
//exact match
expect({ age: 11, name: "jeff chung" }).toEqual({
  age: 11,
  name: "jeff chung"
});
```

```javascript
//partial match
expect({ age: 11, name: "jeff chung" }).toMatchObject({
  age: 11,
  name: "jeff chung"
});
```

## String

```javascript
expect("Christoph").toMatch(/stop/);
```

## Array and iterables

```javascript
expect(shoppingList).toContain("beer");
expect(new Set(shoppingList)).toContain("beer");
```

## Exception Throwing

```javascript
expect(compileAndroidCode).toThrow(ConfigError);
```

# Other

- Good Await/Async
- Setup and teardone
- Coverage

# Ref

https://itnext.io/how-to-make-your-sluggish-jest-v23-tests-go-faster-1d4f3388bcdd
