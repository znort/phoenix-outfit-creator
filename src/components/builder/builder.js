import React, {Component} from 'react'
import '../../styles/dashboard.scss';
import ProductSelector from "./ProductSelector";

const style = {
    width: '510px',
};

class Builder extends Component {
    render() {
        return (

            <div>

                <div class="main">
                    <div class="outfit-tiles">
                        <div class="outfit-layout outfit-layout--five">
                            <div class="outfit-tile-group">
                                <div class="builder-tile">
                                    <img src="" alt=""/>
                                </div>
                                <div class="builder-tile">
                                    <img src="" alt=""/>
                                </div>
                            </div>
                            <div class="outfit-tile-group">
                                <div class="builder-tile outfit-tile--full-height">
                                    <img src="" alt=""/>
                                </div>
                            </div>
                            <div class="outfit-tile-group">
                                <div class="builder-tile">
                                    <img src="" alt=""/>
                                </div>
                                <div class="builder-tile">
                                    <img src="" alt=""/>
                                </div>
                            </div>
                            <div class="footer">
                                <ul class="tile-chooser">
                                    <li class="tile tile--two">
                                        <button class="button button--icon"><span class="acc-text">Show two items</span>
                                        </button>
                                    </li>
                                    <li class="tile tile--three">
                                        <button class="button button--icon"><span
                                            class="acc-text">Show three items</span>
                                        </button>
                                    </li>
                                    <li class="tile tile--four">
                                        <button class="button button--icon"><span
                                            class="acc-text">Show four items</span>
                                        </button>
                                    </li>
                                    <li class="tile tile--five">
                                        <button class="button button--icon"><span
                                            class="acc-text">Show five items</span>
                                        </button>
                                    </li>
                                </ul>
                                <div class="button-group">
                                    <button id="summon_flyout" class="button button--inverted button--icon"
                                            style={style}>Add items & create outfits
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="outfit-actions">
                        <ul>
                            <li class="action action--share"><span class="acc-text">Share the outfit</span></li>
                            <li class="action action--settings"><span class="acc-text">Outfit settings</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default Builder
