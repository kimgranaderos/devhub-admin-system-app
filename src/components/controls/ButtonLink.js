import React from 'react'
import { Link } from 'react-router-dom';

export default function ButtonLink(props) {
    const {url, name, ...other} = props;
    return (
        <Link to={url}
        other={other}>{ name }</Link>
    )
}
