var React = require('react');
var {Link} = require('react-router');
var Util = require('Util');
var PlacesMock = require('PlacesMock');

var Create = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var description = this.refs.description.value;
        Util.insertPlace(name, description);
        console.log('added');
        console.log(PlacesMock);
    },
    render: function(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="row">
                        <div className="small-3 columns">
                            <label className="text-right middle">Name</label>
                        </div>
                        <div className="small-9 columns">
                            <input type="text" id="middle-label" ref="name"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-3 columns">
                            <label className="text-right middle">Description</label>
                        </div>
                        <div className="small-9 columns">
                            <textarea rows="20" ref="description"></textarea>
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