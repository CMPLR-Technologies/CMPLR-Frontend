import firebase from '../../firebase/index';

export const handleActionWithoutArg = (elementId, setContent) => {
    const element = document.getElementById(elementId);

    if (element.style.backgroundColor === 'gray') {
        element.style.backgroundColor = 'unset';
        element.style.padding = '0';
    } else {
        element.style.backgroundColor = 'gray';
        element.style.padding = '2px';
    }
    document.execCommand(element.dataset['element'], false, null);
    setContent(document.getElementById('editable-content').innerHTML);
};

export const handleUploadImage = (file, setContent) => {
    const uploadTask = firebase.storage().ref(`images/${file.name}`).put(file);

    uploadTask.on(
        'state_changed',
        () => {},
        error => {
            console.log(error);
        },
        () => {
            firebase
                .storage()
                .ref('images')
                .child(file.name)
                .getDownloadURL()
                .then(url => {
                    document.getElementById('editable-content').focus();
                    document.execCommand('insertImage', false, url);
                });
        }
    );

    setContent(document.getElementById('editable-content').innerHTML);
};

export const handleHeading = (cmd, setContent) => {
    let size = document.getElementById('headSelector').value;
    document.execCommand(cmd, false, size);
    setContent(document.getElementById('editable-content').innerHTML);
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
