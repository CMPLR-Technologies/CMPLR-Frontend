import React from 'react';
import { useState } from 'react';
import {
    AiOutlineBold,
    AiOutlineItalic,
    AiOutlineUnderline,
    AiFillCamera
} from 'react-icons/ai';

export default function HandMadeTextEditor() {
    const [content, setContent] = useState();
    const handleBold = () => {
        console.log('bold called');
        let command =
            document.getElementById('to-bold-words').dataset['element'];
        document.execCommand(command, false, null);
        console.log(document.getElementById('editable-content').innerHTML);
    };
    const handleItalic = () => {
        console.log('italic called');
        let command =
            document.getElementById('to-italic-words').dataset['element'];
        document.execCommand(command, false, null);
    };
    const handleUnderline = () => {
        console.log('underline called');
        let command =
            document.getElementById('to-underline-words').dataset['element'];
        document.execCommand(command, false, null);
    };
    const handleUploadImage = () => {
        console.log('image upload called');
        let command =
            document.getElementById('to-image-words').dataset['element'];
        const url =
            'https://www.bing.com/th?id=OIP.xVhP7ICLDeHprTWGBsMZCQHaFG&w=178&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2';
        document.execCommand(command, false, url);
    };
    const handleHeading = () => {
        console.log('heading upload called');
        let command =
            document.getElementById('to-heading-words').dataset['element'];
        const url =
            'https://www.bing.com/th?id=OIP.xVhP7ICLDeHprTWGBsMZCQHaFG&w=178&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2';
        document.execCommand(command, false, url);
    };
    const handleUnorderedList = () => {
        console.log('heading upload called');
        let command =
            document.getElementById('to-unorder-words').dataset['element'];
        document.execCommand(command, false, null);
    };
    const handleOrderedList = () => {
        console.log('heading upload called');
        let command =
            document.getElementById('to-order-words').dataset['element'];
        const url =
            'https://www.bing.com/th?id=OIP.xVhP7ICLDeHprTWGBsMZCQHaFG&w=178&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2';
        document.execCommand(command, false, url);
    };
    return (
        <>
            <div className="main-richeditor">
                <div className="text-editor-header">
                    <button
                        onClick={handleBold}
                        data-element="bold"
                        type="button"
                        id="to-bold-words"
                        className="btn"
                    >
                        <AiOutlineBold />
                    </button>
                    <button
                        onClick={handleItalic}
                        data-element="italic"
                        type="button"
                        id="to-italic-words"
                        className="btn"
                    >
                        <AiOutlineItalic />
                    </button>
                    <button
                        onClick={handleUnderline}
                        data-element="underline"
                        type="button"
                        id="to-underline-words"
                        className="btn"
                    >
                        <AiOutlineUnderline />
                    </button>
                    <button
                        onClick={handleHeading}
                        data-element="heading"
                        type="button"
                        id="to-heading-words"
                        className="btn"
                    >
                        <AiFillCamera />
                    </button>
                    <button
                        onClick={handleUploadImage}
                        data-element="insertImage"
                        type="button"
                        id="to-image-words"
                        className="btn"
                    >
                        <AiFillCamera />
                    </button>
                    <button
                        onClick={handleUnorderedList}
                        data-element="insertUnorderedList"
                        type="button"
                        id="to-unorder-words"
                        className="btn"
                    >
                        <AiFillCamera />
                    </button>
                    <button
                        onClick={handleOrderedList}
                        data-element="insertOrderedList"
                        type="button"
                        id="to-order-words"
                        className="btn"
                    >
                        <AiFillCamera />
                    </button>
                </div>
                <div
                    className="content"
                    contentEditable="true"
                    id="editable-content"
                ></div>
            </div>
        </>
    );
}
