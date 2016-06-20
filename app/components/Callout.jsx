var React = require('react');

var Callout = React.createClass({
    render: function(){
        return (
            <div class="success callout" data-closable="slide-out-right">
                <h5>This a friendly message.</h5>
                <p>And when you're done with me, I close using a Motion UI animation.</p>
                <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
})
module.exports = Callout;