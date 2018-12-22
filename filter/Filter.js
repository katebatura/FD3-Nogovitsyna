var Filter = React.createClass({

    displayName: 'price',

    propTypes: {
        words: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                key: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
            })
        )
    },

    getInitialState: function() {
        return { 
            wordsArr: this.props.words,
            selectedCheckbox: null,
            freeText: null 
        };
      },

    render: function() {

        var optionsGroup = this.props.words.map( v => 
            React.DOM.option( {key: v.key}, v.name),
        );

        return React.DOM.div( null, 
            React.DOM.div(null, 
                React.DOM.input( {type: 'checkbox', onClick: this.sortWords} ),
                React.DOM.input( {type: 'text', onChange: this.sortWords} )
            ),            
            React.DOM.select( {multiple: true, size: '10'}, optionsGroup )
            )        

        },

});