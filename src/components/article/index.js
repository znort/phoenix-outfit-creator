import React, {Component} from 'react'

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articleIndex: 0,
            article: this.props.articles[0]
        }
        // console.log(this.props.articles);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        let newIndex = this.state.articleIndex + 1;
        if (newIndex>3) newIndex = 0;
        // console.log("HANDLE " + newIndex)

        this.setState({
            articleIndex: newIndex,
            article: this.props.articles[newIndex]
        })

        // console.log(this.state.article)
    }

    render() {
        const {article} = this.state;
        return (
            <div>
                <img className="articleImage" alt="" src={article.imageURL}/>
                <p>£{article.priceRange.min_price}</p>
                <button className="button button--icon button--refresh" onClick={this.handleClick}><span
                    className="acc-text">Refresh</span></button>
            </div>
        )
    }
}

export default Article



