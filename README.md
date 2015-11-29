
# Back to Basic

Converts (most) european special characters to basic latin characters.
Is super tiny (720B zipped)

# Which characters does it include?

Currently the following characters (upper- and lowercase) are converted as follows:

```
àáâãå => a
äæ => ae
ç => c
èéêë => e
ƒ => f
ìíîïı => i
ñ => n
òóôõø => o
öœ => oe
ß => ss
š => s
þð => th
ùúû => u
ü => ue
ýÿ => y
ž => z
```

# how do i use it?

As `back-to-basic` is UMD you can either require it or load it directly into your browser

## require/import

```javascript
import b2b from 'back-to-basic';

b2b('thè qûìçk bròwñ ƒóx júmpš øvër ðë låžÿ dõg);
// => "the quick brown fox jumps over the lazy dog"
```

## global in browser

```javascript
<script src="some/path/to/b2b.js"></script>
<script>
b2b('thè qûìçk bròwñ ƒóx júmpš øvër ðë låžÿ dõg);
// => "the quick brown fox jumps over the lazy dog"
</script>
```

## the character map

if you want to do something directly with the character map used to convert it is available as a named export

```javascript
// es5
var characterMap = require('back-to-basic').characterMap;
// es6
import { characterMap } from 'back-to-basic';
```

# the thing with "`ß`"
This wonderful character of the german language has its very own quirks.
First of all it actually has an uppercase representation the wonderful "`ẞ`".
A fact that was unknown to me when starting to write this small module (Fun fact: I am german) (more on that topic can be found here: [https://en.wikipedia.org/wiki/Capital_%E1%BA%9E](https://en.wikipedia.org/wiki/Capital_%E1%BA%9E)
## le problem
So how does this affect anything? The thing is browsers dont know what to do with it.
At the time of writing `"ß".toUpperCase()` in Chrome produces `SS` (the correct way to handle "ß" until 2010 (apparently)) while Firefox plays dump and just returns `ß` again.
## what does it mean?
Basically nothing, just that if you were to transform a word with all capital letters and an "ß" in between, it will be transformed to a lowercase `ss` not an uppercase one. Thats it :).

