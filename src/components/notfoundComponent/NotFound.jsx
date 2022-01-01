/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';

/**
 * NotFound Component
 * @function NotFound
 * @description used to for handling 404 not found pages
 * @returns {Component}
 */
export default function NotFound() {
    const theme = useContext(ThemeContext)[0];

    const css = `
        .B3EfW {
            color: rgb(${themes[theme]?.whiteOnDark});
        }
        .rDKIp {
            color: rgb(${themes[theme]?.whiteOnDark});
        }
    `;
    return (
        <>
            <style>{css}</style>
            <div data-testid={`modal-ts`} className="djknkjdjkndjn">
                <div
                    data-testid={`modal-container-ts`}
                    className="modal-containerEdit"
                >
                    <div>
                        <div className="QiSmE">
                            <h3 className="B3EfW">There's nothing here.</h3>
                            <div className="rDKIp">
                                Whatever you were looking for doesn't currently
                                exist at this address. Unless you were looking
                                for this error page, in which case: Congrats!
                                You totally found it.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
