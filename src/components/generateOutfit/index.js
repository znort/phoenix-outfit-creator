import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../styles/dashboard.scss';
import Layout from './goLayout'


class GenerateOutfit extends Component {
    render() {
        return (
            <div class="container outfit-generator">
                <div class="aside">
                    <h1 class="logo">
                        <img src="images/outfit-logo.svg" width="240" />
                         builder
                    </h1>
                    <p>Do you feel like you’ve been stuck in a rut lately in terms of fashion or what to wear?</p>
                    <p>Wouldn’t it be great if you had a M&S outfit generator that you could use to get some inspiration!</p>
                    <p>All you’d have to do is click the ‘Generate outfit!’ button.</p>
                    <h2 class="outfit-generator__heading">Inspire Me</h2>
                    <p>Wouldn’t it be great if you had a M&S outfit generator that you could use to get some inspiration!</p>
                    <Link to="/" class="button button--arrow button-outfit-builder">Outfit generator</Link>
                </div>
                <Layout/>
            </div>
        )
    }
}

export default GenerateOutfit
