import React, {Component} from 'react'
import Layout from '../layout'

class Canvas extends Component {

    render() {
        return (
            <div className="container outfit-generator">
                <div className="aside">
                    <h1 className="logo">
                        <img alt="outfit" src="images/outfit-logo.svg" width="240" />
                         generator
                    </h1>
                    <p>Do you feel like you’ve been stuck in a rut lately in terms of fashion or what to wear?</p>
                    <p>Wouldn’t it be great if you had a M&S outfit generator that you could use to get some inspiration!</p>
                    <p>All you’d have to do is click the ‘Generate outfit!’ button.</p>
                    <h2 className="outfit-generator__heading">Why not create your own outfit?</h2>
                    <p>You can create different looks using M&S products or can simply upload an item and find suggestions to create an outfit.</p>
                    <a href="/" className="button button--arrow button-outfit-builder">Outfit builder</a>
                </div>
                <Layout/>
            </div>
        )
    }
}


export default Canvas
