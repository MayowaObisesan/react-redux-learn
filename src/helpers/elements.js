import React from "react";
import { Link } from "react-router-dom";

export const Button = (props) => {
    return (
        <button
            type={props.type || "button"}
            name={props.name || ""}
            value={props.value || ""}
            onChange={(e) => props.onChange(e)}
            onClick={(e) => props.onClick(e)}
            className={`${props.className + " "}d-block pct:w-88 h-8 lh-8 pad-x3 bg-green-solid color-FFF radius2-xs mg-l-auto mg-r2 font-14 font-medium border-0 cursor-pointer
                    outline:1px_solid_transparent outline-offset-2 focus:outline:2px_solid_green transition:outline_80ms_ease|width_800ms_ease`}
            tabIndex="-1">
            {props.value} {props.children}
        </button>
    )
}

export const textInput = (props) => {
    return (
        <input
            id={props.id}
            type={props.type || "text"}
            name={props.name}
            value={props?.value || ""}
            placeholder={props.placeholder}
            onChange={(e) => props.onChange(e)}
            onFocus={(e) => props.onFocus(e)}
            onBlur={(e) => props.onBlur(e)}
            ref={props.ref}
            className={`${props.className + " "}pct:w-100 h-8 lh-8 pad-x2 mg-y1 outline:1px_solid_transparent border:1px_solid_lightgray outline-offset-2 focus:outline:2px_solid_gray transition:outline_80ms_ease radius-sm font-12 placeholder:font-bold`}
        />
    )
}

export function FormInput(props) {
    // const handleChange = (event) => {
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   setSignupData(values => (
    //       {...values, [name]: value}
    //   ));
    // }

    return (
        <>
            {
                props.hideLabel
                    ? null
                    : <label htmlFor={props.id}
                        className="pad-x1 pad-y1 focus:sibling-appname:color-blue">{props.labelValue}</label>
            }
            <input
                id={props.id}
                type={props.type || "text"}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange || null}
                onFocus={props.onFocus || null}
                onBlur={props.onBlur || null}
                ref={props.reff}
                className={`${props.className + " "}sibling-appname pct:w-100 h-8 lh-8 pad-x2 mg-y1 outline:1px_solid_transparent border:1px_solid_BBB outline-offset-2 focus:outline:2px_solid_gray transition:outline_80ms_ease radius-sm font-12`}
            />
            <span></span>
            {props.children}
        </>
    )
}

export const HeaderLink = ({ headerTitle, showArrow, linkUrl }) => {
    return (
        <Link to={linkUrl} className={"d-inline-block v-align-middle pct:w-100 decoration-none color-initial dark:color-whitesmoke"}>
            <header className={"d-inline-block pct:w-80 font-semibold pad-x2 lg:font-18"}>{headerTitle}</header>
            {
                showArrow
                    ? <div className={"d-inline-block pct:w-20 text-right"}>
                        <span
                            className={"fa fa-angle-right square-8 lh-8 color-initial text-center decoration-none dark:color-whitesmoke"}></span>
                    </div>
                    : null
            }
        </Link>
    )
}

export const PageHeaderLink = ({ headerTitle, showArrow, linkUrl, fixTop, noFix, children }) => {
    let relativeType = "sticky";
    if (fixTop) {
        relativeType = "fixed";
    } else if (noFix) {
        relativeType = "relative";
    }
    return (
        <div
            className={`${relativeType} top-0 left-0 flex flex-row justify-start align-items-center pct:w-100 h-10 bg-white bg-mica z-10 dark:bg-111314`}>
            {
                showArrow !== false
                    ? (
                        linkUrl === undefined || linkUrl === ""
                            ? <button type={"button"}
                                className="d-block square-8 lh-9 border-0 bg-initial color-initial text-center z-10 decoration-none dark:color-whitesmoke"
                                onClick={() => window.history.back()}>
                                <span className="fa fa-angle-left font-18 color-999"></span>
                            </button>
                            : <Link to={linkUrl}
                                className="d-block square-8 lh-9 border-0 bg-initial color-initial text-center z-10 decoration-none dark:color-whitesmoke">
                                <span className="fa fa-angle-left font-18 color-999"></span>
                            </Link>
                    )
                    : null
            }
            <header
                className={"d-block pct:w-100 h-10 lh-10 pad-x2 font-18 font-bold text-left color-444A44 dark:color-whitesmoke"}>
                {headerTitle}
            </header>
            {children}
        </div>
    );
}

export const NotifSuccess = ({ message, position }) => {
    return (
        <div
            className="relative mg-x-auto text-center pct:w-64 pad-x2 pad-y2 radius-sm bg-green-inverse color-green">
            {message}
        </div>
    )
}

export const NotifError = ({ message }) => {
    return (
        <div
            className="relative mg-x-auto text-center pct:w-64 pad-x2 pad-y2 radius-sm bg-red-inverse color-red">
            {message}
        </div>
    )
}

export const PageLoader = () => {
    return (
        <div className={"next-page-animation"}></div>
    );
}

/* Copied from https://stackoverflow.com/posts/43020177/revisions */
function randPassword(letters, numbers, either) {
    var chars = [
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", // letters
        "0123456789", // numbers
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" // either
    ];

    function randInt(this_max) { // return int between 0 and this_max - 1
        let umax = Math.pow(2, 32);
        let max = umax - (umax % this_max);
        let r = new Uint32Array(1);
        do {
            crypto.getRandomValues(r);
        } while (r[0] > max);
        return r[0] % this_max;
    }

    function randCharFrom(chars) {
        return chars[randInt(chars.length)];
    }

    function shuffle(arr) { // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
        for (let i = 0, n = arr.length; i < n - 2; i++) {
            let j = randInt(n - i);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    return shuffle([letters, numbers, either].map(function (len, i) {
        return Array(len).fill(chars[i]).map(x => randCharFrom(x)).join('');
    }).concat().join('').split('')).join('')
}