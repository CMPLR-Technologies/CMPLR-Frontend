import React from 'react';

export default function Badge(props) {
    const { num } = props;
    return <div className="badge">{num}</div>;
}
