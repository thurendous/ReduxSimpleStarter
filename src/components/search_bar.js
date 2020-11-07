
import React, { component } from "react";
const Component = React.Component;

// 这里使用一个class继承了reactcomponent的意思，继承了reactcomponent的所有的方法。
// 因为我们想要这个部件能够跟别的地方交流以及知道自己状态等很多功能，所以我们就如此处理。创建一个class。
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "Starting Value" };
    }

    //render方法是必须加上的否则会报错
    //刚开始推荐 使用的是函数部件，当需要的时候在使用class部件。
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
                {/* <p>
                    value of the input: {this.state.term}
                </p> */}
            </div>
        )
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);

    }
}



export default SearchBar;