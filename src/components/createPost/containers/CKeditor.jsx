import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';

export default function ContainerCKeditor() {
    const [content, setContent] = useState('');

    return (
        <div style={{ marginTop: '150px' }}>
            <h2>Using CKEditor 5 build in React</h2>
            <button onClick={() => console.log(content)}>show content</button>
            <CKEditor
                editor={ClassicEditor}
                data={content}
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                    setContent(data);
                }}
                config={{
                    ckfinder: {
                        uploadUrl: '/upload'
                    }
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
        </div>
    );
}
