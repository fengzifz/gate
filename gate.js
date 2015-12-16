/**
 * Created by damon on 15/12/13.
 */

/**
 * @param element {object} Such as, document.getElementById('id');
 * @constructor
 */
function Gate(element) {

    if (!this.isInitialize) {
        Gate.initialize();
    }

    // Create an empty <div> element if element is no provided
    if (element == null) {
        element = document.createElement('div');
    }

    // Set original position
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.position = 'absolute';
    element.style[this.browserPrefix + 'TransformStyle'] = 'preserve-3d';
    element.style.width = this.width + 'px';
    element.style.height = this.height + 'px';
    element.style.opacity = this.opacity;

    this.domElement = element;
    this.domStyle = element.style;
    this.child = [];
    //console.log(this); // For debug
}

// Gate DOM element
Gate.prototype.domElement = null;

// Gate DOM's style
Gate.prototype.style = null;

// Initialize
Gate.prototype.isInitialize = false;

// Support browser old version.
Gate.prototype.transformProperty = 'Transform';

// Browser prefix
Gate.prototype.browserPrefix = '';

// The number of this.child
Gate.prototype.childNum = 0;

// domElement's width
Gate.prototype.width = 0;
// domElement's height
Gate.prototype.height = 0;

// The X axis position
Gate.prototype.x = 0;
// The Y axis position
Gate.prototype.y = 0;
// The Z axis position
Gate.prototype.z = 0;

// The X axis scale
Gate.prototype.scaleX = 1;
// The Y axis scale
Gate.prototype.scaleY = 1;
// The Z axis scale
Gate.prototype.scaleZ = 1;

// The X axis rotation
Gate.prototype.rotateX = 0;
// The Y axis rotation
Gate.prototype.rotateY = 0;
// The Z axis rotation
Gate.prototype.rotateZ = 0;

// Opacity
Gate.prototype.opacity = 1;

// Transition
Gate.prototype.transition = false;

// Transform property
Gate.prototype.transformValue = '__translate __scale __rotateX __rotateY __rotateZ';

// Transform origin
Gate.prototype.transformOrigin = '0 0';

/**
 * Enable transition
 * @param time
 * @param easing
 * @returns {Gate}
 */
Gate.prototype.enableTransition = function(time, easing) {

    if (!time) { time = 1; }
    if (!easing) { easing = 'ease'; }

    this.domStyle[this.browserPrefix + 'Transition'] = 'all ' + time + 's ' + easing;
    return this;
};

/**
 * Set domElement opacity
 * @param o
 * @returns {Gate}
 */
Gate.prototype.setOpacity = function(o) {
    this.domStyle.opacity = o;
    return this;
};

/**
 * Set domElement width
 * @param w
 * @returns {Gate}
 */
Gate.prototype.setWidth = function(w) {
    this.domStyle.width = w + 'px';
    return this;
};

/**
 * Set domElement height
 * @param h
 * @returns {Gate}
 */
Gate.prototype.setHeight = function(h) {
    this.domStyle['height'] = h + 'px';
    return this;
};

/**
 * Set dom class name
 * @param className
 * @returns {Gate}
 */
Gate.prototype.setClassName = function(className) {
    this.domElement.className = className;
    return this;
};

/**
 * Get dom class name
 * @returns {*|string|string}
 */
Gate.prototype.getClassName = function() {
    return this.domElement.className;
};

/**
 * Add dom class name
 * @param className
 * @returns {Gate}
 */
Gate.prototype.addClassName = function(className) {
    this.domElement.className += ' ' + className + ' ';
    return this;
};

/**
 * Remove class name
 * @param className
 * @returns {Gate}
 */
Gate.prototype.removeClassName = function(className) {
    this.domElement.className += this.domElement.className.replace(className, '');
    return this;
};

/**
 * Set dom element id
 * @param id
 * @returns {*}
 */
Gate.prototype.setId = function(id) {
    this.domElement.id = id;
    return this;
};

/**
 * Get dom element id
 * @returns {*|string}
 */
Gate.prototype.getId = function() {
    return this.domElement.id;
};

/**
 * Append child element to this.domElement
 * @param ele {object} Gate object.
 * @returns {*}
 */
Gate.prototype.addChild = function(ele) {
    this.childNum = this.child.push(ele);
    this.domElement.appendChild(ele.domElement);
    return ele;
};

/**
 * Translate on X axis
 * @param x
 * @returns {Gate}
 */
Gate.prototype.moveX = function(x) {
    this.x += x;
    return this;
};

/**
 * Translate on Y axis
 * @param y
 * @returns {Gate}
 */
Gate.prototype.moveY = function(y) {
    this.y += y;
    return this;
};

/**
 * Translate on Z axis
 * @param z
 * @returns {Gate}
 */
Gate.prototype.moveZ = function(z) {
    this.z += z;
    return this;
};

/**
 * Set scale on X axis
 * @param x
 * @returns {Gate}
 */
Gate.prototype.setScaleX = function(x) {
    this.scaleX = x;
    return this;
};

/**
 * Set Scale on Y axis
 * @param y
 * @returns {Gate}
 */
Gate.prototype.setScaleY = function(y) {
    this.scaleY = y;
    return this;
};

