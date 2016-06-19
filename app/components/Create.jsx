var React = require('react');
var {Link} = require('react-router');

var Create = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        
    },
    render: function(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="row">
                        <div className="small-3 columns">
                            <label className="text-right middle">Title</label>
                        </div>
                        <div className="small-9 columns">
                            <input type="text" id="middle-label" ref="title"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-3 columns">
                            <label className="text-right middle">Description</label>
                        </div>
                        <div className="small-9 columns">
                            <textarea placeholder="None" rows="20"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-3 columns">
                            
                        </div>
                        <div className="small-9 columns">
                            <button type="submit" className="hollow button">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
})
module.exports = Create;