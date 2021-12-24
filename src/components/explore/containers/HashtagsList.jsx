import React, { useState, useRef, useCallback } from 'react';
import Hashtag from './Hashtag';
import { colors, hashTagsData } from '../Data';
import { scrollWithClick } from '../Controller';

export default function HashtagsList() {
    const [show, setShow] = useState('hide');

    const observer = useRef();
    const lastPostElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                console.log('last element');
            }
        });
        if (node) observer.current.observe(node);
    }, []);

    return (
        <div
            className="explore-hashtags-main"
            onMouseEnter={() => setShow('show')}
            onMouseLeave={() => setShow('hide')}
        >
            <div className="">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 15 9"
                    fill="#ffffff"
                    style={{ transform: 'rotate(90deg)' }}
                    className={`arrow-icon ${show}`}
                    onClick={() => {
                        scrollWithClick(-200);
                    }}
                >
                    <path d="M2.498 1.045a1.026 1.026 0 0 0-1.446.005 1.027 1.027 0 0 0 0 1.454l5.839 5.45a1.023 1.023 0 0 0 .83.29c-.017.004.02.006.057.006.27 0 .53-.106.726-.3l5.828-5.44a1.029 1.029 0 1 0-1.448-1.46l-5.19 4.845-5.196-4.85z"></path>
                </svg>
            </div>
            <div className="explore-hashtags">
                <>
                    {hashTagsData.map((hash, index) => {
                        if (hashTagsData.length === index + 1) {
                            return (
                                <div ref={lastPostElementRef} key={index}>
                                    <Hashtag
                                        key={index}
                                        name={hash.name}
                                        firstImg={hash.firstImg}
                                        secondImg={hash.secondImg}
                                        link={hash.link}
                                        background={
                                            colors[index % 2].background
                                        }
                                        color={colors[index % 2].color}
                                        border={colors[index % 2].border}
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <Hashtag
                                    key={index}
                                    name={hash.name}
                                    firstImg={hash.firstImg}
                                    secondImg={hash.secondImg}
                                    link={hash.link}
                                    background={colors[index % 2].background}
                                    color={colors[index % 2].color}
                                    border={colors[index % 2].border}
                                />
                            );
                        }
                    })}
                </>
            </div>

            <svg
                width="40"
                height="40"
                viewBox="0 0 15 9"
                fill="#ffffff"
                style={{ transform: 'rotate(270deg)', right: '10px' }}
                className={`arrow-icon ${show}`}
                onClick={() => {
                    scrollWithClick(200);
                }}
            >
                <path d="M2.498 1.045a1.026 1.026 0 0 0-1.446.005 1.027 1.027 0 0 0 0 1.454l5.839 5.45a1.023 1.023 0 0 0 .83.29c-.017.004.02.006.057.006.27 0 .53-.106.726-.3l5.828-5.44a1.029 1.029 0 1 0-1.448-1.46l-5.19 4.845-5.196-4.85z"></path>
            </svg>
        </div>
    );
}