/**
 * Continued scale X
 * @param x
 * @returns {Gate}
 */
Gate.prototype.setConScaleX = function(x) {
    this.scaleX += x;
    return this;
};

/**
 * Continued scale y
 * @param y
 * @returns {Gate}
 */
Gate.prototype.setConScaleY = function(y) {
    this.scaleY += y;
    return this;
};

/**
 * Set scale on Z axis
 * @param z
 * @returns {Gate}
 */
Gate.prototype.setScaleZ = function(z) {
    this.scaleZ = z;
    return this;
};

/**
 * Set rotation on X axis
 * @param x
 * @returns {Gate}
 */
Gate.prototype.setRotateX = function(x) {
    this.rotateX += x;
    return this;
};

/**
 * Set rotation on Y axis
 * @param y
 * @returns {Gate}
 */
Gate.prototype.setRotateY = function(y) {
    this.rotateY += y;
    return this;
};

/**
 * Set rotation on Z axis
 * @param z
 * @returns {Gate}
 */
Gate.prototype.setRotateZ = function(z) {
    this.rotateZ += z;
    return this;
};

/**
 * Set X axis position
 * @param x
 * @returns {Gate}
 */
Gate.prototype.setX = function(x) {
    this.x = x;
    return this;
};

/**
 * Set Y axis position
 * @param y
 * @returns {Gate}
 */
Gate.prototype.setY = function(y) {
    this.y = y;
    return this;
};

/**
 * Set Z axis position
 * @param z
 * @returns {Gate}
 */
Gate.prototype.setZ = function(z) {
    this.z = z;
    return this;
};


/**
 * Set transform origin
 * @param x
 * @param y
 * @param z
 * @returns {Gate}
 */
Gate.prototype.setTransformOrigin = function(x, y, z) {
    this.domStyle['transformOrigin'] = x + ' ' + y + ' ' + z;
    return this;
};

/**
 * Set domElement CSS
 * @param key
 * @param val
 * @returns {Gate}
 */
Gate.prototype.setCSS = function(key, val) {
    this.domStyle[key] = val;
    return this;
};

/**
 * Go to X
 * @param x
 * @returns {Gate}
 */
Gate.prototype.goToX = function(x) {
    this.x = x;
    return this;
};

/**
 * Go to Y
 * @param y
 * @returns {Gate}
 */
Gate.prototype.goToY = function(y) {
    this.y = y;
    return this;
};

/**
 * Go to [x, y]
 * @param x
 * @param y
 * @returns {Gate}
 */
Gate.prototype.goTo = function(x, y) {
    this.x = x;
    this.y = y;
    return this;
};

/**
 * Update all actions.
 * @returns {Gate}
 */
Gate.prototype.go = function() {
    this.translate = 'translate3d(' + this.x + 'px,' + this.y + 'px,' + this.z + 'px) ';
    this.scale = 'scale3d(' + this.scaleX + ',' + this.scaleY + ',' + this.scaleZ + ') ';
    this.rx = 'rotateX(' + this.rotateX + 'deg)';
    this.ry = 'rotateY(' + this.rotateY + 'deg)';
    this.rz = 'rotateZ(' + this.rotateZ + 'deg)';

    this.tv = this.transformValue;
    this.tv = this.tv.replace('__translate', this.translate);
    this.tv = this.tv.replace('__scale', this.scale);
    this.tv = this.tv.replace('__rotateX', this.rx);
    this.tv = this.tv.replace('__rotateY', this.ry);
    this.tv = this.tv.replace('__rotateZ', this.rz);

    this.domStyle[this.transformProperty] = this.tv;
    return this;
};


/**
 * Create main container div element
 * @returns {Gate}
 */
Gate.createStage = function(left, top) {
    var dom = document.createElement('div'),
        style = dom.style;

    if (!Gate.prototype.isInitialize) {
        Gate.initialize();
    }

    // Initialize 3D property
    style[Gate.prototype.browserPrefix + 'Perspective'] = '800px';
    style[Gate.prototype.browserPrefix + 'PerspectiveOrigin'] = '0 0';
    style[Gate.prototype.browserPrefix + 'TransformOrigin'] = this.transformOrigin;
    style[Gate.prototype.browserPrefix + 'Transform'] = 'translateZ(0px)';

    // Initialize style
    style.position = 'absolute';
    style.left = !left ? '0px' : left;
    style.top = !top ? '0px' : top;
    style.margin = '0px';
    style.padding = '0px';

    // Set class name
    dom.className = 'stage';

    // Append to body
    document.body.appendChild(dom);

    return new Gate(dom);
};

/**
 * Initialize
 * @returns {boolean}
 */
Gate.initialize = function() {
    var dom = document.createElement('div'),
        style = dom.style,
        supported = ['', 'webkit', 'moz', 'ms'],
        len = supported.length,
        i;

    // Check transform supported
    for (i = 0; i < len; i++) {
        if (supported[i] + 'Perspective' in style || supported[i] + 'Transform' in style) {
            Gate.prototype.isInitialize = true;
            Gate.prototype.transformProperty = supported[i] + 'Transform';
            Gate.prototype.browserPrefix = supported[i];
            return true;
        }
    }

    return false;
};