import React from 'react';
import { useState } from 'react';
import {
    AiOutlineBold,
    AiOutlineItalic,
    AiOutlineUnderline,
    AiFillCamera,
    AiOutlineUnorderedList,
    AiOutlineOrderedList,
    AiOutlineStrikethrough,
    AiOutlineLink
} from 'react-icons/ai';
import { FaHeading } from 'react-icons/fa';
import { BsPenFill } from 'react-icons/bs';
import { FaBrush } from 'react-icons/fa';

export default function HandMadeTextEditor() {
    const [content, setContent] = useState();
    const handleBold = () => {
        console.log('bold called');
        let command =
            document.getElementById('to-bold-words').dataset['element'];
        document.execCommand(command, false, null);
        setContent(document.getElementById('editable-content').innerHTML);
    };
    const handleItalic = () => {
        console.log('italic called');
        let command =
            document.getElementById('to-italic-words').dataset['element'];
        document.execCommand(command, false, null);
        setContent(document.getElementById('editable-content').innerHTML);
    };
    const handleUnderline = () => {
        console.log('underline called');
        let command =
            document.getElementById('to-underline-words').dataset['element'];
        document.execCommand(command, false, null);
        setContent(document.getElementById('editable-content').innerHTML);
    };
    const handleUploadImage = () => {
        console.log('image upload called');
        let command =
            document.getElementById('to-image-words').dataset['element'];
        const url =
            'https://www.bing.com/th?id=OIP.xVhP7ICLDeHprTWGBsMZCQHaFG&w=178&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2';
        document.execCommand(command, false, url);
        setContent(document.getElementById('editable-content').innerHTML);
    };
    const handleHeading = () => {
        console.log('heading called');
        let command =
            document.getElementById('to-heading-words').dataset['element'];
        let Size = 'H1';
        document.execCommand(command, false, Size);
        setContent(document.getElementById('editable-content').innerHTML);
    };
    const handleUnorderedList = () => {
        console.log('unorder  called');
        let command =
            document.getElementById('to-unorder-words').dataset['element'];
        document.execCommand(command, false, null);
        setContent(document.getElementById('editable-content').innerHTML);
    };
    const handleOrderedList = () => {
        console.log('order  called');
        let command =
            document.getElementById('to-order-words').dataset['element'];
        document.execCommand(command, false, null);
        setContent(document.getElementById('editable-content').innerHTML);
    };

    const handleStrike = () => {
        console.log('strike  called');
        let command =
            document.getElementById('to-strike-words').dataset['element'];
        document.execCommand(command, false, null);
        setContent(document.getElementById('editable-content').innerHTML);
    };

    const handleCreateLink = () => {
        console.log('link  called');
        let command =
            document.getElementById('to-link-words').dataset['element'];
        document.execCommand(command, false, 'www.google.com');
        setContent(document.getElementById('editable-content').innerHTML);
    };

    const handleColorChange = () => {
        console.log('color  called');
        let command = document.getElementById('to-hilitecolor-words').dataset[
            'element'
        ];
        let highlightDegree = document.getElementById(
            'to-hilitecolor-words'
        ).value;
        document.execCommand(command, false, highlightDegree);
        setContent(document.getElementById('editable-content').innerHTML);
    };

    const handleForeColorChange = () => {
        console.log('color  called');
        let command =
            document.getElementById('to-forecolor-words').dataset['element'];
        let colorDegree = document.getElementById('to-forecolor-words').value;
        document.execCommand(command, false, colorDegree);
        setContent(document.getElementById('editable-content').innerHTML);
    };

    const handleColors = () => {
        document.execCommand('foreColor', false, '#000000');
        document.execCommand('hiliteColor', false, '#ffffff');
    };

    const showOptions = () => {
        let selectedText = document.all
            ? document.selection.createRange().text
            : document.getSelection();

        console.log('selected  ' + selectedText);
        if (selectedText !== '') {
            //show the options
        } else {
            //hide the options
        }
    };

    return (
        <>
            <div className="main-richeditor">
                <div
                    className="content"
                    contentEditable="true"
                    id="editable-content"
                    onMouseUpCapture={e => showOptions(e)}
                    onInput={handleColors}
                ></div>
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
                        onClick={handleUploadImage}
                        data-element="insertImage"
                        type="button"
                        id="to-image-words"
                        className="btn"
                    >
                        <AiFillCamera />
                    </button>

                    <button
                        onClick={handleHeading}
                        data-element="formatBlock"
                        type="button"
                        id="to-heading-words"
                        className="btn"
                    >
                        <FaHeading />
                    </button>
                    <button
                        onClick={handleUnorderedList}
                        data-element="insertUnorderedList"
                        type="button"
                        id="to-unorder-words"
                        className="btn"
                    >
                        <AiOutlineUnorderedList />
                    </button>
                    <button
                        onClick={handleOrderedList}
                        data-element="insertOrderedList"
                        type="button"
                        id="to-order-words"
                        className="btn"
                    >
                        <AiOutlineOrderedList />
                    </button>
                    <button
                        onClick={handleStrike}
                        data-element="strikeThrough"
                        type="button"
                        id="to-strike-words"
                        className="btn"
                    >
                        <AiOutlineStrikethrough />
                    </button>

                    <button
                        onClick={handleCreateLink}
                        data-element="createLink"
                        type="button"
                        id="to-link-words"
                        className="btn"
                    >
                        <AiOutlineLink />
                    </button>

                    <FaBrush />
                    <input
                        type="color"
                        data-element="hiliteColor"
                        onChange={handleColorChange}
                        id="to-hilitecolor-words"
                        className="colorStyle"
                    />

                    <BsPenFill />
                    <input
                        type="color"
                        data-element="foreColor"
                        onChange={handleForeColorChange}
                        id="to-forecolor-words"
                        className="colorStyle"
                    />
                </div>
            </div>
        </>
    );
}
