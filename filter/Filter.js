var Filter = React.createClass({

    displayName: 'price',

    propTypes: {
        words: React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired,
        )
    },

    getInitialState: function() {
        return { 
            wordsArr: this.props.words,
            selectedCheckbox: false,
            freeText: '' 
        };
      },

    sortWords: function() {
        this.state.selectedCheckbox ? 
        this.setState( {selectedCheckbox: false}, this.processWords ) :
        this.setState( {selectedCheckbox: true}, this.processWords );
    },

    filterWords: function(e) {
        this.setState( {freeText: e.target.value}, this.processWords );
    },

    processWords: function() {
        let wordsArr = this.props.words.slice();

        if(this.state.selectedCheckbox) {
            wordsArr.sort();
        }

        if(this.state.freeText) {
            wordsArr = wordsArr.filter( v => v.indexOf(this.state.freeText) != -1 );
        }

        this.setState( {wordsArr: wordsArr} );
    },

    render: function() {

        var optionsGroup = this.state.wordsArr.map( ( v, i ) => 
            React.DOM.option( {key: i}, v),
        );

        return React.DOM.div( null, 
            React.DOM.div(null, 
                React.DOM.input( {type: 'checkbox', onClick: this.sortWords} ),
                React.DOM.input( {type: 'text', onChange: this.filterWords} )
            ),            
            React.DOM.select( {multiple: true, size: '10'}, optionsGroup )
            )        

        },

});