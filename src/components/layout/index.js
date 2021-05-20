import React, {Component} from 'react'
import '../../styles/dashboard.scss';


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            outfit: []
        };
    }

    componentDidMount() {
        fetch("./data/outfits.json")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    let keys = Object.keys(result);
                    let random = result[keys[keys.length * Math.random() << 0]];

                    this.setState({
                        isLoaded: true,
                        outfit : random
                    })

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const {error, isLoaded, outfit} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div class="main">
                    <div class="outfit-tiles">
                        <div class="outfit-layout outfit-layout--five">
                            <div class="outfit-tile-group">
                                <div class="outfit-tile">
                                    <img src=""/>
                                    <p>£30</p>
                                    <button class="button button--icon button--refresh"><span
                                        class="acc-text">Refresh</span></button>
                                </div>
                                <div class="outfit-tile">
                                    <img src=""/>
                                    <p>£30</p>
                                    <button class="button button--icon button--refresh"><span
                                        class="acc-text">Refresh</span></button>
                                </div>
                            </div>
                            <div class="outfit-tile-group">
                                <div class="outfit-tile outfit-tile--full-height">
                                    <img src=""/>
                                    <p>£30</p>
                                    <button class="button button--icon button--refresh"><span
                                        class="acc-text">Refresh</span></button>
                                </div>
                            </div>
                            <div class="outfit-tile-group">
                                <div class="outfit-tile">
                                    <img src=""/>
                                    <p>£30</p>
                                    <button class="button button--icon button--refresh"><span
                                        class="acc-text">Refresh</span></button>
                                </div>
                                <div class="outfit-tile">
                                    <img src=""/>
                                    <p>£30</p>
                                    <button class="button button--icon button--refresh"><span
                                        class="acc-text">Refresh</span></button>
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
                                    <button class="button">Save & share</button>
                                    <button class="button button--inverted button--icon">
                                        <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-663.000000, -518.000000)">
                                                    <g transform="translate(450.000000, 239.000000)">
                                                        <g transform="translate(213.000000, 279.000000)">
                                                            <circle fill="#000000" cx="15" cy="15" r="15"></circle>
                                                            <g id="Loading" transform="translate(8.275862, 6.724138)"
                                                               fill="#ffffff">
                                                                <path
                                                                    d="M6.58820292,1.23828871 C7.80509966,1.23793705 8.98985842,1.68641104 9.96761985,2.51752011 L8.41110912,2.7707468 C8.09583878,2.79606506 7.85815206,3.10979677 7.88022099,3.47148619 C7.90228991,3.8331756 8.17575742,4.1058583 8.49102776,4.08054004 L8.57094641,4.08054004 L11.2349012,3.6439423 C11.3848072,3.61909977 11.5199623,3.52692922 11.6106109,3.38772294 C11.7012595,3.24851665 11.7399696,3.07368758 11.7182187,2.90172613 L11.3376537,-0.154458098 C11.2935159,-0.516147514 11.002158,-0.76830571 10.6868876,-0.717669191 C10.3716173,-0.667032673 10.151821,-0.332776461 10.1959588,0.0289129553 L10.3481848,1.24265469 C7.9121694,-0.601906843 4.72491053,-0.473035639 2.40813175,1.56369676 C0.091352978,3.60042917 -0.846032504,7.09762572 0.0729306409,10.2758621 L0.997703517,9.21492954 C0.61924879,7.27124782 1.03230917,5.23561285 2.12010853,3.68351809 C3.20790789,2.13142333 4.85222766,1.23154552 6.58820292,1.23828871 Z"
                                                                    id="Shape"></path>
                                                                <path
                                                                    d="M14.358944,5.28023235 L13.3859749,6.3422109 C13.9241777,9.0203704 12.8784842,11.7812057 10.7647577,13.262737 C8.65103116,14.7442683 5.91584872,14.6334853 3.90853516,12.9850397 L5.20983128,12.7840067 C5.54153251,12.7333202 5.77278391,12.3987345 5.72634574,12.0366884 C5.67990757,11.6746424 5.37336501,11.4222356 5.04166378,11.4729221 L2.23887213,11.9099503 C2.08115354,11.9348173 1.93895451,12.0270787 1.84358162,12.1664222 C1.74820874,12.3057658 1.70748122,12.4807672 1.73036565,12.6528982 L2.13076445,15.7120957 C2.1725417,16.0346102 2.42493468,16.2747267 2.72335469,16.2758621 L2.80743844,16.2758621 C2.96515703,16.2509951 3.10735606,16.1587336 3.20272895,16.0193901 C3.29810184,15.8800466 3.33882935,15.7050451 3.31594492,15.5329141 L3.11174153,13.9596126 C5.61756402,16.0714414 9.09263088,16.1511609 11.6775357,14.1561155 C14.2624405,12.16107 15.3518885,8.55842982 14.362948,5.27586207 L14.358944,5.28023235 Z"
                                                                    id="Shape"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        Generate new outfit!
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

                    <div>
                        <ul>
                            {outfit.map(article => (
                                <li key={article.articleId}>
                                    {article.imageURL} {article.category}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


            )
        }

    }
}


export default Layout
