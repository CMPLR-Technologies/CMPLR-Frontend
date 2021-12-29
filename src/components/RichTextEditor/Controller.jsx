import { uploadSelectedImage, uploadSelectedVideo } from './Service';

export const handleActionWithoutArg = (elementId, setContent) => {
    const titleDiv = document.getElementById('content-title-cpost');
    titleDiv.contentEditable = false;

    const element = document.getElementById(elementId);
    document.execCommand(element.dataset['element'], false, null);
    setContent(document.getElementById('editable-content').innerHTML);
    titleDiv.contentEditable = true;
};

export const handleUploadImage = async (
    file,
    setContent,
    setSpinner,
    userToken
) => {
    setSpinner(true);
    uploadSelectedImage(file, setContent, setSpinner, userToken);
};

export const handleUploadVideo = async (
    file,
    setContent,
    setSpinner,
    userToken
) => {
    setSpinner(true);
    uploadSelectedVideo(file, setContent, setSpinner, userToken);
};

export const handleHeading = (cmd, setContent) => {
    const titleDiv = document.getElementById('content-title-cpost');
    titleDiv.contentEditable = false;

    let size = document.getElementById('headSelector').value;
    document.execCommand(cmd, false, size);
    setContent(document.getElementById('editable-content').innerHTML);
    document.getElementById('headSelector').value = 'none';

    titleDiv.contentEditable = true;
};

export const handleCreateLink = (link, setLink, handleClose, setContent) => {
    // let newLink = document.createElement('a');
    // newLink.href = link;
    // newLink.value = link;

    document.getElementById(
        'editable-content'
    ).innerHTML += `<a href=${link}>${link}</a>`;

    //document.getElementById('editable-content').appendChild(newLink);
    setContent(document.getElementById('editable-content').innerHTML);
    setLink('https://');
    handleClose();
};

export const handleColor = (elementId, setContent) => {
    const titleDiv = document.getElementById('content-title-cpost');
    titleDiv.contentEditable = false;

    const element = document.getElementById(elementId);
    document.execCommand(element.dataset['element'], false, element.value);
    setContent(document.getElementById('editable-content').innerHTML);

    titleDiv.contentEditable = true;
};

export const handleChanges = setContent => {
    //to reset the colors automatically
    document.execCommand('foreColor', false, '#000000');
    document.execCommand('hiliteColor', false, '#ffffff');
    setContent(document.getElementById('editable-content').innerHTML);
};
export const shortcutController = (e, setContent) => {
    if (e.altKey && e.code === 'KeyB') {
        handleActionWithoutArg('to-bold-words', setContent);
    } else if (e.altKey && e.code === 'KeyS') {
        handleActionWithoutArg('to-strike-words', setContent);
    } else if (e.altKey && e.code === 'KeyU') {
        handleActionWithoutArg('to-underline-words', setContent);
    } else if (e.altKey && e.code === 'KeyI') {
        handleActionWithoutArg('to-italic-words', setContent);
    }
};
