/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import firebase from '../../../firebase/index';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'draft-js/dist/Draft.css';
import 'firebase/storage';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

export default function RichTextEditor() {
    return (
        <>
            <div>
                <EditorContainer />
            </div>
        </>
    );
}

function EditorContainer() {
    // eslint-disable-next-line no-unused-vars
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [progress, setProgress] = useState(0);
    const [content, setContent] = useState();

    function uploadImageCallBack(file) {
        console.log(file);
        return new Promise((resolve, reject) => {
            const uploadTask = firebase
                .storage()
                .ref(`images/${file.name}`)
                .put(file);
            uploadTask.on(
                'state_changed',
                snapshot => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                error => {
                    reject(error);
                    console.log(error);
                },
                () => {
                    firebase
                        .storage()
                        .ref('images')
                        .child(file.name)
                        .getDownloadURL()
                        .then(url => {
                            console.log(url);
                            resolve(url);
                        });
                }
            );
        });

        // const xhr = new XMLHttpRequest();
        //     xhr.open('POST', 'https://api.imgur.com/3/image');
        //     xhr.setRequestHeader('Authorization', 'Client-ID ##clientid##');
        //     const data = new FormData();
        //     data.append('image', file);
        //     xhr.send(data);
        //     xhr.addEventListener('load', () => {
        //         const response = JSON.parse(xhr.responseText);
        //         console.log(response);
        //         resolve(response);
        //     });
        //     xhr.addEventListener('error', () => {
        //         const error = JSON.parse(xhr.responseText);
        //         console.log(error);
        //         reject(error);
        //     });
    }

    return (
        <>
            <div style={{ textAlign: 'center' }} className="editor">
                <button onClick={() => console.log(content)}>
                    {' '}
                    show content
                </button>
                <Editor
                    wrapperStyle={{ color: 'black', backgroundColor: 'white' }}
                    editorStyle={{ color: 'black' }}
                    style={{ color: 'black' }}
                    editorState={editorState}
                    onEditorStateChange={newState => {
                        setEditorState(newState);
                        setContent(
                            draftToHtml(
                                convertToRaw(newState.getCurrentContent())
                            )
                        );
                    }}
                    toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: false },
                        history: { inDropdown: false },
                        image: {
                            uploadCallback: uploadImageCallBack,
                            alt: { present: true, mandatory: true }
                        }
                    }}
                />
            </div>
        </>
    );
}
