/*
* Create Style Processor
* April 8, 2023.
* Mayowa Obisesan
* */

export function _(selector) {
    return document.querySelector(selector)
}

export function _all(selector) {
    return document.querySelectorAll(selector)
}
export class StyleProcessor {
    /**
     * A Class to Process Custom Styles to be used in Summary using a chaining method.
     */
    constructor(selector) {
        if (typeof selector === "string") {
            this.elem_style = _(selector).classList
        } else {
            this.elem_style = selector.classList
        }
    }

    removeClass(styles) {
        this.elem_style.remove(styles)
        return this
    }

    removeManyClass(styles) {
        const styles_array = styles.split(' ')
        styles_array.forEach((each_style) => {
            this.elem_style.remove(each_style)
        })
        return this
    }

    addClass(styles) {
        this.elem_style.add(styles)
        return this
    }

    addManyClass(styles) {
        const styles_array = styles.split(' ')
        styles_array.forEach((each_style) => {
            this.elem_style.add(each_style)
        })
        return this
    }

    toggleClass(styles) {
        this.elem_style.toggle(styles)
        // this.elem_style.contains(styles) ? this.elem_style.add(styles) : this.elem_style.remove(styles)
        return this
    }

    replaceClass(styles) {
        /**
         * Function to use regex to find if the style specified exists in the calling element
         * e.g., this.elem_style.find(r"styles.split('-')[0]").replace("".join(styles.split('-')), styles)
         * Date: December 23, 2022.
         */
    }
}

export class EventTriggers {
    constructor(selector_or_elem) {
        if (typeof selector_or_elem === "string") {
            this.elem = _(selector_or_elem)
        } else {
            this.elem = selector_or_elem
        }
    }

    Listen(event_name) {
        this.elem.addEventListener(event_name)
    }

    Remove(event_name) {
        this.elem.removeEventListener(event_name)
    }
}