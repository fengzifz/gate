# Gate.js
A small library for generating CSS 3D transforms.
It perform animations using DOM element, not <canvas>. It has no dependencies.

## Live Demos

- [Simple examples](http://fengzifz.github.io/lab/gate/)
- [Cards](http://fengzifz.github.io/lab/gate/examples/cards.html)
- [Cube](http://fengzifz.github.io/lab/gate/examples/cube-rotate.html)
- [Letters](http://fengzifz.github.io/lab/gate/examples/letters.html)

## Usage

Before perform animation, we should create the stage which is the wrapper of transform element.

```
// Create a new element
var stage = Gate.createStage();

// Or using existed element
var stage = Gate.createStage(0, 0, 'elementID');
```

`createStage` accepted 3 parameters, `Gate.createStage(left, top, elementID)`
- **left**: Number or Percentage. The value of horizontal position, default is 0. 
- **top**: Number or Percentage. The value of vertical position, default is 0. 
- **elementID**: String. The id of DOM element. Gate will create a new one if `elementID` is not provided.

Now we can create a transform element under stage.

```
// Create element
var container = new Gate()
	.setWidth(200)
	.setHeight(200);

// Append to stage
stage.addChind(container);

// Move!
container
	.enableTransition()
	.moveX(200)
	.go();
```

## Methods

### Size
- `setWidth(width)` - Set the width
- `setHeight(height)` - Set the height

### DOM Operations
- `setId(id)` - Set ID for DOM
- `getId()` - Get ID of DOM
- `setClassName(className)` - Set class name for DOM
- `getClassName()` - Get class name of DOM
- `addClassName(className)` - Add class name for DOM
- `removeClassName(className)` - Remove class name of DOM
- `addChind(Gate_Object)`  - Add child

### Transition enable
- `enableTransition()` - Enable transition
- `disableTransition()` - Disable transition

### Position
- `setX(x)` - Set the X position
- `setY(y)` - Set the Y position
- `SetZ(z)` - Set the Z position

### Translate
- `moveX(x)` - Add the provided values to the current position on X axis
- `moveY(y)` - Add the provided values to the current position on Y axis
- `moveZ(z)` - Add the provided values to the current position on Z axis
- `goToX(x)` - Go to the provided value on X axis. It should use with `enableTransition()`
- `goToY(y)` - Go to the provided value on Y axis. It should use with `enableTransition()`
- `goToZ(z)` - Go to the provided value on Z axis. It should use with `enableTransition()`
- `goTo(x, y, z)` - Go to the provided value. It should use with `enableTransition()`

### Rotation
- `setRotateX(x)` - Add the provided values to the current degree around X axis
- `setRotateY(y)` - Add the provided values to the current degree around Y axis
- `setRotateZ(z)` - Add the provided values to the current degree around Z axis
- `setRotate(x, y, z)` - Add the provided values to the current degree
- `goRotateX(x)` - Rotate the element with provided values around X axis
- `goRotateY(y)` - Rotate the element with provided values around Y axis
- `goRotateZ(z)` - Rotate the element with provided values around Z axis
- `goRotate(x, y, z)` - Rotate the element with provided values

### Scale
- `setScaleX(x)` - Set scale value round X axis
- `setScaleY(y)` - Set scale value round Y axis

### CSS operations
- `setCSS(key, value)` - Set CSS for DOM
- `setOpacity(o)` - Set the opacity for DOM

### Update all operations
- `go()` - Update all operations.

## License
The MIT License (MIT)

Copyright (c) 2015 Damon Chen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

