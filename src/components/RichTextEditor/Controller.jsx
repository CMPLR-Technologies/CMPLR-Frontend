import { uploadSelectedImage, uploadSelectedVideo } from './Service';

export const handleActionWithoutArg = (elementId, setContent) => {
    const element = document.getElementById(elementId);
    document.execCommand(element.dataset['element'], false, null);
    setContent(document.getElementById('editable-content').innerHTML);
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
    let size = document.getElementById('headSelector').value;
    document.execCommand(cmd, false, size);
    setContent(document.getElementById('editable-content').innerHTML);
    document.getElementById('headSelector').value = 'none';
};

export const handleCreateLink = setContent => {
    let command = document.getElementById('to-link-words').dataset['element'];
    document.execCommand(command, false, 'www.google.com');
    setContent(document.getElementById('editable-content').innerHTML);
};

export const handleColor = (elementId, setContent) => {
    const element = document.getElementById(elementId);
    document.execCommand(element.dataset['element'], false, element.value);
    setContent(document.getElementById('editable-content').innerHTML);
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
