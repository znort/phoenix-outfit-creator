import React, {Component} from 'react'
import '../../styles/dashboard.scss';

const style = {
    height: '32rem',
    width: '48rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
    backgroundColor: 'white'
};

class Canvas extends Component {

  render() {
    return (
        <div>
        <h1>Canvas page</h1>
          <section>
          <div style={{ ...style }}>
                {`aaa`}
                <br />
                <br />
                {`aaa`}
            </div>
          </section>
        </div>
    )
  }
}


export default Canvas