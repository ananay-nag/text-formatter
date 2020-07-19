# TEXT-FORMATTER

`@ananay-nag/text-formatter` module is a comprehensive nodejs for format text / replace some text with following features:

- Easy to use API
- Easy to install

# Versions-

`@ananay-nag/text-formatter` has released version `1.0.5`.

It is still able to use v1 with `@ananay-nag/text-formatter@1.0.5`

```js
// v1.0.5
const formatter = require("@ananay-nag/text-formatter");
```

# Quick Start

- [As Library](#library)
- [Usage](#usage)

## Library

### Installation

```
npm i --save @ananay-nag/text-formatter
```

### Text formatter using a Object.

```js
const formatter = require("@ananay-nag/text-formatter");

var user = {
  NAME: "Foo",
  POSITION: "Full Stack Developer",
  COMPANY: "Google"
};

var str = "{NAME} is working as {POSITION} in {COMPANY} company.";

try {
  let result = formatter.doFormatByObject(str, user);
  console.log(result);
  /*{ success: true,
  data: 'Foo is working as Full Stack Developer in Google company.',
  message: 'success',
  code: 200 }*/
} catch (e) {
  console.log(e);
}
```
## Usage -

* The key name must be same with repalce keyword.
* The replace key must be in `{ }`.
* Valids - `{_X}` , `{X_}` , `{X}`
* In-valids - `{ X}` , `{ X }` , `{X }`.
* Space in `{}`will not be accepted.
* Object key length must be equal to replace keys in String.